import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageTitle from '../../../Component/PageTitle'
import { ProductSingelGet } from '../../../Service/MarketPlase'
import { ProductDataType } from '../../../lib/DataSet/EcommerceDataType'
import moment from 'moment'

type Props = {}

const ProductSingelScreen: React.FC<Props> = () => {
    const [product, setProduct] = useState<ProductDataType | null>(null)
    const [showImage, setShowImage] = useState<ProductDataType['productMedia'][0] | null>(null)
    let { id: productId } = useParams();

    useEffect(() => {
        if (productId) {
            ProductSingelGet(productId).then((data) => {
                let result = data.data || null
                if (data.status && result) {
                    setProduct(result)
                    if (result.productMedia.length > 0) {
                        setShowImage(result.productMedia[0])
                    }
                }
            }).catch(() => {

            })
        } else {

        }
    }, [productId])
    return (
        <div className="container-fluid">
            <PageTitle
                pageTitle='Products'
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
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="tab-content pt-0">
                                        <div
                                            className="tab-pane active show"
                                            id="product-1-item"
                                            role="tabpanel"
                                        >
                                            <img
                                                src={showImage?.url}
                                                alt=""
                                                style={{
                                                    width: "auto",
                                                    height: "25rem"
                                                }}
                                                className="img-fluid mx-auto d-block rounded"
                                            />
                                        </div>
                                    </div>
                                    <ul className="nav nav-pills nav-justified" role="tablist">
                                        {
                                            typeof (product?.productMedia) !== "undefined" ?
                                                product?.productMedia?.map((item, index) => {
                                                    return (
                                                        <li className="nav-item" key={index} role="presentation">
                                                            <button
                                                                className="nav-link product-thumb show active"
                                                                onClick={() => setShowImage(item)}
                                                            >
                                                                <img
                                                                    src={item.url}
                                                                    alt=""
                                                                    style={{
                                                                        height: 100
                                                                    }}
                                                                    className="img-fluid mx-auto d-block rounded"
                                                                />
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                                : null
                                        }
                                    </ul>
                                </div>
                                {/* end col */}
                                <div className="col-lg-7">
                                    <div className="ps-xl-3 mt-3 mt-xl-0">
                                        <Link to="#" className="text-primary">
                                            {product?.customer.fristName} {product?.customer.lastName}
                                        </Link>
                                        <h4 className="mb-3">{product?.productName}</h4>
                                        {/* <p className="text-muted float-start me-3">
                                            <span className="mdi mdi-star text-warning" />
                                            <span className="mdi mdi-star text-warning" />
                                            <span className="mdi mdi-star text-warning" />
                                            <span className="mdi mdi-star text-warning" />
                                            <span className="mdi mdi-star" />
                                        </p>
                                        <p className="mb-4">
                                            <Link to="" className="text-muted">
                                                ( 36 Customer Reviews )
                                            </Link>
                                        </p> */}
                                        <h6 className="text-danger text-uppercase">20 % Off</h6>
                                        <h4 className="mb-4">
                                            Price :
                                            {/* <span className="text-muted me-2">
                                                <del>$80 USD</del>
                                            </span> */}
                                            <b>${product?.price} USD</b>
                                        </h4>
                                        <h4>
                                            {
                                                product?.stock && product?.stock > 0 ?
                                                    <span className="badge bg-soft-success text-success mb-4">
                                                        Instock ({product?.stock})
                                                    </span>
                                                    :
                                                    <span className="badge bg-soft-danger text-danger mb-4">
                                                        Outstock
                                                    </span>

                                            }
                                        </h4>

                                        <p className="text-muted mb-4">
                                            {
                                                product?.productDesc
                                            }
                                        </p>
                                        {/* <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div>
                                                    <p className="text-muted">
                                                        <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2" />
                                                        Sed ut perspiciatis unde
                                                    </p>
                                                    <p className="text-muted">
                                                        <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2" />
                                                        Nemo enim ipsam voluptatem
                                                    </p>
                                                    <p className="text-muted">
                                                        <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2" />
                                                        Temporibus autem quibusdam et
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <p className="text-muted">
                                                        <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2" />
                                                        Itaque earum rerum hic
                                                    </p>
                                                    <p className="text-muted">
                                                        <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2" />
                                                        Donec quam felis ultricies nec
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                {/* end col */}
                            </div>
                            {/* end row */}
                            <div className="table-responsive mt-4">
                                <table className="table table-bordered table-centered mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Customer</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Discount</th>
                                            <th>Payment Mode</th>
                                            <th>Order Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product?.orders?.map((item, i) => {
                                                const StatusClass = item.orderStatus.status === "Canceled" ?
                                                    "bg-danger" : item.orderStatus.status === "Pending" ?
                                                        "bg-warning" : item.orderStatus.status === "Confirmed" ?
                                                            "badge bg-danger" : "bg-info";
                                                return (
                                                    <tr key={i}>
                                                        <td>{item.customer.fristName + " " + item.customer.lastName}</td>
                                                        <td>${item.product.price}</td>
                                                        <td>
                                                            <div className="row align-items-center g-0">
                                                                <div className="col-auto">
                                                                    <span className="me-2">{item.product.quantity}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{item.product.discount}</td>
                                                        <td>{item.paymentMode}</td>
                                                        <td>
                                                            <span className={`badge ${StatusClass}`}>{item.orderStatus.status}</span>
                                                        </td>
                                                        <td>
                                                            {moment(item.createdOn).fromNow()}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* end card*/}
                </div>
                {/* end col*/}
            </div>
        </div>
    )
}

export default ProductSingelScreen