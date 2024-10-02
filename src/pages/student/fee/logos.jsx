/* eslint-disable react/prop-types */

import { AuthContext } from '@/components/functions/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useAxiosPublic from "../../../customHooks/useAxiosPublic.jsx";
import { toast } from 'react-toastify';
const Logos = ({ degree }) => {
    const degreeName = degree.degree;
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    console.log(degreeName);
    const { data: student = {}, isPending } = useQuery({
        queryKey: `/certificate-withdrawal/?user_id=${user.user_id}&program_abbr=${degreeName}`,
        queryFn: async () => {
          try {
            const res = await axiosPublic.get(
              `/certificate-withdrawal/?user_id=${user.user_id}&program_abbr=${degreeName}`
            );
            return res?.data;
          } catch (error) {
            console.log("Failed to fetch student data");
          }
        },
      });
      useEffect(() => {
        if (!isPending && student?.results?.length === 0) {
          toast.warning(
            "You have selected incorrect degree. Please select correct degree to apply for certificate."
          );
          navigate("/select-certificate-type");
        }
      }, [isPending, student, navigate]);
    
      if (isPending) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <h1 className="mt-5 text-2xl font-bold text-orange-500">Payment Methods</h1>

            <div className="my-10">
                <div className="lg:flex gap-4 md:flex w-72 mx-auto">
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/bkash-logo.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/nagad.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/rocket.png" alt="" />
                        </div>
                    </Link>
                </div>

                <div className="lg:flex gap-4 md:flex w-72 mx-auto md:items-center">
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/visa.png" alt="" />
                        </div>
                    </Link>
                    <Link to={`/certificate-withdrawal-form/${degreeName}`}>
                        <div className="mx-auto my-5 border-2 border-black rounded-lg p-2 w-28 h-20 flex justify-center items-center">
                            <img src="/upay.png" alt="" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Logos