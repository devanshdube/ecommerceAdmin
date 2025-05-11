import {configureStore} from '@reduxjs/toolkit'
import productslice from '../src/Features/ProductSlice'
export const store = configureStore({
    reducer:{
     productsreducer:productslice
    }
})