import { FontOption } from "model/FontOption";

export type ActionType = ''
  | 'setNuiRegistration'
  | 'setNuiName'
  | 'setNuiDepot'
  | 'setNuiMastersName'
  | 'setNuiTwitterName'
  | 'setNuiMemo'
  | 'setNuiImage'
  | 'setBackgroundType'
  | 'setNewTemplate'
  | 'setResizerType'
  | 'setBoldFlg'
  | 'setLargeFlg';

export type BackgroundType = '86' | '07' | '12';
export type NewTemplate = 'TRUE' | 'FALSE';
export type ResizerType = 'force' | 'width' | 'height' | 'inside' | 'outside';

export const MESSAGE_WIDTH = 1076;
export const MESSAGE_HEIGHT = 650;
export const IMAGE_WIDTH = 327;
export const IMAGE_HEIGHT = 385;

export const DEFAULT_FONT_OPTION: FontOption = {
  registration: { boldFlg: true, largeFlg: false },
  name: { boldFlg: true, largeFlg: false },
  depot: { boldFlg: true, largeFlg: false },
  mastersName: { boldFlg: true, largeFlg: false },
  twitterName: { boldFlg: true, largeFlg: false },
  memo: { boldFlg: true, largeFlg: false },
};