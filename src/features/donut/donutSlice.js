import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfDonut : 50
}

const donutSlice = createSlice({
    name:"donut",
    initialState,
    reducers:{
        ordered:(state)=>
        {
            state.numOfDonut--
        },
        restocked:(state,action)=>
        {
            state.numOfDonut += action.payload
        }
    }
})

export default donutSlice.reducer
export const {ordered,restocked} = donutSlice.actions
