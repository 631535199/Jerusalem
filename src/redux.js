/**
 * Created by jh on 2018/4/28.
 */
const createStore= (reducer)=>{
    //状态
    let state;
    //监听函数数组
    let listeners=[];
    //用来获取最新地状态
    let getState = ()=>state;
    //向仓库发送state
    let dispatch = (action)=>{
        //传入老的state和action,返回新的state
            reducer(state,action)
        //调用所有的订阅函数
        listeners.forEach(listener=>listener())
    }
    //订阅仓库内的状态事件。当状态发生变化会调用对应的监听函数
    //订阅方法执行后返回一个函数
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            listener.filter(l=>listener!=l)
        }
    }

    dispatch();
    return{
        getState,//获取最新地状态对象
        subscribe,//原来订阅状态变化事件
        dispatch //
    }
}

export {createStore}