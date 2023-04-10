export const BASE_URL_API = 'http://127.0.0.1:8000'

/* This code defines a constant object `APP_API` that contains various API endpoints as properties.
Each property is an object that contains specific endpoints related to a particular feature or
functionality of the application. For example, `APP_API.FEED` contains endpoints related to feeds
such as `list`, `like`, `create`, `save`, and `COMMENT`. Similarly, `APP_API.USER` contains
endpoints related to user profiles such as `detail`, `LIST`, and `UPDATE_PROFILE`. These endpoints
can be used to make API requests to the server and retrieve or manipulate data. */
export const APP_API = {
  FEED: {
    list: '/feed/',
    like: '/feed/like/',
    create: '/feed/create/',
    save: '/feed/save/',
    COMMENT: '/feed/comment/',
  },
  SUGGESTION: {
    user: '/suggestion/user/',
  },
  AUTH: {
    LOGIN: '/login/',
    CREATE: '/user/',
    GET_NEW_TOKEN: '/api/token/refresh/',
  },
  USER: {
    detail: '/user/',
    LIST: '/user/',
    UPDATE_PROFLE: (userId: string | number) => `/user/${userId}/`,
  },
  STORY: {
    LIST: '/story/',
    CREATE: '/story/create/',
  },
  EXPLORE: {
    LIST: '/explore/',
  },
  REEL: {
    LIST: '/reel/',
    CREATE: '/reel/create/',
  },
  INBOX: {
    LIST: '/message/',
  },
  PROFILE: {
    FEED: {
      LIST: '/feed/by-user/',
    },
    REEL: {
      LIST: '/reel/by-user/',
    },
  },
  SAVED: {
    LIST: '/feed/saved-by-user/',
  },
  FOLLOW: {
    FOLLOWING_BY_USER: (userName: string) => `/user/following-by-user/?user_name=${userName}`,
    FOLLOWER_BY_USER: (userName: string) => `/user/follower-by-user/?user_name=${userName}`,
    FOLLOW: '/user/follower/create/',
    UNFOLLOW: (userName: string) => `/user/follower/unfollow/${userName}/`,
  },
}
