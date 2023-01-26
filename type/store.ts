export interface IStateStore<T> {
  data: T
  hasErr: boolean
  errors: Record<string, string>
}
