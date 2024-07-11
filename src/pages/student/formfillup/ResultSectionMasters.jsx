import PropTypes from 'prop-types';
const ResultSectionMasters = ({ studentResult,
    department,
    exam_centre,
    student_id,
    academic_session,
    degree}) => {
      let degreeName = "";
     if (degree.toLowerCase() == "m.b.a") {
        degreeName = "এম. বি. এ পরীক্ষা";
      } else if (degree.toLowerCase() == "m.a") {
        degreeName = "এম. এ  পরীক্ষা";
      } else if (degree.toLowerCase() == "l.l.m") {
        degreeName = "এল. এল. এম  পরীক্ষা";
      } else if (degree.toLowerCase() == "m.sc") {
        degreeName = "এম. এস. সি  পরীক্ষা";
      }
      else if(degreeName.toLowerCase() == "m.s.s") {
        degreeName = "এম. এস. এস  পরীক্ষা";
      }
    return (
            <>
              {/* final */}
              <div className="py-2">
                <span className="text-black font-bold ">
                 {degreeName}
                </span>
                <br />
                <br />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
                <div className="w-full lg:w-[590px]">
                  <label>
                    <span className="text-black"> বিষয়</span>
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
                    <span className="text-black">
                      পরীক্ষা অনুষ্ঠিত মাস ও বৎসর
                    </span>
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
            </>
          
    );
};

ResultSectionMasters.propTypes = {
  studentResult: PropTypes.object.isRequired,
  department: PropTypes.string.isRequired,
  exam_centre: PropTypes.string.isRequired,
  student_id: PropTypes.number.isRequired,
  academic_session: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default ResultSectionMasters;