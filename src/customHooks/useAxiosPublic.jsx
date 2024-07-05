import axios from "axios";


const axiosPublic=axios.create({
    // baseURL:'http://localhost:5000'
    baseURL:'http://bike-csecu.com:5000/api'
})

const useAxiosPublic = () => {
       return axiosPublic;
};

export default useAxiosPublic;