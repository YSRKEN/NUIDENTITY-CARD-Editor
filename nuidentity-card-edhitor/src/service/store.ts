import { BackgroundType } from "constant/other";
import { Action } from "model/action";
import { ApplicationStore } from "model/store";
import { createContext, useState } from "react";

export const useApplicationStore = (): ApplicationStore => {
  const [nuiRegistration, setNuiRegistration] = useState('8620');
  const [nuiName, setNuiName] = useState('ぬいの名称');
  const [nuiDepot, setNuiDepot] = useState('車両基地名');
  const [nuiMastersName, setNuiMastersName] = useState('マスターの名称');
  const [nuiTwitterName, setNuiTwitterName] = useState('@screen_name');
  const [nuiMemo, setNuiMemo] = useState('ここはメモ欄です');
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('86');

  const dispatch = (action: Action) => {
    switch (action.type) {
      case 'setNuiRegistration':
        setNuiRegistration(action.message as string);
        break;
      case 'setNuiName':
        setNuiName(action.message as string);
        break;
      case 'setNuiDepot':
        setNuiDepot(action.message as string);
        break;
      case 'setNuiMastersName':
        setNuiMastersName(action.message as string);
        break;
      case 'setNuiTwitterName':
        setNuiTwitterName(action.message as string);
        break;
      case 'setNuiMemo':
        setNuiMemo(action.message as string);
        break;
      case 'setBackgroundType':
        setBackgroundType(action.message as BackgroundType);
        break;
    }
  };

  return {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    backgroundType,
    dispatch
  };
};

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);
