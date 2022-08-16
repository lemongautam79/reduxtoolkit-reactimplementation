// const { cakeActions } = require('../cake/cakeSlice')

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfIceCreams: 20
}
const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked:(state,action)=>
        {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>
    //     {
    //         state.numofIceCreams--
    //     }
    // }
    // extraReducers:(builder)=>{
    //     builder.addCase(iceCreamActions.ordered,state=>{
    //         state.numofIceCreams--
    //     })
    // }
})

export default iceCreamSlice.reducer
export const {ordered,restocked}= iceCreamSlice.actions