class MXCache {
  storage: Storage;
  constructor(isLoacl = true) {
    this.storage = isLoacl ? localStorage : sessionStorage;
  }

  setCache(key: string, value: Object) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }
  getCache(key: string) {
    let value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  deleteCache(key: string) {
    this.storage.removeItem(key);
  }
  clearCache() {
    this.storage.clear();
  }
  key(index: number) {
    return this.storage.key(index);
  }
}

const localCache = new MXCache();
const sessionCache = new MXCache(false);

export { localCache, sessionCache };
