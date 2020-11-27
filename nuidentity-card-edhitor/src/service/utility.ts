import { IMAGE_HEIGHT, IMAGE_WIDTH } from "constant/other";

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

/**
 * 画像データを適切にリサイズする
 * @param imageUrl 画像データ
 */
export const resizeImage = (imageUrl: string): Promise<string> => {
  return new Promise((res) => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = IMAGE_WIDTH;
      canvas.height = IMAGE_HEIGHT;
      const ctx = canvas.getContext('2d');
      if (ctx === null) {
        res('');
      } else {
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
        res(canvas.toDataURL());
      }
    }
  });
};
