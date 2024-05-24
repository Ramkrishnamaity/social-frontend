import React, { useEffect, useState } from "react"
import PageTitle from "../../Component/PageTitle"
import { ApiKeyGet } from "../../Service/ApiKey"
import { ErrorMassage } from "../../lib/Config"
import { toast } from "react-toastify"

type Props = {}
export const ApiKeyView: React.FC<Props> = () => {
    const [isShowPass, setIsShowPass] = useState<boolean>(true)
    const [isShowSecre, setIsShowSecre] = useState<boolean>(true)

    const [apikey, setApiKey] = useState<string>("")
    const [secretKey, setSecretKey] = useState<string>("")


    useEffect(()=>{
        ApiKeyGet().then((data)=>{
            if (data && data.status && data.data) {
                setApiKey(data.data.apiKey)
                setSecretKey(data.data.secretKey)
            } else {
                toast(data.massage, { type: toast.TYPE.ERROR });
            }
        }).catch(()=>{
            toast(ErrorMassage, { type: toast.TYPE.ERROR });
        })
    },[])

    return (
        <div className="container-fluid">
            <PageTitle
                pageTitle='API Key'
                parent={[{
                    path: '/settings',
                    title: 'settings'
                }]}
            />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-2">
                                <div className="mb-3">
                                    <label className="form-label">API key (Public Key)</label>
                                    <div className="input-group">
                                        <input
                                            type={isShowPass ? "password" : "text"}
                                            className="form-control"
                                            value={apikey}
                                            readOnly
                                        />
                                        <button
                                            className="btn input-outline-text waves-effect waves-light btn-info btn-xs"
                                            type="button"
                                            onClick={()=>{setIsShowPass(!isShowPass)}}
                                        >
                                            <i className={isShowPass ? `fas fa-eye` : `fas fa-eye-slash`} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">SecretKey key (Private key)</label>
                                    <div className="input-group">
                                        <input
                                            type={isShowSecre ? "password" : "text"}
                                            className="form-control"
                                            value={secretKey}
                                            readOnly
                                        />
                                        <button
                                            className="btn input-outline-text waves-effect waves-light btn-info btn-xs"
                                            type="button"
                                            onClick={()=>{setIsShowSecre(!isShowSecre)}}
                                        >
                                            <i className={isShowSecre ? `fas fa-eye` : `fas fa-eye-slash`} />
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}