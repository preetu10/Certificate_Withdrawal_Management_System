import axios from "axios";
// export const baseURL = "http://bike-csecu.com:5000/api";
export const baseURL = "http://bike-csecu.com:5000/api";
const axiosPublic = axios.create({
  baseURL: baseURL
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
