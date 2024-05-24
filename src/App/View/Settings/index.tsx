import React, { useEffect, useState } from "react"
import PageTitle from "../../Component/PageTitle"
import { ComminctionGet, ComminctionUpdate } from "../../Service/MarketPlase"
import { ErrorMassage } from "../../lib/Config"
import { toast } from "react-toastify"

interface AuxProps {

}

export const Comminction: React.FC<AuxProps> = () => {
    const [ownPersentage, setOwnPersentage] = useState<string>("0")
    const [affiliatedPersentage, setAffiliatedPersentage] = useState<string>("0")

    useEffect(() => {
        ComminctionGet().then((Comminctiondata) => {
            if (Comminctiondata && Comminctiondata.status && Comminctiondata.data) {

                setOwnPersentage(Comminctiondata.data.ownPersentage)
                setAffiliatedPersentage(Comminctiondata.data.affiliatedPersentage)
            }
        }).catch(() => {
            toast(ErrorMassage, { type: toast.TYPE.ERROR });
        })
    }, [])

    const updateComminction = () => {
        ComminctionUpdate({ ownPersentage, affiliatedPersentage }).then((Comminctiondata) => {
            if (Comminctiondata && Comminctiondata.status) {
                toast(Comminctiondata.massage, { type: toast.TYPE.SUCCESS });
            } else {
                toast(Comminctiondata.massage, { type: toast.TYPE.WARNING });
            }
        }).catch(() => {
            toast(ErrorMassage, { type: toast.TYPE.ERROR });
        })
    }

    return (
        <div className="container-fluid">
            <PageTitle
                pageTitle='Comminction'
                parent={[{
                    path: '/settings',
                    title: 'settings'
                }]}
            />
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-3 header-title">Set your Protal Comminction</h4>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Own Comminction (%)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Own Comminction"
                                    value={ownPersentage}
                                    onChange={(e) => setOwnPersentage(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Share Comminction (%)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Share Comminction"
                                    value={affiliatedPersentage}
                                    onChange={(e) => setAffiliatedPersentage(e.target.value)}
                                />
                            </div>
                            <button
                                className="btn btn-primary waves-effect waves-light"
                                onClick={() => updateComminction()}
                            >
                                Submit
                            </button>
                        </div>{" "}
                        {/* end card-body*/}
                    </div>{" "}
                    {/* end card*/}
                </div>

            </div>
        </div>
    )
}