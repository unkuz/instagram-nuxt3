export interface IAccountLogin {
  user_name: string
  password: string
}

export interface IFilePost {
  name: string
  src: string
  type: string
  size: string
  file: File
}

export enum TypePostEnum {
  FEED,
  REEL,
  STORY,
  NONE,
}

export enum SignInUpEnum {
  SIGN_IN,
  SIGN_UP,
}

export enum ProfileSectionEnum {
  POST,
  REEL,
  SAVE,
}
