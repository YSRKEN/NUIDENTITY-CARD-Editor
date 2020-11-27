import { BackgroundType } from "constant/other";
import { Action } from "model/action";
import { ApplicationStore } from "model/store";
import { createContext, useState } from "react";

export const useApplicationStore = (): ApplicationStore => {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('86');

  const dispatch = (action: Action) => {
    switch (action.type) {
      case 'setBackgroundType':
        setBackgroundType(action.message as BackgroundType);
        break;
    }
  };

  return {
    backgroundType,
    dispatch
  };
};

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);
