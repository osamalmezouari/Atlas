import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import  axios from "axios";

export const findFilteredAdoptions = createAsyncThunk('adoption/findFilteredAdoptions', async ({classParam , locationParam } :{classParam ?:string,locationParam ?:string}) => {
    return axios.get(classParam && locationParam ? `http://localhost:3000/Adoptions/${classParam}/${locationParam}`:`http://localhost:3000/Adoptions`)
        .then((res)=>res.data)
        .catch((error)=> console.log(error))
});

export const findAllAdoptions = createAsyncThunk('adoption/findAll', async () => {
    return axios.get(`http://localhost:3000/Adoptions`)
        .then((res)=>res.data)
        .catch((error)=> console.log(error))
});

export const findOneAdoption = createAsyncThunk('adoption/findOne',async (AdoptionId : string | undefined)=>{
    return axios.get(`http://localhost:3000/Adoptions/${AdoptionId}`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})

export const findAllLocations = createAsyncThunk(
    'Adoptions/locations',async () => {
        return axios.get('http://localhost:3000/Adoptions/locations')
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    }
)

export const FindAdoptionNewStatistics =createAsyncThunk('Adoptions/AdoptionNewStatistics',()=>{
    return axios.get("http://localhost:3000/Adoptions/AdoptionNewStatistics")
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})
export const FindAdoptionAdoptedStatistics =createAsyncThunk('Adoptions/AdoptionAdoptedStatistics',()=>{
    return axios.get("http://localhost:3000/Adoptions/AdoptionAdoptedStatistics")
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})

const initialState = {
    Adoptions: {
        data : [],
        loading : false,
        Error:""
    },
    OneAdoption : {
        data : {},
        loading : false,
        Error : ""
    },
    FilteredAdoptions : {
        data : [],
        loading : false,
        Error:""
    },
    FindAdoptionNewStatistics : {
        data : [],
        loading : false,
        Error :""
    },
    FindAdoptionAdoptedStatistics : {
        data : [],
        loading : false,
        Error :"",
    },
    AllLocations : [],
}

const AdoptionSlice = createSlice({
    name :"Adoption",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
            .addCase(findAllAdoptions.pending,(state)=>{
                state.Adoptions.loading = true
                state.Adoptions.data = []
                state.Adoptions.Error = ""
            })
            .addCase(findAllAdoptions.fulfilled,(state,action)=>{
                state.Adoptions.loading = false
                state.Adoptions.data =action.payload
                state.Adoptions.Error = ""
            })
            .addCase(findAllAdoptions.rejected,(state)=>{
                state.Adoptions.loading = true
                state.Adoptions.data = []
                state.Adoptions.Error = "something go wrong"
            })
            .addCase(findOneAdoption.pending,(state)=>{
                state.OneAdoption.loading = true
                state.OneAdoption.data = []
                state.OneAdoption.Error = ""
            })
            .addCase(findOneAdoption.fulfilled,(state,action)=>{
                state.OneAdoption.loading = false
                state.OneAdoption.data= action.payload
                state.OneAdoption.Error = ""
            })
            .addCase(findOneAdoption.rejected,(state)=>{
                state.OneAdoption.loading = false
                state.OneAdoption.data = {}
                state.OneAdoption.Error = "there is an error"
            })
            .addCase(findFilteredAdoptions.pending,(state)=>{
                state.FilteredAdoptions.loading = true
                state.FilteredAdoptions.data = []
                state.FilteredAdoptions.Error = ""
            })
            .addCase(findFilteredAdoptions.fulfilled,(state,action)=>{
                state.FilteredAdoptions.loading = false
                state.FilteredAdoptions.data = action.payload
                state.FilteredAdoptions.Error = ""
            })
            .addCase(findFilteredAdoptions.rejected,(state)=>{
                state.FilteredAdoptions.loading = false
                state.FilteredAdoptions.data = []
                state.FilteredAdoptions.Error = "there is an error"
            })
            .addCase(findAllLocations.pending,(state)=>{
                state.AllLocations = []
            })
            .addCase(findAllLocations.fulfilled,(state,action)=>{
                state.AllLocations = action.payload
            })
            .addCase(findAllLocations.rejected,(state)=>{
                state.AllLocations = []
            })
            .addCase(FindAdoptionNewStatistics.pending,(state)=>{
                state.FilteredAdoptions.data = []
                state.FilteredAdoptions.loading = true
                state.FilteredAdoptions.Error = ""
            })
            .addCase(FindAdoptionNewStatistics.fulfilled,(state,action)=>{
                state.FindAdoptionNewStatistics.data= action.payload
                state.FindAdoptionNewStatistics.loading = false
                state.FindAdoptionNewStatistics.Error = ""
            })
            .addCase(FindAdoptionNewStatistics.rejected,(state)=>{
                state.FindAdoptionAdoptedStatistics.data =[]
                state.FindAdoptionAdoptedStatistics.loading = false
                state.FindAdoptionAdoptedStatistics.Error = "something got wrong"
            })
            .addCase(FindAdoptionAdoptedStatistics.pending,(state)=>{
                state.FindAdoptionAdoptedStatistics.data = []
                state.FindAdoptionAdoptedStatistics.loading = true
                state.FindAdoptionAdoptedStatistics.Error = ""
            })
            .addCase(FindAdoptionAdoptedStatistics.fulfilled,(state,action)=>{
                state.FindAdoptionAdoptedStatistics.data= action.payload
                state.FindAdoptionAdoptedStatistics.loading = false
                state.FindAdoptionAdoptedStatistics.Error = ""
            })
            .addCase(FindAdoptionAdoptedStatistics.rejected,(state)=>{
                state.FindAdoptionAdoptedStatistics.data =[]
                state.FindAdoptionAdoptedStatistics.loading = false
                state.FindAdoptionAdoptedStatistics.Error = "something got wrong"
            })

    }
})

export default AdoptionSlice.reducer
// export  const {} = AdoptionSlice.actions