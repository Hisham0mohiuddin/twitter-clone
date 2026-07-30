import { createSlice } from "@reduxjs/toolkit";
import { create } from "axios";
const tweetSlice = createSlice({
    name:"tweet",
    initialState:{
        tweets : null
    }
    , reducers:{
        getALLTweets:(state,action)=>{
            state.tweets = action.payload;
        }
        ,addTweet: (state, action) => {
            state.tweets.unshift(action.payload);
        },
        getRefresh: (state) => {
            state.refresh = !state.refresh;
        }
    }
})

export const {getALLTweets,addTweet,getRefresh} = tweetSlice.actions
export default tweetSlice.reducer;