import { createSlice } from "@reduxjs/toolkit"

const initialState={
    posts:[],
    loading:false,
    error:''
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        SUCCESS:(state,action)=>{
            state.posts = action.payload
            state.loading=false
            state.error=''
        },
        FAILURE:(state,action)=>{
            state.posts=[]
            state.loading=false
            state.error=action.payload
        },
        LOADING:(state)=>{
            state.posts=[]
            state.loading=true
            state.error=''
        }
    }
})

export const { SUCCESS,FAILURE,LOADING }=postSlice.actions
export default postSlice.reducer