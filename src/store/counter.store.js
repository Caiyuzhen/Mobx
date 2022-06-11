
//用 Mobx 来定义计数器的方法：
  //How？
      //1.导入 makeAutoObservable 方法
      //2.定义数据状态（state）
      //3.把数据定义成响应式的处理形态
      //4.定义 Action 函数（修改数据的方法）
      //5.实例化并导出实例，给 react 使用


//——————————————————————————————————————————————————————————————


import { makeAutoObservable } from 'mobx';

class CounterStore {

  //1.定义数据状态（state）
  count = 0


  constructor() {
    //2.把数据定义成响应式的处理形态
    makeAutoObservable(this)
  }
  

  //3.定义 Action 函数（修改数据的方法）
  addCount = () => {
    this.count++
  }
}


//4.实例化并导出实例，给 react 使用
const counterStore = new CounterStore()
export {counterStore}