import moment from "moment";
import React from "react";
import { PostMedia } from "../../lib/DataSet/PostData";
import { ImageGrid } from "../ImageVideoGrid";


interface AuxProps {
    userImage: string | undefined
    userName: string,
    createdOn: any
    postTitle: string | undefined
    postLike: number | 0 | undefined
    comments: number | 0 | undefined
    postMedia: PostMedia[] | undefined
    onCommentClick?: () => void
}

export const PostCard: React.FC<AuxProps> = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start">
                    <img
                        className="me-2 avatar-sm rounded-circle"
                        src="/assets/images/users/user-3.jpg"
                        alt="Generic placeholder"
                    />
                    <div className="w-100">

                        <h5 className="m-0">
                            <span className="text-reset">
                                {props.userName}
                            </span>
                        </h5>
                        <p className="text-muted">
                            <small>about {moment(props.createdOn).fromNow()}</small>
                        </p>
                    </div>
                </div>
                <p>{props.postTitle} ff</p>
                {
                    props.postMedia ?
                        <ImageGrid showModal={false}>
                            {props.postMedia.map((item, index) => {
                                if (item.mediaType === "image") {
                                    return (
                                        <img
                                            src={item.url}
                                            alt={props.postTitle}
                                            className="rounded me-1 mb-3 mb-sm-0 img-fluid"
                                            style={{height: "auto"}}
                                        />
                                    )
                                } else {
                                    return (
                                        <div className="col-sm-6" key={index}>
                                            <video
                                                src={item.url}
                                                className="rounded me-1 mb-3 mb-sm-0 img-fluid"
                                            />
                                        </div>
                                    )
                                }

                            })}
                        </ImageGrid> :
                        null
                }

                {/* <div className="col">
                        <img
                            src="assets/images/small/img-1.jpg"
                            alt="post-img"
                            className="rounded me-1 img-fluid mb-3"
                        />
                        <img
                            src="assets/images/small/img-3.jpg"
                            alt="post-img"
                            className="rounded me-1 img-fluid"
                        />
                    </div> */}
                <div className="mt-2">
                    <span
                        className="btn btn-sm btn-link text-muted ps-0"
                    >
                        <i className="mdi mdi-heart text-danger" /> {props.postLike} Likes
                    </span>
                    <span
                        className="btn btn-sm btn-link text-muted"
                        onClick={props.onCommentClick}
                    >
                        <i className="mdi mdi-comment-multiple-outline" /> {props?.comments} Comments
                    </span>
                </div>
            </div>
        </div>
    )
}
