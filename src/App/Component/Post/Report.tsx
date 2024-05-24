import React, { useEffect, useState } from "react"
import { ReportData } from "../../lib/DataSet/PostData"
import moment from "moment"
import { PostRepoteGet } from "../../Service/PostService"
import { toast } from "react-toastify"
import { ErrorMassage } from "../../lib/Config"

interface AuxProps {
    postId: string | undefined
}
export const ReportList: React.FC<AuxProps> = ({ postId }) => {

    const [report, setReport] = useState<ReportData[]>([])
    const [dataLimit, setDataLimit] = useState<number>(0)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        if (postId) {
            PostRepoteGet(postId, page).then((ReportData) => {
                if (ReportData && ReportData.status && ReportData.data && ReportData.dataLimit) {
                    setReport(ReportData.data);
                    setDataLimit(ReportData.dataLimit)
                } else {
                    toast(ErrorMassage, { type: toast.TYPE.INFO });
                }
            }).catch(() => {
                toast(ErrorMassage, { type: toast.TYPE.ERROR });
            })
        }
    }, [postId, page])


    return (
        <div className="card">
            <div className="card-body">
                <div className="float-end">
                    {/* <select className="form-select form-select-sm ">
                        <option>Recent</option>
                        <option value={1}>Old</option>
                    </select> */}
                </div>{" "}
                {/* end dropdown*/}
                <h4 className="mb-4 mt-0 font-16">Report ({dataLimit})</h4>
                <div className="clerfix" />
                {
                    report.map((item, index) => {
                        return (
                            <div className="d-flex align-items-start mt-3">
                                <span className="pe-2">
                                    <img src={`https://ui-avatars.com/api/?background=random&rounded=true&name=${item.customerData.fristName} ${item.customerData.lastName}`} alt={`${item.customerData.fristName} ${item.customerData.lastName}`}
                                        className="me-2 rounded-circle"
                                        height={30}
                                    />
                                </span>
                                <div className="w-100">
                                    <h5 className="mt-0 mb-1">
                                        {item.customerData.fristName}{" "}
                                        <small className="text-muted float-end">{moment(item.createdOn).fromNow()}</small>
                                    </h5>
                                    {item.note}
                                </div>
                            </div>
                        )
                    })
                }
                {
                    dataLimit <= report.length ? null :
                        <div className="text-center mt-2">
                            <button className="btn text-danger"
                                onClick={() => setPage(page + 1)}
                            >
                                <i className="mdi mdi-spin mdi-loading me-1" /> Load more{" "}
                            </button>
                        </div>
                }

            </div>{" "}
        </div>
    )
}
