import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
//state是状态树，可以是任意结构
//action是个纯对象{type:'INCREASE'}
let reducer = (state = {number:1},action)=>{
    if(action===undefined) return state;
    switch (action.type){
        case INCREASE:
            return{number:state.number+action.amount};
        case DECREASE:
            return{number:state.number-action.amount};
        default:
            return state;
    }
}
let store = createStore(reducer);

class Counter extends React.Component{
    render(){
        return(
            <div>
                <p>{store.getState().number}</p>
                <button onclick={()=>store.dispatch({type:INCREASE,amount:2})}>+</button>
                <button onclick={()=>store.dispatch({type:DECREASE,amount:2})}>-</button>
            </div>
        )

    }
}
let render=()=>{
    ReactDOM.render(<Counter/>,document.querySelector('#root'))
}
render();
store.subscribe(render);