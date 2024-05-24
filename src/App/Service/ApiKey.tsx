import { ApiKeyRespons } from "../lib/DataSet/Apikey"
import { ApiResponse } from "../lib/DataSet/Global"
import { HttpGet } from "../lib/HttpClient"
import { ApiKeyGetUrl } from "./Endpoint"

export const ApiKeyGet = (): Promise<ApiResponse<ApiKeyRespons>> => {
    return HttpGet(ApiKeyGetUrl)
}