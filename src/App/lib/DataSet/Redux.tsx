export interface ClientData  {  
    token: string
    userImage: string
    fristName: string
    lastName: string
}

export interface ClientDataRedux  {  
    token?: string
    userImage?: string
    fristName?: string
    lastName?: string,
    type: "Admin"| "Client" | "All"
}

export interface ClientRedux {
    ClientData: ClientDataRedux | null
    isLogin: boolean
    ClientToken: string | null
    type: "Admin"| "Client" | "All"
}