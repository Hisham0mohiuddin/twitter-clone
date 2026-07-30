import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMyProfile, getUser } from "../redux/userSlice.js"; // change path if needed
import { USER_API_END_POINT } from "../utils/constant.jsx";


const useGetProfile = (id) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                    `${USER_API_END_POINT}/profile/${id}`,
                    {
                        withCredentials: true,
                    }
                );
                // console.log(res.data);
                if (res.data.success) {
                    dispatch(getMyProfile(res.data.user));
                }
            } catch (error) {
                console.log(error);
            }
        };
        if(id)
        {
            fetchProfile();
        }
    }, [id,dispatch]);
};

export default useGetProfile;