import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../customHooks/useAxiosPublic.jsx";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/components/functions/AuthProvider.jsx";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./cu_logo.png";
const Login = () => {
  const { user, setUser, loadingUser, setLoadingUser, logOut } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //     if(! loadingUser){

  //     }
  // }, [loadingUser])

  const axiosPublic = useAxiosPublic();

  const handleLogin = async () => {
    setLoading(true);
    if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
      !(password.length >= 8)
    ) {
      toast.error("Enter Valid Credentials");
      return setLoading(false);
    }
    try {
      const response = await axiosPublic.post(
        "/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage?.getItem("session_id"),
          },
        }
      );
      if (!response?.data?.session_id) {
        toast.error("Enter Valid Credentials");
        logOut();
      } else {
        toast.success("Successfully Logged In");
        localStorage.setItem("session_id", response?.data?.session_id);
        if (response?.data?.user) {
          setUser({
            ...response?.data?.user,
            role: response?.data?.role?.role || "student",
          });
          setLoadingUser(false);
        } else {
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error("Something Went Wrong!!");
      logOut();
    } finally {
      setLoading(false);
    }
  };
  if (user) return <Navigate to="/"></Navigate>;
  return (
    <div>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-white-600  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <img src={logo} className="w-1/3 mx-auto" />
                <h1 className="text-2xl font-semibold my-5">Login Form</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleLogin}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
