import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfSandWiches :30
}

const sandWichSlice = createSlice({
    name:'sandWich',
    initialState,
    reducers:{
        ordered:(state)=>
        {
            state.numOfSandWiches--
        },
        restocked:(state,action)=>
        {
            state.numOfSandWiches += action.payload
        }
    }
})

export default sandWichSlice.reducer
export const {ordered,restocked} = sandWichSlice.actions

