import { CategoryGetRespons, CategoryManageRequest, ComminctionUpdateRequest, ComminctionUpdateRespons, SubCategoryGetRespons, SubCategoryManageRequest } from "../lib/DataSet/MarketPlase"
import { ApiResponse } from "../lib/DataSet/Global"
import { HttpGet, HttpPost, HttpPut } from "../lib/HttpClient"
import {  CategoryUrl, ComminctionGetUrl, ComminctionUpdateUrl, ProductGetUrl, SubCategoryUrl } from "./Endpoint"
import { ProductDataType } from "../lib/DataSet/EcommerceDataType"


export const CategoryGet = (page: number): Promise<ApiResponse<CategoryGetRespons[]>> => {
    return HttpGet(CategoryUrl + page)
}

export const CategoryChangeStatus = (CategoryId: string, manageRequest: CategoryManageRequest): Promise<ApiResponse> => {
    return HttpPut(CategoryUrl + CategoryId, manageRequest)
}

export const CategoryCreate = (request: CategoryManageRequest): Promise<ApiResponse> => {
    return HttpPost(CategoryUrl, request)
}


export const SubCategoryGet = (page: number): Promise<ApiResponse<SubCategoryGetRespons[]>> => {
    return HttpGet(SubCategoryUrl + page)
}

export const SubCategoryChangeStatus = (SubCategoryId: string, manageRequest: SubCategoryManageRequest): Promise<ApiResponse> => {
    return HttpPut(SubCategoryUrl + SubCategoryId, manageRequest)
}

export const SubCategoryCreate = (request: SubCategoryManageRequest): Promise<ApiResponse> => {
    return HttpPost(SubCategoryUrl, request)
}

export const ComminctionUpdate = (request: ComminctionUpdateRequest): Promise<ApiResponse> => {
    return HttpPut(ComminctionUpdateUrl, request)
}

export const ComminctionGet = (): Promise<ApiResponse<ComminctionUpdateRespons>> => {
    return HttpGet(ComminctionGetUrl)
}

export const ProductAllGet = (page: number):Promise<ApiResponse<ProductDataType[]>> =>{
    return HttpGet(`${ProductGetUrl}?page=${page}`)
}
export const ProductSingelGet = (id: string):Promise<ApiResponse<ProductDataType>> =>{
    return HttpGet(`${ProductGetUrl}${id}`)
}