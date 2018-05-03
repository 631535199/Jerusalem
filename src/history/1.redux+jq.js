/**
 * Created by jh on 2018/5/3.
 */
import {createStore} from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
$(document.body).append('<p id = "counter"></p>' +
    ' <button id="increase">+</button><button id="decrease">-</button>');

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
let render=()=>{
    //document.querySelector('#counter').innerHTML = store.getState().number;
    $('#counter').html(store.getState().number);
}
//当仓库里的state发生变化，会从新render,读取最新地状态
let unsubscribe =  store.subscribe(render);
setTimeout(function(){
    unsubscribe();
},5000)
$('#increase').click(()=>store.dispatch({type:INCREASE,amount:3}))
$('#decrease').click(()=>store.dispatch({type:DECREASE,amount:2}))
render();
