import { configureStore } from '@reduxjs/toolkit'
// import {reduxLogger} from 'redux-logger'
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from '../features/icecream/icecreamSlice'
import sandWichReducer from '../features/sandwich/sandwichSlice'
import donutReducer from '../features/donut/donutSlice'
import userReducer from '../features/user/userSlice' 


// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        sandWich:sandWichReducer,
        donut:donutReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store