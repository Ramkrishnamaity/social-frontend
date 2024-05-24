export interface PostGetRespons {
  _id: string
  postTitle: string
  postMedia: PostMedia[] | []
  visibility: string
  createdOn: string
  reportsCount: number
  commentsCount: number
  likeCount: number
  customerData: CustomerData
  status?: boolean
}

export interface PostMedia {
  url: string
  mediaType: string
  _id: string
}

export interface CustomerData {
  _id: string
  email: string
  fristName: string
  lastName: string
  userImage: string
}


export interface PostStatusChangeRequest {
  status: boolean
}



export interface ReportData {
  _id: string
  postID: string
  title: string
  note: string
  createdOn: string
  customerData: CustomerData
}

export interface CommentData {
  _id: string
  postID: string
  comment: string
  createdOn: string
  status: boolean
  customerData: CustomerData
}
