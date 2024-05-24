import { ApiResponse } from "../lib/DataSet/Global";
import { CommentData, PostGetRespons, PostStatusChangeRequest, ReportData } from "../lib/DataSet/PostData";
import { HttpGet, HttpPut } from "../lib/HttpClient";
import { PostCommentGetUrl, PostGetUrl, PostRepoteGetUrl, PostStatusChangeUrl } from "./Endpoint";

export const PostGetAll = (page: number): Promise<ApiResponse<PostGetRespons[]>> => {
    return HttpGet(`${PostGetUrl}page/${page}`)
}
export const ReportPostGetAll = (page: number): Promise<ApiResponse<PostGetRespons[]>> => {
    return HttpGet(`${PostGetUrl}report-post/page/${page}`)
}
export const PostStatusChange = (postId: string, request: PostStatusChangeRequest): Promise<ApiResponse> => {
    return HttpPut(PostStatusChangeUrl + postId, request)
}

export const PostCommentGet = (postId: string, page: number = 0): Promise<ApiResponse<CommentData[]>> => {
    return HttpGet(`${PostCommentGetUrl}${postId}/${page}`)
}

export const PostRepoteGet = (postId: string, page: number = 0): Promise<ApiResponse<ReportData[]>> => {
    return HttpGet(`${PostRepoteGetUrl}${postId}/${page}`)
}