import { AuthContext } from "@/components/functions/AuthProvider";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const StudentSeeDetails = () => {
  const { form_id: formID } = useParams();
  console.log(formID);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: `/certificate-withdrawal-common/see-details?user_id=${user?.user_id}&form_id=${formID}`,
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(
          `/certificate-withdrawal-common/see-details?user_id=${user?.user_id}&form_id=${formID}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("session_id"),
            },
          }
        );
        console.log(res?.data);
        return res?.data;
      } catch (error) {
        console.log("Failed to fetch student history");
      }
    },
  });
  const formData = data?.data[0];
  return <div>{formData?.student_name_eng}</div>;
};

export default StudentSeeDetails;
