import { BackgroundType, NewTemplate, ResizerType } from "constant/other";
import { Action } from "model/action";
import { FontOption } from "model/FontOption";

export interface ApplicationStore {
  nuiRegistration: string;
  nuiName: string;
  nuiDepot: string;
  nuiMastersName: string;
  nuiTwitterName: string;
  nuiMemo: string;
  nuiImage: string;
  backgroundType: BackgroundType;
  newTemplate: NewTemplate;
  resizerType: ResizerType;
  fontOption: FontOption;
  dispatch: (action: Action) => void;
}