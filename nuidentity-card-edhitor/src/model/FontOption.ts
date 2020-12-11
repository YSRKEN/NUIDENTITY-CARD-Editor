interface FontOptionImpl {
  boldFlg: boolean;
  largeFlg: boolean;
}
interface FontOption {
  name: FontOptionImpl;
  depot: FontOptionImpl;
  mastersName: FontOptionImpl;
  twitterName: FontOptionImpl;
  memo: FontOptionImpl;
}

export default FontOption;
