import { BackgroundType, ResizerType } from "constant/other";
import { Action } from "model/action";

export interface ApplicationStore {
  nuiRegistration: string;
  nuiName: string;
  nuiDepot: string;
  nuiMastersName: string;
  nuiTwitterName: string;
  nuiMemo: string;
  nuiImage: string;
  backgroundType: BackgroundType;
  resizerType: ResizerType;
  dispatch: (action: Action) => void;
}