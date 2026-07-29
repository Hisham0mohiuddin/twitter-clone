import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { USER_API_END_POINT ,TWEET_API_END_POINT} from "../utils/constant";
import { getALLTweets } from "../redux/tweetSlice.js";


const useGetMyTweets = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchGetMyTweets = async () => {
            try {
                const res = await axios.get(
                    `${TWEET_API_END_POINT}/getalltweets`,
                    {
                        withCredentials: true,
                    }
                );
                console.log(res.data);
                if (res.data.success) {
                    dispatch(getALLTweets(res.data.tweets));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchGetMyTweets();
    }, [dispatch]);
};

export default useGetMyTweets;