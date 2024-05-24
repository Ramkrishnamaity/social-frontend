import { CustomarResponse } from "../lib/DataSet/Customar";
import { ApiResponse, ManageRequest } from "../lib/DataSet/Global";
import { HttpGet, HttpPut } from "../lib/HttpClient";
import { CustomarGetUrl, CustomarManageUrl } from "./Endpoint";

export const CustomarGet = (page: number = 1): Promise<ApiResponse<CustomarResponse[]>> => {
    return HttpGet(CustomarGetUrl + page)
}

export const CustomarChangeStatus = (CustomarId: string, manageRequest: ManageRequest): Promise<ApiResponse> => {
    return HttpPut(CustomarManageUrl + CustomarId, manageRequest)
}
