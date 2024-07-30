import {configureStore} from '@reduxjs/toolkit'
import ProductsRducer from "./Products"

const store = configureStore({reducer: ProductsRducer});

export default store;