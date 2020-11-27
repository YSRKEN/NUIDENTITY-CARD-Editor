export type ActionType = ''
  | 'setNuiRegistration'
  | 'setNuiName'
  | 'setNuiDepot'
  | 'setNuiMastersName'
  | 'setNuiTwitterName'
  | 'setNuiMemo'
  | 'setNuiImage'
  | 'setBackgroundType'
  | 'setResizerType';

export type BackgroundType = '86' | '07';
export type ResizerType = 'force' | 'width' | 'height' | 'inside' | 'outside';

export const MESSAGE_WIDTH = 1076;
export const MESSAGE_HEIGHT = 650;
export const IMAGE_WIDTH = 327;
export const IMAGE_HEIGHT = 385;
