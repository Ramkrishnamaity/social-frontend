import type { ReactElement, ReactNode } from "react";


export interface RoutesData {
    path: string,
    url?: string,
    name: string
    icon?: ReactElement | ReactNode,
    role?: "Admin"| "Client" | "All"
    type: "PRENT" | "CHILDREN" | "SUBCHILDREN"
    element?: ReactElement | ReactNode
    children: RoutesData[] | []
}

export interface ApiResponse<data = any, error = any> {
    status: boolean
    error?: error
    data?: data
    massage?: string
    credentials?: string,
    dataLimit?: number
    totalPage?: number
}

export interface ManageRequest {
    status?: boolean
}
