export interface ITimeLine {
  created_at: string
  id: number
  location: Location
  comments: Comment[]
  carousel_media: CarouselMedia
  user: User3
  like_count: number
  has_liked: boolean
  caption_text: string
  is_seen: boolean
  tags: string[]
  is_saved: boolean
}

export interface Location {
  short_name: string
}

export interface Comment {
  text: string
  created_at: string
  user: User
  comment_like_count: number
  reply: Reply[]
  id: number
}

export interface User {
  pk: number
  username: string
  full_name: string
  is_private: boolean
  profile_pic_url: string
}

export interface Reply {
  text: string
  created_at: string
  user: User2
  comment_like_count: number
}

export interface User2 {
  pk: number
  username: string
  full_name: string
  is_private: boolean
  profile_pic_url: string
}

export interface CarouselMedia {
  images: any[]
  videos: Video[]
}

export interface Video {
  id: number
  src: string
}

export interface User3 {
  id: number
  username: string
  full_name: string
  profile_pic_url: string
  friendship_status: FriendshipStatus
}

export interface FriendshipStatus {
  following: boolean
  outgoing_request: boolean
}
