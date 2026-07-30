import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMyProfile, getOtherUser, getUser } from "../redux/userSlice.js"; // change path if needed
import { USER_API_END_POINT } from "../utils/constant.jsx";


const useOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(
                    `${USER_API_END_POINT}/otheruser`,
                    {
                        withCredentials: true,
                    }
                );

                if (res.data.success) {
                    dispatch(getOtherUser(res.data.otherUsers));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchOtherUsers();
    }, [dispatch]);
};

export default useOtherUsers;