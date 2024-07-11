import PropTypes from 'prop-types';

const ResultSectionHons = ({
  studentResult,
  department,
  exam_centre,
  student_id,
  academic_session,
  degree
}) => {
  let degreeName = "";
  if (degree.toLowerCase() == "b.sc.engg") {
    degreeName = "বি. এস. সি (ইন্জিনিয়ারিং) পরীক্ষা ";
  } else if (degree.toLowerCase() == "b.b.a") {
    degreeName = "বি. বি. এ পরীক্ষা";
  } else if (degree.toLowerCase() == "b.a(hons)") {
    degreeName = "বি. এ (অনার্স) পরীক্ষা";
  } else if (degree.toLowerCase() == "l.l.b(hons)") {
    degreeName = "এল. এল. বি (অনার্স) পরীক্ষা";
  } else if (degree.toLowerCase() == "b.sc(hons)") {
    degreeName = "বি. এস. সি (অনার্স) পরীক্ষা";
  }
  else if(degreeName.toLowerCase() == "b.s.s(hons)") {
    degreeName = "বি. এস. এস (অনার্স) পরীক্ষা";
  }

  return (
    <>
      {/* ka section */}
      <div className="py-2">
        <span className="text-black text-xl font-bold ">{degreeName}</span>
        <br />
        <span className="text-center text-xl font-bold ">ক।</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black"> ১ম বর্ষ বিষয়</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={department}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">হল/কলেজ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={exam_centre}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার নাম</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fir_year_exam_name}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fir_year_exam_actual_year}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">রোল নং/আই. ডি . নং</span>
          </label>
          <input
            type="number"
            name=""
            disabled
            value={student_id}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">শিক্ষাবর্ষ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={academic_session}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">প্রাপ্ত শ্রেণী/জিপিএ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fir_year_exam_cgpa}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fir_year_exam_time}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      {/* kha section */}
      <div className="py-2">
        <br />
        <br />
        <span className="text-center text-xl font-bold ">খ।</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black"> ২য় বর্ষ বিষয়</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={department}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">হল/কলেজ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={exam_centre}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার নাম</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.sec_year_exam_name}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.sec_year_exam_actual_year}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">রোল নং/আই. ডি . নং</span>
          </label>
          <input
            type="number"
            name=""
            disabled
            value={student_id}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">শিক্ষাবর্ষ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={academic_session}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">প্রাপ্ত শ্রেণী/জিপিএ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.sec_year_exam_cgpa}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.sec_year_exam_time}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      {/* গ। section */}
      <div className="py-2">
        <br />
        <br />
        <span className="text-center text-xl font-bold ">গ।</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black"> ৩য় বর্ষ বিষয়</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={department}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">হল/কলেজ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={exam_centre}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার নাম</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.third_year_exam_name}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.third_year_exam_actual_year}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">রোল নং/আই. ডি . নং</span>
          </label>
          <input
            type="number"
            name=""
            disabled
            value={student_id}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">শিক্ষাবর্ষ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={academic_session}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">প্রাপ্ত শ্রেণী/জিপিএ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.third_year_exam_cgpa}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.third_year_exam_time}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      {/* gha section */}
      <div className="py-2">
        <br />
        <br />
        <span className="text-center text-xl font-bold "> ঘ।</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black"> ৪র্থ বর্ষ বিষয়</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={department}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">হল/কলেজ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={exam_centre}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার নাম</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fourth_year_exam_name}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষার বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fourth_year_exam_actual_year}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">রোল নং/আই. ডি . নং</span>
          </label>
          <input
            type="number"
            name=""
            disabled
            value={student_id}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">শিক্ষাবর্ষ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={academic_session}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">প্রাপ্ত শ্রেণী/জিপিএ</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fourth_year_exam_cgpa}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        <div className="w-full lg:w-[590px]">
          <label>
            <span className="text-black">পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</span>
          </label>
          <input
            type="text"
            name=""
            disabled
            value={studentResult?.fourth_year_exam_time}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

ResultSectionHons.propTypes = {
  studentResult: PropTypes.object.isRequired,
  department: PropTypes.string.isRequired,
  exam_centre: PropTypes.string.isRequired,
  student_id: PropTypes.number.isRequired,
  academic_session: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default ResultSectionHons;
