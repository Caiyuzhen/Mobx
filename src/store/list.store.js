


import { makeAutoObservable } from 'mobx';

class ListStore {
  list = ['react','vue']

  //初始化
  constructor() {
    makeAutoObservable(this)
  }

  addList = () => {
    this.list.push('angular')
  }
}

//🔥🔥🔥这里就不实例化了，就到 index.js 内部去实例化
export { ListStore }