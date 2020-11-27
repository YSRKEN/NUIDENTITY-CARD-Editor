import { BackgroundType } from "constant/other";
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
  dispatch: (action: Action) => void;
}