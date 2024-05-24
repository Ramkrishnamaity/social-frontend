import { AuthRequest, SignupRequest } from "../lib/DataSet/Auth"
import { ApiResponse } from "../lib/DataSet/Global"
import { HttpPost } from "../lib/HttpClient"
import { LoginUrl, SignupUrl } from "./Endpoint"

export const ClientLogin = (email: string, password: string): Promise<ApiResponse<AuthRequest>> => {
    return HttpPost(LoginUrl, { email, password })
}

export const ClientSignup = (signupRequest: SignupRequest): Promise<ApiResponse<AuthRequest>> => {
    return HttpPost(SignupUrl, signupRequest)
}