export interface SignupProps {

}

export interface LoginProps {

}

export interface SignupRequest {
    email: string
    password: string
    fristName: string
    lastName: string
    mobileNumber: string
}
export interface AuthRequest {
    token: string
    userImage: string
    fristName: string
    lastName: string
    type: "Admin"| "Client" | "All"
}
