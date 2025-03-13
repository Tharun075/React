import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Redux/actions"

export const Todo =()=>{
    const [input,setInput] = useState('')
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()

    useEffect(()=>{
        const Storage = localStorage.getItem('todos')
        if(Storage){
            const StoredTodos = JSON.parse(Storage)
            StoredTodos.forEach(todo=>{
                dispatch(ADD_TODO(todo.text))
            })
        }
    },[dispatch])

    useEffect(()=>{
        if(todos.length>0){
            localStorage.setItem('todos',JSON.stringify(todos))
        }
    },[todos])

    function handleAdd(){
        if(input.trim()){
            dispatch(ADD_TODO(input))
            setInput('')
        }
    }
    function handleDelete(id){
        dispatch(DELETE_TODO(id))
    }
    function handleToggle(id){
        dispatch(TOGGLE_TODO(id))
    }

    function clearStorage(){
        localStorage.clear()
        
    }
    return(
        <>
            <div>
                <h1>Todo App</h1>
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button onClick={handleAdd}>Add Todo</button>
                <button onClick={clearStorage}>Clear Loc Storage</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map((todo)=>(
                            <li key={todo.id} onClick={()=>handleToggle(todo.id)}>
                                <strong>Description:</strong> {todo.text} <strong>{todo.completed ? "Completed": "Not Completed"}</strong>
                                
                                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}