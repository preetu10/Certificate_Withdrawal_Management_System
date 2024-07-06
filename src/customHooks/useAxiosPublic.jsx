import axios from 'axios'
import React from 'react'
const axiosPublic = axios.create({
    baseURL: 'http://bike-csecu.com:5000/'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic