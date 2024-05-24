import React, { useEffect, useState } from "react"
import PageTitle from "../../Component/PageTitle"
import { PostStatusChange, ReportPostGetAll } from "../../Service/PostService"
import { DataTable, DataTableThead } from "../../Component/DataTable"
import { PostGetRespons } from "../../lib/DataSet/PostData"
import moment from "moment"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { ErrorMassage } from "../../lib/Config"
import { CustomModal } from "../../Component/Modal/CustomModal"
import Modal from "../../Component/Modal"
import { PostCard } from "../../Component/Post"
import { CommentsList } from "../../Component/Post/Comment"
import { ReportList } from "../../Component/Post/Report"


interface AuxProps {

}
const thead: DataTableThead[] = [
    {
        element: 'Sl',
        slug: 'sl'
    },
    {
        element: "Customer",
        slug: "customer",
        className: "table-user"
    },
    {
        element: "Post Title",
        slug: 'postTitle'
    },
    {
        element: 'Like',
        slug: 'like'
    },
    {
        element: 'Comments',
        slug: 'comment '
    },
    {
        element: 'Visibility',
        slug: 'visibility',
    },
    {
        element: 'Public Date',
        slug: 'joindate'
    },
    {
        element: 'Status',
        slug: 'status'
    },
    {
        element: 'Action',
        slug: 'action'
    }
]

type PostGetResponsTable = PostGetRespons & { index: number }

export const RepotePost: React.FC<AuxProps> = () => {
    const [page, setPage] = useState<number>(1)
    const [postData, setPostData] = useState<PostGetResponsTable[]>([])
    const [totalCount, SetTotalCount] = useState<number>(10)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalId, setIsModalId] = useState<PostGetResponsTable | undefined>();
    const [refress, setRefress] = useState<boolean>(false);

    const [isPostModal, setIsPostModal] = useState<boolean>(false)
    const [modalOpenType, setModalOpenType] = useState<any>("")

    useEffect(() => {
        ReportPostGetAll(page).then((pagedata) => {
            if (pagedata && pagedata.status && pagedata.data && pagedata.dataLimit) {
                let newArr: any[] = pagedata.data.map((it, index) => makePostTableData({ ...it, index }))
                setPostData(newArr);
                SetTotalCount(pagedata.dataLimit)
            }
        }).catch((error: any) => {
            console.log('error', error)
            toast(ErrorMassage, { type: toast.TYPE.ERROR });
        })
    }, [page])


    const makePostTableData = (item: PostGetResponsTable) => {
        return {
            sl: `#${item.index + 1}`,
            customer: (<>
                <img src={`https://ui-avatars.com/api/?background=random&rounded=true&name=${item.customerData.fristName} ${item.customerData.lastName}`} alt={`${item.customerData.fristName} ${item.customerData.lastName}`} 
                    className="me-2 rounded-circle"
                />
                <Link
                    to="#"
                    className="text-body fw-semibold"
                >
                    {item.customerData.fristName} {item.customerData.lastName}
                </Link>
            </>),
            postTitle: item.postTitle,
            like: item.likeCount,
            comment: (<span
                onClick={() => {
                    setIsModalId({ ...item })
                    setIsPostModal(true)
                    setModalOpenType("commnet")
                }}
            >
                {item.commentsCount}
            </span>
            ),
            Visibility: item.visibility,
            joindate: moment(item.createdOn).format('DD MMM YYYY'),
            status: item?.status ? <span className="badge badge-soft-success">Active</span> : <span className="badge badge-soft-danger">Blocked</span>,
            action: (<>
                <div style={{ justifyContent: 'space-between', paddingBottom: 5 }}>
                    <button className="btn btn-outline-info btn-xs"
                        onClick={() => {
                            setIsModalId({ ...item })
                            setIsPostModal(true)
                            setModalOpenType("post")
                        }}
                    >
                        <i className="fas fa-eye" />
                    </button>
                    <button
                        className={`btn btn-outline-${!item.status ? 'success' : 'danger'} btn-xs`}
                        style={{
                            marginLeft: 5,
                            marginRight: 5
                        }}
                        onClick={() => {
                            setIsModalId({ ...item })
                            setIsModalOpen(true);
                        }}
                    >
                        {!item.status ? "Active" : "Deactive"}
                    </button>

                </div>
                <button className="btn btn-outline-danger btn-xs"
                    onClick={() => {
                        setIsModalId({ ...item })
                        setIsPostModal(true)
                        setModalOpenType("Report")
                    }}
                >
                    View Report ({item.reportsCount})
                </button>
            </>
            )

        }
    }

    const postActiveDeactive = (item: PostGetResponsTable | undefined) => {
        if (item) {
            PostStatusChange(item._id, { status: !item?.status }).then((response) => {
                if (response && response.status) {
                    setPostData((postData: any) => {
                        postData[item.index] = makePostTableData({ ...item, status: !item.status })
                        return postData
                    })
                    toast(response.massage, { type: toast.TYPE.SUCCESS })
                    setRefress(!refress)
                } else {
                    toast(response.massage, { type: toast.TYPE.WARNING })
                }
            }).catch(() => {
                toast(ErrorMassage, { type: toast.TYPE.ERROR })
            })
            setIsModalOpen(false)
        } else {
            toast(ErrorMassage, { type: toast.TYPE.ERROR })
        }
    }

    return (
        <div className="container-fluid">
            {/* start page title */}
            <PageTitle
                pageTitle='Manage Report'
                parent={[{
                    path: '/post',
                    title: 'Report Post'
                }]}
            />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                thead={thead}
                                tboby={postData}
                                changePage={(page) => setPage(page)}
                                currentPage={page}
                                pageContent={10}
                                totalCount={totalCount}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                type="Danger"
                title={`${!isModalId?.status ? "Active" : "Deactive"} Confirmation`}
                content={`Are you sure you want to ${!isModalId?.status ? "Active" : "Deactive"} this Customar?`}
                is_show={isModalOpen}
                // onDelete={customarActiveDeactive}
                onClose={() => {
                    setIsModalOpen(false)
                }}
                onButtonClick={() => {
                    postActiveDeactive(isModalId)
                }}
            />
            <Modal
                isOpen={isPostModal}
                onClose={() => {
                    setIsPostModal(false)
                }}
            >
                {
                    modalOpenType === "post" ?
                        <PostCard
                            comments={isModalId?.commentsCount}
                            createdOn={isModalId?.createdOn}
                            postLike={isModalId?.likeCount}
                            postTitle={isModalId?.postTitle}
                            userImage={isModalId?.customerData.userImage}
                            userName={`${isModalId?.customerData.fristName} ${isModalId?.customerData.lastName}`}
                            postMedia={isModalId?.postMedia}
                            onCommentClick={() => setModalOpenType("commnet")}
                        /> :
                        modalOpenType === "Report" ?
                            <ReportList postId={isModalId?._id} />
                            :
                            <CommentsList postId={isModalId?._id} />
                }

            </Modal>
        </div>
    )
}