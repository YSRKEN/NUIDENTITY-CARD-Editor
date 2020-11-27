import { Action } from "model/action";

export interface ApplicationStore {
  dispatch: (action: Action) => void;
}