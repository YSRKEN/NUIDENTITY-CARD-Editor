import { Action } from "model/action";
import { ApplicationStore } from "model/store";
import { createContext } from "react";

export const useApplicationStore = (): ApplicationStore => {
  const dispatch = (action: Action) => {
    switch (action.type) {
      case '':
        alert('test');
        break;
    }
  };

  return {
    dispatch
  };
};

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);
