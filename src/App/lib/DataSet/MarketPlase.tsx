export interface CategoryCreateRequest {
    _id: string
    name: string
    description: string
}

export interface CategoryGetRespons {
    _id: string
    name: string
    description: string
    image: string
    createdOn: string
    productCount: number
    status: boolean
}

export interface CategoryManageRequest {
    name?: string
    description?: string
    status?: boolean
    isDeleted?: boolean
}

export interface SubCategoryManageRequest {
    name?: string
    description?: string
    status?: boolean
    isDeleted?: boolean
    categoryID?: string
}

export interface SubCategoryGetRespons {
    _id: string
    name: string
    description: string
    image: string
    categoryData: CategoryCreateRequest
    status?: boolean
    createdOn?: string
    productCount: number
}

export interface ComminctionUpdateRequest {
    ownPersentage: string
    affiliatedPersentage: string
  }

  export interface ComminctionUpdateRespons {
    _id: string
    ownPersentage: string
    affiliatedPersentage: string
  }
  
  
