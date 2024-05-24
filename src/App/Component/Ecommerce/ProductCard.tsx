import React from 'react'
import { ProductDataType } from '../../lib/DataSet/EcommerceDataType'
import { Link } from 'react-router-dom'

type Props = {
    item: ProductDataType
}

const ProductCard: React.FC<Props> = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card product-box">
                <div className="card-body">
                    <div className="product-action">
                        <Link
                            to={`/dashboad/ecommerce/product/${item._id}`}
                            className="btn btn-success btn-xs waves-effect waves-light"
                        >
                            <i className="mdi mdi-eye" />
                        </Link>
                        <button
                            className="btn btn-danger btn-xs waves-effect waves-light"
                        >
                            <i className="mdi mdi-close" />
                        </button>
                    </div>
                    <div className="bg-light">
                        {
                            item.productMedia.length > 0 ?
                                <img
                                    src={item.productMedia[0].url}
                                    alt="product-pic"
                                    className="img-fluid"
                                />
                                : null
                        }
                    </div>
                    <div className="product-info">
                        <div className="row align-items-center">

                            <div className="col">
                                <h5 className="font-16 mt-0 sp-line-1">
                                    <Link to={"#"} className="text-dark">
                                        {item.productName}
                                    </Link>
                                </h5>
                                {/* <div className="text-warning mb-2 font-13">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div> */}
                                <h5 className="m-0">
                                    <span className="text-muted"> Stocks : {item.stock}</span>
                                </h5>
                            </div>
                            <div className="col-auto">
                                <div className="product-price-tag">${item.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end card*/}
        </div>

    )
}

export default ProductCard;