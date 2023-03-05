export interface IFriendshipStatus {
  following: boolean
  outgoing_request: boolean
}

export interface IUser {
  id: number
  user_name: string
  full_name: string
  profile_pic_url: string
  friendship_status: IFriendshipStatus
}

export interface IVideo {
  id: number
  src: string
  poster: string
}

export interface IMedia {
  video: IVideo[]
}

export interface IReel {
  user: IUser
  caption_text: string
  like_count: number
  total_comment: number
  media: IMedia
  id: number | number
}
