import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import  axios from "axios";

export const findAllAdoptions = createAsyncThunk('adoption/findAll', async () => {
    return axios.get('http://localhost:3000/Adoptions')
        .then((res)=>res.data)
        .catch((error)=> console.log(error))
});

export const findOneAdoption = createAsyncThunk('adoption/findOne',async (AdoptionId : string | undefined)=>{
    return axios.get(`http://localhost:3000/Adoptions/${AdoptionId}`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})

const initialState = {
    loading : false,
    Adoptions: [],
    OneAdoption : {},
    Error : ""
}

const AdoptionSlice = createSlice({
    name :"Adoption",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
            .addCase(findAllAdoptions.pending,(state)=>{
                state.loading = true
                state.Adoptions = []
                state.Error = ""
            })
            .addCase(findAllAdoptions.fulfilled,(state,action)=>{
                state.loading = false
                state.Adoptions = action.payload
                state.Error = ""
            })
            .addCase(findAllAdoptions.rejected,(state)=>{
                state.loading = false
                state.Adoptions = []
                state.Error = "something was failed"
            })
            .addCase(findOneAdoption.pending,(state)=>{
                state.loading = true
                state.OneAdoption = []
                state.Error = ""
            })
            .addCase(findOneAdoption.fulfilled,(state,action)=>{
                state.loading = false
                state.OneAdoption= action.payload
                state.Error = ""
            })
            .addCase(findOneAdoption.rejected,(state)=>{
                state.loading = false
                state.OneAdoption = {}
                state.Error = "there is an error"
            })
    }
})

export default AdoptionSlice.reducer
// export  const {} = AdoptionSlice.actions