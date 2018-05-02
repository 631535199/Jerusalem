import {createStore} from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
$(document.body).append('<p id = "counter"></p>' +
    ' <button id="increase">+</button><button id="decrease">-</button>');

//state是状态树，可以是任意结构
//action是个纯对象{type:'INCREASE'}
let reducer = (state = {number:0},action)=>{
    if(action===undefined) return state
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
let render=()=>{
    document.querySelector('#counter').innerHTML = store.getState().number;
}
//当仓库里的state发生变化，会从新render,读取最新地状态
store.subscribe(render)
$('#increase').click(()=>store.dispatch({type:INCREASE,amount:3}))
$('#decrease').click(()=>store.dispatch({type:DECREASE,amount:2}))
render();
