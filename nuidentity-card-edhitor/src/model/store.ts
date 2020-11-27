import { BackgroundType } from "constant/other";
import { Action } from "model/action";

export interface ApplicationStore {
  nuiRegistration: string;
  backgroundType: BackgroundType;
  dispatch: (action: Action) => void;
}