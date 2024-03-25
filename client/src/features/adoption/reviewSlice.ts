import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const FindAllReviews = createAsyncThunk('reviews',()=>{
    return axios.get("http://localhost:3000/reviews")
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})
export const  FindReviewsStatistics = createAsyncThunk('reviews/ReviewsStatistics',()=>{
    return axios.get('http://localhost:3000/reviews/ReviewsStatistics')
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
})



const initialState = {
    FindReviewsStatistics : {
        loading : false,
        data : [],
        Error : ""
    },
    FindAllReviews  : {
        loading : false,
        data : [],
        Error : ""
    }
}



const reviewSlice = createSlice({
    name :"review",
    initialState,
    reducers  :{

    },
    extraReducers : (builder)=>{
        builder
            .addCase(FindReviewsStatistics.pending,(state)=>{
                state.FindReviewsStatistics.loading = true
                    state.FindReviewsStatistics.data =[]
                state.FindReviewsStatistics.Error = ""
        })
            .addCase(FindReviewsStatistics.fulfilled,(state, action)=>{
                state.FindReviewsStatistics.loading = false
                state.FindReviewsStatistics.data =action.payload
                state.FindReviewsStatistics.Error = ""
            })
            .addCase(FindReviewsStatistics.rejected,(state)=>{
                state.FindReviewsStatistics.loading = false
                state.FindReviewsStatistics.data =[]
                state.FindReviewsStatistics.Error = "something wrong"
            })
            .addCase(FindAllReviews.pending,(state)=>{
                state.FindAllReviews.loading = true
                state.FindAllReviews.data =[]
                state.FindAllReviews.Error = ""
            })
            .addCase(FindAllReviews.fulfilled,(state, action)=>{
                state.FindAllReviews.loading = false
                state.FindAllReviews.data =action.payload
                state.FindAllReviews.Error = ""
            })
            .addCase(FindAllReviews.rejected,(state)=>{
                state.FindAllReviews.loading = false
                state.FindAllReviews.data =[]
                state.FindAllReviews.Error = "something wrong"
            })
    }
})

export default reviewSlice.reducer