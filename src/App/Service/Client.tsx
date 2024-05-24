import { ClientResponse } from "../lib/DataSet/Client"
import { ApiResponse, ManageRequest } from "../lib/DataSet/Global"
import { HttpGet, HttpPut } from "../lib/HttpClient"
import { ClientGetUrl, ClientManageUrl } from "./Endpoint"

export const ClientGet = (page: number = 1): Promise<ApiResponse<ClientResponse[]>> => {
    return HttpGet(ClientGetUrl + page)
}

export const ClientChangeStatus = (clientId: string, manageRequest: ManageRequest): Promise<ApiResponse> => {
    return HttpPut(ClientManageUrl + clientId, manageRequest)
}