/**
 * ローカルストレージからデータを読み込む
 * @param key キー
 * @param defaultValue デフォルト値
 */
export const loadData = <T>(key: string, defaultValue: T): T => {
  const temp = window.localStorage.getItem(key);
  if (temp !== null) {
    return JSON.parse(temp) as T;
  } else {
    return defaultValue;
  }
};

/**
 * ローカルストレージにデータを書き込む
 * @param key キー
 * @param value 値
 */
export const saveData = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
