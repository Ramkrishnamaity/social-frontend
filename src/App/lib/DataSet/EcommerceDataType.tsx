export interface ProductDataType {
    _id: string
    productName: string
    productDesc: string
    productMedia: ProductMedum[]
    price: number
    sellerAddress: SellerAddress[]
    stock: number
    createdOn: string
    updatedOn: string
    category: Category
    subcategory: Subcategory
    customer: Customer
    discount: number
    sellingPrice: number
    orders?: Orders[]
}

export interface ProductMedum {
    url: string
    mediaType: string
    _id: string
}

export interface SellerAddress {
    lat: string
    long: string
    _id: string
}

export interface Category {
    _id: string
    name: string
}

export interface Subcategory {
    _id: string
    name: string
    image: string
}

export interface Customer {
    _id: string
    fristName: string
    lastName: string
    image: string
}


export interface Orders {
    _id: string
    orderID: string
    paymentMode: string
    createdOn: string
    customer: Customer
    orderStatus: OrderStatus,
    product: OrdersProduct
}

export interface OrdersProduct {
    _id: string
    price: number
    purchasePrice: number
    discount: number
    quantity: number
}

export interface OrderStatus {
    status: "Pending" | "Confirmed" | "Canceled" | "Delivered" | "Out for Delivery"
    date: string
    _id: string
}