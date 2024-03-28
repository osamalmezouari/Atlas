import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    AnimalsId:[]
}

const cartSlice = createSlice({
    name :"cart",
    initialState,
    reducers: {
        deleteFromCart : ()=>{

        },
        addToCart : () => {

        }
    }
})