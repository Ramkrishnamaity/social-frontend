
import React, { useEffect, useState } from 'react'
import PageTitle from '../../Component/PageTitle';
import { Link } from 'react-router-dom';
import { DataTable, DataTableThead } from '../../Component/DataTable';
import { ClientChangeStatus, ClientGet } from '../../Service/Client';
// import moment from 'moment';
import { ClientResponse } from '../../lib/DataSet/Client';
import { CustomModal } from '../../Component/Modal/CustomModal';
import { toast } from 'react-toastify';
import { ErrorMassage } from '../../lib/Config';

type Props = {}

const ClientView = (props: Props) => {
    const thead: DataTableThead[] = [
        {
            element: 'Sl',
            slug: 'sl'
        },
        {
            element: "Customer",
            slug: "customer"
        },
        {
            element: "Phone",
            slug: 'phone'
        },
        {
            element: 'Email',
            slug: 'email',
        },
        // {
        //     element: 'Join Date',
        //     slug: 'joindate'
        // },
        {
            element: 'Status',
            slug: 'status'
        },
        {
            element: 'Action',
            slug: 'action',
            style: {
                padding: 10
            }
        }
    ]

    const [clientData, setClient] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1)
    const [totalCount, SetTotalCount] = useState<number>(10)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalId, setIsModalId] = useState<ClientResponse & { index: number } | undefined>();
    const [refress, setRefress] = useState<boolean>(false);


    useEffect(() => {
        ClientGet(page).then((data) => {
            if (data.status && data?.data && data?.dataLimit) {
                let newArr: any[] = data.data.map((it, index) => makeProjectTableData({ ...it, index }))
                setClient(newArr);
                SetTotalCount(data?.dataLimit);
            }
        })
    }, [page])

    const clientActiveDeactive = (item: ClientResponse & { index: number } | undefined) => {

        if (item) {
            ClientChangeStatus(item._id, { status: !item.status }).then((data) => {
                if (data.status) {
                    setClient((clientData: any) => {
                        clientData[item.index] = makeProjectTableData({ ...item, status: !item.status })
                        return clientData
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

    const makeProjectTableData = (item: ClientResponse & { index: number }) => {
        return {
            sl: `#${item.index + 1}`,
            customer: (<>
                <img
                    src={item.userImage}
                    alt="table-user"
                    className="img-fluid avatar-xs rounded"
                    style={{
                        marginRight: 5
                    }}
                />
                <Link
                    to="#"
                    className="text-body fw-semibold"
                >
                    {item.fristName} {item.lastName}
                </Link>
            </>),
            phone: item.mobileNumber,
            email: item.email,
            // joindate: moment(item.createdOn).format('DD-MMM-YYYY'),
            status: item.status ? <span className="badge badge-soft-success">Active</span> : <span className="badge badge-soft-danger">Deactive</span>,
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
                pageTitle='Manage Client'
                parent={[{
                    path: '/client',
                    title: 'Client'
                }]}
            />

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                thead={thead}
                                tboby={clientData}
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
                content={`Are you sure you want to ${!isModalId?.status ? "Active" : "Deactive"} this Client?`}
                is_show={isModalOpen}
                // onDelete={ClientActiveDeactive}
                onClose={() => {
                    setIsModalOpen(false)
                }}
                onButtonClick={() => {
                    clientActiveDeactive(isModalId)
                }}
            />
        </div>
    )
}
    ;
export default ClientView;