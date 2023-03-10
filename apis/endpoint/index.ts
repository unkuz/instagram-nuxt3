export const BASE_URL_API = 'http://127.0.0.1:8000'

export const APP_API = {
  FEED: {
    list: '/feed/',
    like: '/feed/like/',
    create: '/feed/create/',
    save: '/feed/save/',
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
}
