import axios from "axios";
// export const baseURL = "http://bike-csecu.com:5000/api";
export const baseURL = "http://localhost:5000/api";
const axiosPublic = axios.create({
  baseURL: baseURL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
// http://bike-csecu.com:5000/api/certificate-withdrawal/search-formData/other-stakeholders/:user_id
//http://bike-csecu.com:5000/api/certificate-withdrawal/search-formData/4f480a8e-e707-11ee-9dff-68f728f17b7e
