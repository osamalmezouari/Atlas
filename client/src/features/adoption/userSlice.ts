import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const FindUserStatistics = createAsyncThunk('',()=>{
    return axios.get("http://localhost:3000/users/UserStatistics")
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})

const initialState = {
    FindUserStatistics : {
        data : [],
        loading : false,
        Error :""
    }
}


const userSlice = createSlice({
    name :"user",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
            .addCase(FindUserStatistics.pending,(state)=>{
                state.FindUserStatistics.loading = true
                state.FindUserStatistics.data = []
                state.FindUserStatistics.Error = ""
            })
            .addCase(FindUserStatistics.fulfilled,(state, action)=>{
                state.FindUserStatistics.data = action.payload
                state.FindUserStatistics.loading = false
                state.FindUserStatistics.Error = ""
            })
            .addCase(FindUserStatistics.rejected,(state)=>{
                state.FindUserStatistics.data = []
                state.FindUserStatistics.loading = false
                state.FindUserStatistics.Error = "something got wrong"
            })
    }
})

export default userSlice.reducer
