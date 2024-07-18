/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AuthContext } from "@/components/functions/AuthProvider";
import { Button } from "@/components/ui/button";
import useAxiosPublic from "@/customHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

const StudentSeeDetails = () => {
  const { form_id: formID } = useParams();
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
        return res?.data;
      } catch (error) {
        console.log("Failed to fetch student history");
      }
    },
  });

  const formData = data?.data[0];
  const attachments = data?.attachments;
  console.log(formData)

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="text-right my-5">
        <Link to={`/progressbar/${formData?.form_id}`}>
          <Button className="bg-gray-200 text-black">See Status</Button>
        </Link>
      </div>

      <h1 className="text-2xl mb-5 font-bold">Student's  Details</h1>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Name (English)</label>
        </div>
        <input
          className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.student_name_eng}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Name (Bangla)</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.student_name_bn}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Father's Name (English)</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.father_name_eng}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Father's Name (Bangla)</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.father_name_bn}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Mother's Name (English)</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.mother_name_eng}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Mother's Name (Bangla)</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.mother_name_bn}
          readOnly
        />
      </div>

      <div>
        <div className="text-left mb-3 px-4">
          <label>Village</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.village}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Post Office</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.post_office}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Thana</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.thana}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>District</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.district}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Present Address</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.present_address}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Hall Name</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.hall_name}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Academic Session</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.academic_session}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Degree</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.degree}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Department</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={formData?.department_name}
          readOnly
        />
      </div>
      <div>
        <div className="text-left mb-3 px-4">
          <label>Submission Date</label>
        </div>
        <input
          className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
          type="text"
          value={new Date(formData?.form_submission_date).toLocaleDateString()}
          readOnly
        />
      </div>

      <h2 className="text-2xl mb-5 font-bold">Exam Details</h2>
      {formData?.fir_year_exam_name && (
        <div>
          <div className="text-left mb-3 px-4">
            <label>First Year Exam</label>
          </div>
          <input
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
            type="text"
            value={`${formData?.fir_year_exam_name} (${formData?.fir_year_exam_time}) - CGPA: ${formData?.fir_year_exam_cgpa}`}
            readOnly
          />
        </div>
      )}
      {formData?.sec_year_exam_name && (
        <div>
          <div className="text-left mb-3 px-4">
            <label>Second Year Exam</label>
          </div>
          <input
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
            type="text"
            value={`${formData?.sec_year_exam_name} (${formData?.sec_year_exam_time}) - CGPA: ${formData?.sec_year_exam_cgpa}`}
            readOnly
          />
        </div>
      )}
      {formData?.third_year_exam_name && (
        <div>
          <div className="text-left mb-3 px-4">
            <label>Third Year Exam</label>
          </div>
          <input
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
            type="text"
            value={`${formData?.third_year_exam_name} (${formData?.third_year_exam_time}) - CGPA: ${formData?.third_year_exam_cgpa}`}
            readOnly
          />
        </div>
      )}
      {formData?.fourth_year_exam_name && (
        <div>
          <div className="text-left mb-3 px-4">
            <label>Fourth Year Exam</label>
          </div>
          <input
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
            type="text"
            value={`${formData?.fourth_year_exam_name} (${formData?.fourth_year_exam_time}) - CGPA: ${formData?.fourth_year_exam_cgpa}`}
            readOnly
          />
        </div>
      )}
      {formData?.fifth_year_exam_name && (
        <div>
          <div className="text-left mb-3 px-4">
            <label>Fifth Year Exam</label>
          </div>
          <input
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5"
            type="text"
            value={`${formData?.fifth_year_exam_name} (${formData?.fifth_year_exam_time}) - CGPA: ${formData?.fifth_year_exam_cgpa}`}
            readOnly
          />
        </div>
      )}

      <h2 className="text-2xl mb-5 font-bold">Attachments</h2>
      {attachments?.map((attachment, index) => (
        <div key={index}>
          <div className="text-left mb-3 px-4">
            <label>{attachment.attachment_name}:</label>
          </div>
          <a
            href={`http://bike-csecu.com:5000/upload/${attachment.attachment}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-2 border-gray-300 py-3 px-8 rounded-xl mb-5 bg-gray-100 hover:bg-gray-200 text-blue-600"
          >
            View Attachment
          </a>
        </div>
      ))}
    </div>
  );
};

export default StudentSeeDetails;
