import { BackgroundType } from "constant/other";
import { Action } from "model/action";
import { ApplicationStore } from "model/store";
import { createContext, useState } from "react";

export const useApplicationStore = (): ApplicationStore => {
  const [nuiRegistration, setNuiRegistration] = useState('8620');
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('86');

  const dispatch = (action: Action) => {
    switch (action.type) {
      case 'setNuiRegistration':
        setNuiRegistration(action.message as string);
        break;
      case 'setBackgroundType':
        setBackgroundType(action.message as BackgroundType);
        break;
    }
  };

  return {
    nuiRegistration,
    backgroundType,
    dispatch
  };
};

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);
