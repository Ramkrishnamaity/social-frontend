import React, { useEffect, useState } from 'react'
import PageTitle from '../../../Component/PageTitle'
import { DataTable, DataTableThead } from '../../../Component/DataTable'
import { CategoryGetRespons } from '../../../lib/DataSet/MarketPlase'
import moment from 'moment'
import { CategoryChangeStatus, CategoryGet } from '../../../Service/MarketPlase'
import { CustomModal } from '../../../Component/Modal/CustomModal'
import { toast } from 'react-toastify'
import { ErrorMassage } from '../../../lib/Config'
import Modal from '../../../Component/Modal'
import { CreateCategory, EditData } from './Create'

type Props = {}
type CategoryGetResponsTable = CategoryGetRespons & { index: number, delete?: boolean }

export const Category: React.FC<Props> = () => {
    const [catagoryData, setCatagoryData] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1)
    const [totalCount, SetTotalCount] = useState<number>(10)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalId, setIsModalId] = useState<CategoryGetResponsTable | undefined>();
    const [refress, setRefress] = useState<boolean>(false);

    const [createModalIsopen, setCreateModalIsopen] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editData, setEditData] = useState<EditData | null>(null)

    const thead: DataTableThead[] = [
        {
            element: 'Sl',
            slug: 'sl'
        },
        {
            element: "Name",
            slug: "name",
        },
        {
            element: "Description",
            slug: 'description'
        },
        {
            element: 'Active Product',
            slug: 'productCount',
        },
        {
            element: 'Join Date',
            slug: 'joindate'
        },
        {
            element: 'Status',
            slug: 'status'
        },
        {
            element: 'Action',
            slug: 'action',
            className: 'sorting_disabled'
        }
    ]

    const makeCatagoryTableData = (item: CategoryGetResponsTable) => {
        return {
            sl: `#${item.index + 1}`,
            name: item.name,
            description: item.description,
            productCount: item.productCount,
            joindate: moment(item.createdOn).format('DD-MMM-YYYY'),
            status: item.status ? <span className="badge badge-soft-success">Active</span> : <span className="badge badge-soft-danger">Blocked</span>,
            action: (
                <div style={{ justifyContent: 'space-between' }}>
                    <button
                        className={`btn btn-outline-${!item.status ? 'success' : 'danger'} btn-xs`}
                        style={{
                            marginRight: 5
                        }}
                        onClick={() => {
                            setIsModalId({ ...item, delete: false })
                            setIsModalOpen(true);
                        }}
                    >
                        {!item.status ? "Active" : "Deactive"}
                    </button>
                    <button
                        className="btn btn-outline-info btn-xs waves-effect waves-light"
                        style={{
                            marginRight: 5
                        }}
                        onClick={() => {
                            setEditData({ description: item.description, name: item.name, _id: item._id })
                            setIsEdit(true)
                            setCreateModalIsopen(true)
                        }}
                    >
                        <i className="mdi mdi-square-edit-outline"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-xs waves-effect waves-light"
                        onClick={() => {
                            setIsModalId({ ...item, delete: true })
                            setIsModalOpen(true);
                        }}
                    >
                        Delete
                    </button>
                </div>
            )

        }
    }

    const catagoryDelete = (item: CategoryGetResponsTable | undefined) => {
        if (item) {
            CategoryChangeStatus(item._id, { isDeleted: true }).then((data) => {
                if (data.status) {
                    catagoryData.splice(item.index, 1)
                    setCatagoryData(catagoryData);
                    setRefress(!refress)
                    setIsModalOpen(false)
                    toast(data.massage, { type: toast.TYPE.SUCCESS });
                } else {
                    toast(data.massage, { type: toast.TYPE.ERROR });
                }
            }).catch(() => {
                setIsModalOpen(false)
                toast(ErrorMassage, { type: toast.TYPE.ERROR });

            })
        }
    }

    const catagoryChangeStatus = (item: CategoryGetResponsTable | undefined) => {
        if (item) {
            CategoryChangeStatus(item._id, { status: !item.status }).then((data) => {
                if (data.status) {
                    catagoryData[item.index] = makeCatagoryTableData({ ...item, status: !item.status })
                    setCatagoryData(catagoryData);
                    setRefress(!refress)
                    setIsModalOpen(false)
                    toast(data.massage, { type: toast.TYPE.SUCCESS });
                } else {
                    toast(data.massage, { type: toast.TYPE.ERROR });
                }
            }).catch(() => {
                setIsModalOpen(false)
                toast(ErrorMassage, { type: toast.TYPE.ERROR });

            })
        }
    }

    useEffect(() => {
        CategoryGet(page).then((data) => {
            if (data.status && data?.data && data.dataLimit) {
                let newArr: any[] = data.data.map((it, index) => makeCatagoryTableData({ ...it, index }))
                setCatagoryData(newArr);
                SetTotalCount(data.dataLimit);
            }
        })
    }, [page, createModalIsopen])

    return (
        <div className="container-fluid">
            <PageTitle
                pageTitle='Manage Category'
                parent={[
                    {
                        path: '/ecommerce',
                        title: 'Ecommerce',
                    }
                ]}
            />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="col-sm-4">
                                    <button
                                        onClick={() => setCreateModalIsopen(true)}
                                        className="btn btn-danger mb-2"
                                    >
                                        <i className="mdi mdi-plus-circle me-2" /> Add SubCategory
                                    </button>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-sm-end">
                                        {/* <button
                                            type="button"
                                            className="btn btn-success mb-2 me-1"
                                        >
                                            <i className="mdi mdi-cog" />
                                        </button>
                                        <button type="button" className="btn btn-light mb-2 me-1">
                                            Import
                                        </button> */}
                                        {/* <button type="button" className="btn btn-light mb-2">
                                            Export
                                        </button> */}
                                    </div>
                                </div>
                            </div>

                            <DataTable
                                thead={thead}
                                tboby={catagoryData}
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
                title={`${isModalId?.delete ? "delete" : isModalId?.status ? "Deactive" : "Active"} Confirmation`}
                content={`Are you sure you want to ${isModalId?.delete ? "delete" : isModalId?.status ? "Deactive" : "Active"} this Category?`}
                is_show={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false)
                }}
                onButtonClick={() => {
                    if (isModalId?.delete) {
                        catagoryDelete(isModalId)
                    } else {
                        catagoryChangeStatus(isModalId)
                    }
                }}
            />
            <Modal
                isOpen={createModalIsopen}
                onClose={() => {
                    setCreateModalIsopen(false)
                    setIsEdit(false)
                    setEditData(null)
                }}
            >
                <CreateCategory
                    onSubmit={() => {
                        setCreateModalIsopen(false)
                        setIsEdit(false)
                        setEditData(null)
                    }}
                    isEdit={isEdit}
                    editData={editData}
                />
            </Modal>
        </div>

    )
}