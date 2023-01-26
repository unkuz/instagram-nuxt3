export class LocalStoreSerive {
  static setLocalStorageData(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  static getLocalStorageData(key: string, defaultValue = '') {
    return localStorage.getItem(key) ?? defaultValue
  }

  static removeLocalStorageData(key: string) {
    return localStorage.removeItem(key)
  }
}
