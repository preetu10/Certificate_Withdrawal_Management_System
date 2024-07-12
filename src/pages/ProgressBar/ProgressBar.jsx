import { AuthContext } from "@/components/functions/AuthProvider";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import { ProcedureProgress } from "@/wels-components/ProcedureProgress/ProcedureProgress";
import { ProgressStep } from "@/wels-components/ProcedureProgress/ProgressStep";
import { useQuery } from "@tanstack/react-query";
import { Check, LoaderIcon, X } from "lucide-react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Progressbar = () => {
  const { form_id } = useParams();
  console.log(form_id);
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosPublic = useAxiosPublic();
  const { data, isPending } = useQuery({
    queryKey: `/certificate-withdrawal-common/see-details?user_id=${user?.user_id}&form_id=${form_id}`,
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(
          `/certificate-withdrawal-common/see-details?user_id=${user?.user_id}&form_id=${form_id}`,
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
  if (isPending) {
    return <div>Loading...</div>;
  }
  console.log("data coming 1", data);
  return (
    <div className="mx-auto md:max-w-2xl mt-24">
      <ProcedureProgress showSerial={true} direction="vertical">
        <ProgressStep status="approved" icon={<Check />}>
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
             Student
            </span>
          </div>
        </ProgressStep>
        <ProgressStep
          status={
            data?.verifications?.length === 0
              ? "waiting"
              : data?.verifications[0]?.status == "Accepted"
              ? "approved"
              : "cancelled"
          }
          icon={
            data?.verifications?.length === 0 ? (
              <LoaderIcon />
            ) : data?.verifications[0]?.status == "Accepted" ? (
              <Check />
            ) : (
              <X />
            )
          }
        >
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
              Provost
            </span>
            {data?.verifications[0]?.comment && (
              <span className="px-5 font-normal text-sm md:text-lg">
                Comment: {data?.verifications[0]?.comment}
              </span>
            )}
          </div>
        </ProgressStep>
        <ProgressStep
          status={
            data?.verifications[1]?.status == "Accepted"
              ? "approved"
              : data?.verifications[1]?.status == "Rejected"
              ? "cancelled"
              : "waiting"
          }
          icon={
            data?.verifications[1]?.status == "Accepted" ? (
              <Check />
            ) : data?.verifications[1]?.status == "Rejected" ? (
              <X />
            ) : (
              <LoaderIcon />
            )
          }
        >
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
              First Verifier
            </span>
            {data?.verifications[1]?.comment && (
              <span className="px-5 font-normal text-sm md:text-lg">
                Comment: {data?.verifications[1]?.comment}
              </span>
            )}
          </div>
        </ProgressStep>
        <ProgressStep
          status={
            data?.verifications[2]?.status == "Accepted"
              ? "approved"
              : data?.verifications[2]?.status == "Rejected"
              ? "cancelled"
              : "waiting"
          }
          icon={
            data?.verifications[2]?.status == "Accepted" ? (
              <Check />
            ) : data?.verifications[2]?.status == "Rejected" ? (
              <X />
            ) : (
              <LoaderIcon />
            )
          }
        >
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
              Second Verifier
            </span>
            {data?.verifications[2]?.comment && (
              <span className="px-5 font-normal text-sm md:text-lg">
                Comment: {data?.verifications[2]?.comment}
              </span>
            )}
          </div>
        </ProgressStep>
        <ProgressStep
          status={
            data?.verifications[3]?.status == "Accepted"
              ? "approved"
              : data?.verifications[3]?.status == "Rejected"
              ? "cancelled"
              : "waiting"
          }
          icon={
            data?.verifications[3]?.status == "Accepted" ? (
              <Check />
            ) : data?.verifications[3]?.status == "Rejected" ? (
              <X />
            ) : (
              <LoaderIcon />
            )
          }
        >
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
              Section Incharge
            </span>
            {data?.verifications[3]?.comment && (
              <span className="px-5 font-normal text-sm md:text-lg">
                Comment: {data?.verifications[3]?.comment}
              </span>
            )}
          </div>
        </ProgressStep>
        <ProgressStep
          status={
            data?.verifications[4]?.status == "Accepted"
              ? "approved"
              : data?.verifications[4]?.status == "Rejected"
              ? "cancelled"
              : "waiting"
          }
          icon={
            data?.verifications[4]?.status == "Accepted" ? (
              <Check />
            ) : data?.verifications[4]?.status == "Rejected" ? (
              <X />
            ) : (
              <LoaderIcon />
            )
          }
        >
          <div className="flex items-center">
            {" "}
            <span className="font-semibold text-base md:text-lg text-gray-700">
              Exam Controller
            </span>
            {data?.verifications[4]?.comment && (
              <span className="px-5 font-normal text-sm md:text-lg">
                Comment: {data?.verifications[4]?.comment}
              </span>
            )}
          </div>
        </ProgressStep>
        {(data?.data[0]?.form_type == "Main" ||
          data?.data[0]?.form_type == "Main(Duplicate)") && (
          <ProgressStep
            status={
              data?.verifications[5]?.status == "Accepted"
                ? "approved"
                : data?.verifications[5]?.status == "Rejected"
                ? "cancelled"
                : "waiting"
            }
            icon={
              data?.verifications[5]?.status == "Accepted" ? (
                <Check />
              ) : data?.verifications[5]?.status == "Rejected" ? (
                <X />
              ) : (
                <LoaderIcon />
              )
            }
          >
            <div className="flex items-center">
              {" "}
              <span className="font-semibold text-base md:text-lg text-gray-700">
                Vice Chancellor
              </span>
              {data?.verifications[5]?.comment && (
                <span className="px-5 font-normal text-sm md:text-lg">
                  Comment: {data?.verifications[5]?.comment}
                </span>
              )}
            </div>
          </ProgressStep>
        )}
      </ProcedureProgress>
      ;
    </div>
  );
};

export default Progressbar;
