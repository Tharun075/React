export const ADD_TODO = (text)=>({
    type:'ADD_TODO',
    payload:{
        id:Date.now(),
        text,
        completed:false,
    }
})

export const DELETE_TODO = (id)=>({
    type:'DELETE_TODO',
    payload: id
})

export const TOGGLE_TODO = (id)=>({
    type:'TOGGLE_TODO',
    payload:id
})