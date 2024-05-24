
import React, { useEffect, useState } from 'react'
import PageTitle from '../../Component/PageTitle';
import { Link } from 'react-router-dom';
import { DataTable, DataTableThead } from '../../Component/DataTable';
import { CustomarChangeStatus, CustomarGet } from '../../Service/Customar';
import { CustomarResponse } from '../../lib/DataSet/Customar';
import moment from 'moment';
import { CustomModal } from '../../Component/Modal/CustomModal';
import { toast } from 'react-toastify';
import { ErrorMassage } from '../../lib/Config';

type Props = {}

type CustomarResponseTable = CustomarResponse & { index: number }

const Customar = (props: Props) => {
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
            element: 'Email',
            slug: 'email',
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
            slug: 'action'
        }
    ]

    const [customarData, setCustomar] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1)
    const [totalCount, SetTotalCount] = useState<number>(10)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalId, setIsModalId] = useState<CustomarResponseTable | undefined>();
    const [refress, setRefress] = useState<boolean>(false);

    useEffect(() => {
        CustomarGet(page).then((data) => {
            console.log('data', data);
            if (data.status && data?.data && data.totalPage) {
                let newArr: any[] = data.data.map((it, index) => makeProjectTableData({ ...it, index }))
                setCustomar(newArr);
                SetTotalCount(data.totalPage * 10 );
            }
        }).catch((error: any) => {
            console.log('error', error)
        })
    }, [page])


    const customarActiveDeactive = (item: CustomarResponseTable | undefined) => {

        if (item) {
            CustomarChangeStatus(item._id, { status: !item.status }).then((data) => {
                if (data.status) {
                    setCustomar((customarData: any) => {
                        customarData[item.index] = makeProjectTableData({ ...item, status: !item.status })
                        return customarData
                    })
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


    const makeProjectTableData = (item: CustomarResponseTable) => {
        return {
            sl: `#${item.index + 1}`,
            customer: (<>
                <img src={`https://ui-avatars.com/api/?background=random&rounded=true&name=${item.fristName} ${item.lastName}`} alt={`${item.fristName} ${item.lastName}`} 
                    className="me-2 rounded-circle"
                />
                <Link
                    to="#"
                    className="text-body fw-semibold"
                >
                    {item.fristName} {item.lastName}
                </Link>
            </>),
            email: item.email,
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
                            setIsModalId({ ...item })
                            setIsModalOpen(true);
                        }}
                    >
                        {!item.status ? "Active" : "Deactive"}
                    </button>
                </div>
            )

        }
    }

    return (
        <div className="container-fluid">
            {/* start page title */}
            <PageTitle
                pageTitle='Manage Customar'
                parent={[{
                    path: '/customar',
                    title: 'Customar'
                }]}
            />
            {/* end page title */}

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            {/* <div className="row mb-2">
                                <div className="col-sm-4">
                                    <Link
                                        to="#"
                                        className="btn btn-danger mb-2"
                                    >
                                        <i className="mdi mdi-plus-circle me-2" /> Add Customers
                                    </Link>
                                </div>
                                <div className="col-sm-8">
                                    <div className="text-sm-end">
                                        <button
                                            type="button"
                                            className="btn btn-success mb-2 me-1"
                                        >
                                            <i className="mdi mdi-cog" />
                                        </button>
                                        <button type="button" className="btn btn-light mb-2 me-1">
                                            Import
                                        </button>
                                        <button type="button" className="btn btn-light mb-2">
                                            Export
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            <DataTable
                                thead={thead}
                                tboby={customarData}
                                changePage={(page) => setPage(page)}
                                currentPage={page}
                                pageContent={10}
                                totalCount={totalCount}
                            />
                        </div>
                        {/* end card-body*/}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col */}
            </div>
            {/* end row */}
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
                    customarActiveDeactive(isModalId)
                }}
            />
        </div>
    )
}

export default Customar;