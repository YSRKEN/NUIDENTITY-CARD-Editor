import { IMAGE_HEIGHT, IMAGE_WIDTH, ResizerType } from "constant/other";

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
export const resizeImage = (imageUrl: string, resizerType: ResizerType): Promise<string> => {
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
        switch (resizerType) {
          case 'force':
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
            break;
          case 'width': {
            const newWidth = canvas.width;
            const newHeight = Math.round(image.height * canvas.width / image.width);
            const newX = 0;
            const newY = (canvas.height - newHeight) / 2;
            ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            break;
          }
          case 'height': {
            const newHeight = canvas.height;
            const newWidth = Math.round(image.width * canvas.height / image.height);
            const newY = 0;
            const newX = (canvas.width - newWidth) / 2;
            ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            break;
          }
          case 'inside':
            if (image.width / image.height > canvas.width / canvas.height) {
              // リサイズ後のサイズより元画像の方が横長なので、横を合わせる
              const newWidth = canvas.width;
              const newHeight = Math.round(image.height * canvas.width / image.width);
              const newX = 0;
              const newY = (canvas.height - newHeight) / 2;
              ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            } else {
              // リサイズ後のサイズより元画像の方が縦長なので、縦を合わせる
              const newHeight = canvas.height;
              const newWidth = Math.round(image.width * canvas.height / image.height);
              const newY = 0;
              const newX = (canvas.width - newWidth) / 2;
              ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            }
            break;
          case 'outside':
            if (image.width / image.height < canvas.width / canvas.height) {
              // リサイズ後のサイズより元画像の方が縦長なので、横を合わせる
              const newWidth = canvas.width;
              const newHeight = Math.round(image.height * canvas.width / image.width);
              const newX = 0;
              const newY = (canvas.height - newHeight) / 2;
              ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            } else {
              // リサイズ後のサイズより元画像の方が横長なので、縦を合わせる
              const newHeight = canvas.height;
              const newWidth = Math.round(image.width * canvas.height / image.height);
              const newY = 0;
              const newX = (canvas.width - newWidth) / 2;
              ctx.drawImage(image, 0, 0, image.width, image.height, newX, newY, newWidth, newHeight);
            }
            break;
        }
        res(canvas.toDataURL());
      }
    }
  });
};
