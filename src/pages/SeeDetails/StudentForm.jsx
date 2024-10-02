import { useContext, useState } from "react";
("use client");

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/functions/AuthProvider.jsx";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import StudentSeeDetails from "../student/StudentSeeDetails/StudentSeeDetails";
import StakeholderSeeDetails from "./StakeholderSeeDetails";

const StudentForm = () => {
  const { user } = useContext(AuthContext);
  const [files, setFiles] = useState([]);
  const [payorderID, setPayorderID] = useState("");
  const [formType, setFormType] = useState("");
  const [payment, setPayment] = useState("0");
  const [formTypeValue, setFormTypeValue] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [verificationStatus, setVerificationStatus] = useState(null); // Add local state for verification status

  const navigate = useNavigate();
  // const { form_id: formID } = useParams();
  const { form_id: formID, verificationUpdate: verificationUpdate } =
    useParams();
  const axiosPublic = useAxiosPublic();

  // Fetching student details
  const {
    data: student = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: `OtherStakeholders/certificate-withdrawal-common/see-details/?user_id=${user.user_id}&form_id=${formID}`,
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(
          `/certificate-withdrawal-common/see-details/?user_id=${user.user_id}&form_id=${formID}`
        );
        // console.log(res?.data?.status);
        // setVerificationStatus(res?.data?.status);
        return res?.data;
      } catch (error) {
        console.log("Failed to fetch student data");
      }
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (status) => {
    setIsSubmitting(true);

    const requestBody = {
      status,
      authority_id: user?.user_id,
      comment,
      form_id: parseInt(formID),
    };

    try {
      const response = await axiosPublic.post(
        `/certificate-withdrawal-otherStakeholders/add-formStatus/${user?.user_id}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Post successful:", response?.data);
      // toast.success(`Form ${status === "Accepted" ? "Accepted" : "Rejected"} successfully`);
      if (status === "Accepted") toast.success("Form Successfully Accepted.");
      else toast.error("Form Rejected.");
      navigate("/othersHistory");
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <StakeholderSeeDetails />
      {/* Show verification status if updated, otherwise fall back to the pending status */}
      {verificationUpdate !== "Pending" ? (
        <p>{verificationUpdate}</p>
      ) : (
        <>
          <div className="">
            <label>
              <span className="text-black bold">মন্তব্য</span>
            </label>
            <input
              type="text"
              placeholder="আপনার মন্তব্য শেয়ার করুন"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
              required
              style={{ height: "100px" }}
            />
          </div>
          <Button
            onClick={() => handleSubmit("Accepted")}
            className="mt-5"
            disabled={isSubmitting}
          >
            Accept
          </Button>

          <Button
            onClick={() => handleSubmit("Rejected")}
            className="mt-5 ml-20"
            disabled={isSubmitting}
          >
            Reject
          </Button>
        </>
      )}
    </div>
  );
};

export default StudentForm;
