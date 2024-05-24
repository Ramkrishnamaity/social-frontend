import React, { useEffect, useState } from "react"
import { CommentData } from "../../lib/DataSet/PostData"
import moment from "moment"
import { PostCommentGet } from "../../Service/PostService"
import { toast } from "react-toastify"
import { ErrorMassage } from "../../lib/Config"

interface AuxProps {
    postId: string | undefined
}

export const CommentsList: React.FC<AuxProps> = ({ postId }) => {

    const [comments, setComments] = useState<any[]>([])
    const [dataLimit, setDataLimit] = useState<number>(0)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        if (postId) {
            PostCommentGet(postId, page).then((commentData) => {
                if (commentData && commentData.status && commentData.data && commentData.dataLimit) {
                    setComments((comments) => comments.concat(commentData.data));
                    setDataLimit(commentData.dataLimit)
                } else {
                    toast(ErrorMassage, { type: toast.TYPE.INFO });
                }
            }).catch(() => {
                toast(ErrorMassage, { type: toast.TYPE.ERROR });
            })
        }
    }, [postId, page])


    return (
        <div className="card" style={{ padding: 0, margin: 0 }}>
            <div className="card-body" style={{ padding: 0, margin: 0 }}>
                <div className="float-end">
                    {/* <select className="form-select form-select-sm ">
                        <option>Recent</option>
                        <option value={1}>Old</option>
                    </select> */}
                </div>{" "}
                {/* end dropdown*/}
                <h4 className="pb-2 mt-0 font-16">Comments ({dataLimit})</h4>
                {/* <div className="clerfix" /> */}
                <div style={{ height: "35rem", overflowX: "hidden", scrollbarWidth: "none" }}>
                    {
                        comments.map((item: CommentData, index) => {
                            return (
                                <div className="d-flex align-items-start mt-3" key={index}>
                                    <span className="pe-2">
                                        <img src={`https://ui-avatars.com/api/?background=random&rounded=true&name=${item.customerData.fristName} ${item.customerData.lastName}`} alt={`${item.customerData.fristName} ${item.customerData.lastName}`}
                                            className="me-2 rounded-circle"
                                            height={32}
                                        />
                                    </span>
                                    <div className="w-100">
                                        <h5 className="mt-0 mb-1">
                                            {item.customerData.fristName}{" "}
                                            <small className="text-muted float-end">{moment(item.createdOn).fromNow()}</small>
                                        </h5>
                                        {item.comment}
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        dataLimit <= comments.length ? null :
                            <div className="text-center mt-2">
                                <button className="btn text-danger"
                                    onClick={() => setPage(page + 1)}
                                >
                                    {/* <i className="mdi mdi-spin mdi-loading me-1" />  */}
                                    Load more{" "}
                                </button>
                            </div>
                    }
                </div>
            </div>{" "}
        </div>
    )
}
