//ðMobx æ¨¡åå (åºå®çå°è£æ¨¡å¼ï¼ä¸æ ·çåæ³)
//(å¯ä»¥ç±»æ¯ååé¾)

    //How?
        //1.æåæå¤ä¸ª store ï¼æ¯ä¸ªæ¨¡åå®ä¹èªå·±ç¬ç«ç state è· action æ¹æ³
        //2.å¯¼å¥ store å­æ¨¡å
        //3.å£°æä¸ä¸ª rootStore ç±»
        //4.å¨ constructor() åå§åä¸­ï¼å¯¹å­æ¨¡åçæ°æ®è¿è¡ãå®ä¾åã
        //5.å®ä¾å rootStore 
        //6.ä½¿ç¨ React ç useContext æºå¶æ¥ãå°è£ rootStoreã æ¹æ³ï¼ä¾ä¸å¡ç»ä»¶ç»ä¸ä½¿ç¨
              //ð¥6-1.å¯¼å¥ React æ¹æ³
              //ð¥6-2.æå®ä¾åç rootStore å¯¹è±¡ä¼ å¥ createContext() å, å½ä½å®çé»è®¤å±æ§ï¼ð¥
              //ð¥6-3.éè¿ useContext() æ¥è·å createContext() é£è¾¹ä¼ è¿æ¥çå¯¹è±¡
              //ð¥6-4.å¯¼åº useStoreResult


//ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ


//2.å¯¼å¥ store å­æ¨¡å
import { ListStore } from './list.store'

//ð¥6-1.å¯¼å¥ React æ¹æ³
import React from 'react'



      

//2.å£°æä¸ä¸ª rootStore ç±»(éè¾¹å¯ä»¥æ¾ç½®å¤ä¸ªå­æ¨¡åçå®ä¾)
class RootStore {

  //åå§å
  constructor() {
    //3.å¨ constructor() åå§åä¸­ï¼å¯¹å­æ¨¡åçæ°æ®è¿è¡ãå®ä¾åã
    this.ListStore = new ListStore()
  }
}





//5.å®ä¾å rootStore 
const rootStore = new RootStore()

//ð¥6-2.æå®ä¾åç rootStore å¯¹è±¡ä¼ å¥ createContext() å, å½ä½å®çé»è®¤å±æ§ï¼ð¥
const context = React.createContext(rootStore)

//ð¥6-3.éè¿ useContext() æ¥è·å createContext() é£è¾¹ä¼ è¿æ¥çå¯¹è±¡
const useStoreResult = () => React.useContext(context) //æä»¥è°ç¨ useStoreResult å°±è½æè·å¾ rootStore å¯¹è±¡è¿åçå¼

//ð¥6-4.å¯¼åº results
export { useStoreResult }