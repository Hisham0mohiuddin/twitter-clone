import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getALLTweets } from "../redux/tweetSlice.js";
import toast from "react-hot-toast";
import { TWEET_API_END_POINT } from "../utils/constant.jsx";


const useGetMyTweets = (following = true) => {
    
    
    const dispatch = useDispatch();
    const fetchGetMyTweets = async () => {
        try {
            const res = await axios.get(
                `${TWEET_API_END_POINT}/getalltweets`,
                {
                    withCredentials: true,
                }
            );
            // console.log(res.data);
            if (res.data.success) {
                dispatch(getALLTweets(res.data.tweets));
                // toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getFollowingTweets = async (params) => {
        try {
            const res = await axios.get(`${TWEET_API_END_POINT}/getallfollowertweets`, { withCredentials: true });
            if (res.data.success) {
                dispatch(getALLTweets(res.data.tweets));
                // toast.success(res.data.message);
            }
        } catch (error) {
            console.error();

        }
    }
    const { refresh, isActive } = useSelector(store => store.tweet);

    useEffect(() => {
        if (isActive) {
            fetchGetMyTweets();
        } else {
            getFollowingTweets();
        }
    }, [refresh, isActive]);
};
    
    export default useGetMyTweets;