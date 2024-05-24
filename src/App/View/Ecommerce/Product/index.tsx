import React, { useEffect, useState } from 'react'
import PageTitle from '../../../Component/PageTitle';
import ProductCard from '../../../Component/Ecommerce/ProductCard';
import { ProductDataType } from '../../../lib/DataSet/EcommerceDataType';
import { ProductAllGet } from '../../../Service/MarketPlase';

type Props = {

}

const ProductScreen: React.FC<Props> = () => {

    const [products, setProducts] = useState<ProductDataType[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        ProductAllGet(page).then((data) => {
            let result = data.data ?? []
            if (data.status && result && data.totalPage) {
                setProducts(products => products.concat(result))
            }
        }).catch(() => {

        })
    }, [page])

    return (
        <div className="container-fluid">
            {/* start page title */}
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
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard item={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductScreen;