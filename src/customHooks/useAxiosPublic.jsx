import axios from "axios";
export const baseURL = "http://bike-csecu.com:5000/api";
// export const baseURL = "http://localhost:5000/api";
const axiosPublic = axios.create({
  // baseURL:'http://localhost:5000'
  baseURL: baseURL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
// http://bike-csecu.com:5000/api/certificate-withdrawal/search-formData/other-stakeholders/:user_id 