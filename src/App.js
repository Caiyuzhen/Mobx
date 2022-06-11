
//如何在 react 里边使用 store？

  //🍎修改计数器
      //🍎1.导入对应的 store 实例、mobx 中间件
      //🍎2.渲染 store 中的数据
      //🍎3.通过事件修改 store 中的实例
      //🍎4.包裹 APP，让组件视图响应式数据变化(🚀很重要，是用来连接 react 跟 mobx 的中间件)



  //🍊计算属性
      //🍊1.导入对应的 store 实例、mobx 中间件
      //🍊2.渲染 store 中的数据
      //🍊3.通过事件修改 store 中的实例
      //🍎4.包裹 APP，让组件视图响应式数据变化(🚀很重要，是用来连接 react 跟 mobx 的中间件)


  //🍐调用 Mobx 模块化的返回值
    //🍐1.导入对应的 store 实例
    //🍐2.声明变量来承载 Mobx 的返回值
    //🍐3.调用返回值内的【方法】、【数据】等
        //🍐3-1.解构赋值的写法(解构到 store 实例对象就行了不要继续往下解构，防止破坏 store 的响应 )
        //🍐3-2.直接取值、修改值的写法
    //🍐4.包裹 APP，让组件视图响应式数据变化(🚀很重要，是用来连接 react 跟 mobx 的中间件)



//——————————————————————————————————————————————————————————————————————————



//🍎🍊🍐1.导入 store 实例, counterStore 是个对象，里边有方法有属性
import { counterStore } from './store/counter.store'
import { counterAttr } from './store/counterAttr.store'
import { observer } from 'mobx-react-lite'//轻量包，给函数组件用，如果是类组件的话，得用 mobx-react 
import { useStoreResult } from './store/index.js'


function App() {


   //🍐3-1.解构赋值的写法, 比如解构出 ListStore 的实例对象，里边包含了 ListStore 的方法和属性
   const { ListStore } = useStoreResult()

   
  //🍐3-2.声明变量来承载 Mobx 的返回值(直接取值的写法)
  const rootStore = useStoreResult()

 
  return (
    <div className="APP">

        {/* 🍎2.渲染 store 中的数据 */}
        { counterStore.count }
        {/* 🍎3.修改 store 中的实例 */}
        <button onClick={counterStore.addCount}>+</button>


        <hr />

        {/* 🍊2.渲染 store 中的数据(注意，在 react 内，数组不能直接被渲染，要做个拼接) */}
        { counterAttr.filterList() }
        {/* 🍊3.通过事件修改 store 中的实例 */}
        <button onClick={ counterAttr.addList }>修改数组</button>



        <hr />
        {/* 🍐3-1.解构赋值的渲染方法 */}
        { ListStore.list.map(item => item ) }

     
        <hr />
        {/* //🍐3-2.直接取值、修改值的写法 */}
        { rootStore.ListStore.list.map(item => item ) }
        <button onClick={ rootStore.ListStore.addList }>添加数据</button>
  

    </div>
  )
}

//🍎🍊🍐4.包裹 APP，让组件视图响应式数据变化(🚀很重要，是用来连接 react 跟 mobx 的中间件)
export default observer(App);
