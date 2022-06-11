//Mobx 计算属性（基于现有的数据，经过一定的计算，得到一个新的数据）
  //How?
    //1.导入 makeAutoObservable 方法
    //2.定义一个（原始数据）
    //3.定义计算属性的函数（比如 filter）
    //4.定义 Action 函数（修改数据的方法）
    //4.把数据定义成响应式的处理形态
    //5.实例化并导出实例，给 react 使用


//——————————————————————————————————————————————————————————————


//1.导入 makeAutoObservable 方法
import { makeAutoObservable } from 'mobx'

class CounterAttr {
  //2.定义一个（原始数据）
  list = [1,2,3,4,5,6]
  

  //3.定义计算属性的函数（比如 filter）
  filterList(){
    return this.list.filter(item => item > 2) //拿到是 item > 2 的一个新数组
  }


  constructor() {
    //2.把数据定义成响应式的处理形态
    makeAutoObservable(this)
  }


  //4.定义 Action 函数（修改数据的方法）
  addList = () => { 
    this.list.push(7,8,9)
  }
}

//5.实例化并导出实例，给 react 使用
const counterAttr = new CounterAttr()
export {counterAttr}

