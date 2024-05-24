import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectName } from '../lib/Config';
// import { Link } from 'react-router-dom';

interface AuxProps {
    pageTitle: string
    parent: {
        title: string
        path: string
    }[]
}

const PageTitle: React.FC<AuxProps> = ({ pageTitle, parent }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="page-title-box">
                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                                <Link to={"#"}>{ProjectName}</Link>
                            </li>
                            {
                                parent.map((it, index) => {
                                    return (
                                        <li className="breadcrumb-item" key={index}>
                                            <Link to={"/dashboad" + it.path}>{it.title}</Link>
                                        </li>
                                    )
                                })
                            }

                            <li className="breadcrumb-item active">{pageTitle}</li>
                        </ol>
                    </div>
                    <h4 className="page-title">{pageTitle}</h4>
                </div>
            </div>
        </div>
    )
}

export default PageTitle