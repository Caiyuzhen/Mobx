//🚀Mobx 模块化 (固定的封装模式，一样的写法)
//(可以类比原型链)

    //How?
        //1.拆分成多个 store ，每个模块定义自己独立的 state 跟 action 方法
        //2.导入 store 子模块
        //3.声明一个 rootStore 类
        //4.在 constructor() 初始化中，对子模块的数据进行【实例化】
        //5.实例化 rootStore 
        //6.使用 React 的 useContext 机制来【封装 rootStore】 方法，供业务组件统一使用
              //🍥6-1.导入 React 方法
              //🍥6-2.把实例化的 rootStore 对象传入 createContext() 内, 当作它的默认属性！🔥
              //🍥6-3.通过 useContext() 来获取 createContext() 那边传过来的对象
              //🍥6-4.导出 useStoreResult


//——————————————————————————————————————————————————————————————


//2.导入 store 子模块
import { ListStore } from './list.store'

//🍥6-1.导入 React 方法
import React from 'react'



      

//2.声明一个 rootStore 类(里边可以放置多个子模块的实例)
class RootStore {

  //初始化
  constructor() {
    //3.在 constructor() 初始化中，对子模块的数据进行【实例化】
    this.ListStore = new ListStore()
  }
}





//5.实例化 rootStore 
const rootStore = new RootStore()

//🍥6-2.把实例化的 rootStore 对象传入 createContext() 内, 当作它的默认属性！🔥
const context = React.createContext(rootStore)

//🍥6-3.通过 useContext() 来获取 createContext() 那边传过来的对象
const useStoreResult = () => React.useContext(context) //所以调用 useStoreResult 就能或获得 rootStore 对象返回的值

//🍥6-4.导出 results
export { useStoreResult }