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
  //console.log("data coming 1", data);
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
          <div className="flex flex-row items-center">
            {" "}
            <div className="font-semibold text-base md:text-lg text-gray-700">
              Provost
            </div>
            {data?.verifications[0]?.comment && (
              <div className="px-5 font-normal text-sm md:text-base">
                <span className="font-semibold">Comment: </span>&quot;{data?.verifications[0]?.comment}&quot;
              </div>
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
          <div className="flex flex-row items-center">
            {" "}
            <div className="font-semibold text-base md:text-lg text-gray-700">
              First Verifier
            </div>
            {data?.verifications[1]?.comment && (
              <div className="px-5 font-normal text-sm md:text-base">
               <span className="font-semibold">Comment: </span>&quot;{data?.verifications[1]?.comment}&quot;
              </div>
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
          <div className="flex flex-row items-center">
            {" "}
            <div className="font-semibold text-base md:text-lg text-gray-700">
              Second Verifier
            </div>
            {data?.verifications[2]?.comment && (
              <div className="px-5 font-normal text-sm md:text-base">
                <span className="font-semibold">Comment: </span>&quot;{data?.verifications[2]?.comment}&quot;
              </div>
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
          <div className="flex flex-row items-center">
            {" "}
            <div className="font-semibold text-base md:text-lg text-gray-700">
              Section Incharge
            </div>
            {data?.verifications[3]?.comment && (
              <div className="px-5 font-normal text-sm md:text-base">
                <span className="font-semibold">Comment: </span>&quot;{data?.verifications[3]?.comment}&quot;
              </div>
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
          <div className="flex flex-row items-center">
            {" "}
            <div className="font-semibold text-base md:text-lg text-gray-700">
              Exam Controller
            </div>
            {data?.verifications[4]?.comment && (
              <div className="px-5 font-normal text-sm md:text-base">
                <span className="font-semibold">Comment: </span>&quot;{data?.verifications[4]?.comment}&quot;
              </div>
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
            <div className="flex flex-row items-center">
              {" "}
              <div className="font-semibold text-base md:text-lg text-gray-700">
                Vice Chancellor
              </div>
              {data?.verifications[5]?.comment && (
                <div className="px-5 font-normal text-sm md:text-base">
                <span className="font-semibold">Comment: </span> &quot;{data?.verifications[5]?.comment}&quot;
                </div>
              )}
            </div>
          </ProgressStep>
        )}
      </ProcedureProgress>
      {(((data?.data[0]?.form_type == "Main" ||
        data?.data[0]?.form_type == "Main(Duplicate)") &&
        data?.verifications[5]?.status === "Accepted") ||
        ((data?.data[0]?.form_type == "Provisional" ||
          data?.data[0]?.form_type == "Provisional(Duplicate)") &&
          data?.verifications[4]?.status === "Accepted")) && (
        <div className="mt-4 text-blue-800 font-semibold text-lg flex mx-auto">
          <p >
            Your application for certificate is verified by the authority.
            Please collect it from the Certificate Section of Academic Building.
          </p>
        </div>
      )}
      ;
    </div>
  );
};

export default Progressbar;
