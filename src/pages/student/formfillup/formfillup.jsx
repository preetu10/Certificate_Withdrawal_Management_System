import { useState } from "react";
("use client");

import { toast } from "@/components/ui/use-toast";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../customHooks/useAxiosPublic.jsx";
import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
//import { toast } from "react-toastify";

const Formfillup = () => {
  const [files, setFiles] = useState([]);
  const [payorderID, setPayorderID] = useState("");
  const [formType, setFormType] = useState("");
  const [payment, setPayment] = useState("0");
  const [formTypeValue, setFormTypeValue] = useState("");
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const { data: student = {}, isPending } = useQuery({
    queryKey: "student",
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(
          "/certificate-withdrawal/93712c7c-0304-11ef-a96d-3c5282764ceb"
        );
        return res.data;
      } catch (error) {
        console.log("Failed to fetch student data");
      }
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  console.log(student);

  const date = new Date(student?.results[1]?.exam_start_date);
  const options = { year: "numeric", month: "long" };
  const formattedDate1 = date.toLocaleDateString("en-US", options);

  const date2 = new Date(student?.results[3]?.exam_start_date);
  const options2 = { year: "numeric", month: "long" };
  const formattedDate2 = date2.toLocaleDateString("en-US", options2);

  const date3 = new Date(student?.results[5]?.exam_start_date);
  const options3 = { year: "numeric", month: "long" };
  const formattedDate3 = date3.toLocaleDateString("en-US", options3);

  const date4 = new Date(student?.results[7]?.exam_start_date);
  const options4 = { year: "numeric", month: "long" };
  const formattedDate4 = date4.toLocaleDateString("en-US", options4);

  const date_masters = new Date(student?.results[2]?.exam_start_date);
  const option_masters = { year: "numeric", month: "long" };
  const formattedDateMasters = date_masters.toLocaleDateString(
    "en-US",
    option_masters
  );

  const presentAddress =
    student.presentAddress[0].village +
    ", " +
    student.presentAddress[0].thana +
    ", " +
    student.presentAddress[0].post_office +
    ", " +
    student.presentAddress[0].district;
  //console.log(presentAddress);

  const handlePayorderID = (e) => {
    setPayorderID(e.target.value);
  };
  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
    if (e.target.value == "মূল সনদপত্র নিয়মিত") {
      setPayment("৮০০");
      setFormTypeValue("Main");
    }
    if (e.target.value == "ডুবলিকেট মূল সনদ") {
      setPayment("১৫০০");
      setFormTypeValue("Main");
    }
    if (e.target.value == "সাময়িক সনদ") {
      setPayment("৪০০");
      setFormTypeValue("Provisional");
    }
    if (e.target.value == "সাময়িক সনদ (ডুবলিকেট)") {
      setPayment("১১০০");
      setFormTypeValue("Provisional");
    }
  };

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file_attachments = [];
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("items", files[i]);
      console.log(files[i]);
    }

    try {
      const response = await axiosPublic.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const getFile = response?.data?.files;
      getFile.forEach((a) => {
        file_attachments.push({
          attachment: a.filename,
          attachment_name: a.originalname,
        });
      });

      const data = {
        academic_session: student?.academic_session,
        form_type: formTypeValue || "",
        money: Number(payment) || null,
        payorder_id: payorderID,
        degree: student?.program_abbr,
        district: student?.permanentAddress[0].district,
        father_name_bn: student?.fathers_name_bn,
        father_name_eng: student?.fathers_name,
        fifth_year_exam_actual_year: "",
        fifth_year_exam_cgpa: null,
        fifth_year_exam_name: "",
        fifth_year_exam_time: "",
        fir_year_exam_actual_year: student?.results[1]?.exam_session || "",
        fir_year_exam_cgpa: Number(student?.results[1]?.cgpa) || null,
        fir_year_exam_name: student?.results[1]?.exam_name || "",
        fir_year_exam_time:
          formattedDate1 == "Invalid Date" ? "" : formattedDate1,
        fourth_year_exam_actual_year: student?.results[7]?.exam_session || "",
        fourth_year_exam_cgpa: Number(student?.results[7]?.cgpa) || null,
        fourth_year_exam_name: student?.results[7]?.exam_name || "",
        fourth_year_exam_time:
          formattedDate4 == "Invalid Date" ? "" : formattedDate4,
        hall_name: student?.hall_name,
        mobile_phone: student?.phone,
        mother_name_bn: student?.mothers_name_bn,
        mother_name_eng: student?.mothers_name,
        post_office: student?.permanentAddress[0].post_office,
        present_address: presentAddress,
        profile_image: student?.profile_image,
        sec_year_exam_actual_year: student?.results[3]?.exam_session || "",
        sec_year_exam_cgpa: Number(student?.results[3]?.cgpa) || null,
        sec_year_exam_name: student?.results[3]?.exam_name || "",
        sec_year_exam_time:
          formattedDate2 == "Invalid Date" ? "" : formattedDate2,
        student_id: Number(student?.student_id),
        student_name_bn: student.first_name,
        student_name_eng: student.first_name_bn,
        thana: student?.permanentAddress[0].thana,
        third_year_exam_actual_year: student?.results[5]?.exam_session || "",
        third_year_exam_cgpa: Number(student?.results[5]?.cgpa) || null,
        third_year_exam_name: student?.results[5]?.exam_name || "",
        third_year_exam_time:
          formattedDate3 == "Invalid Date" ? "" : formattedDate3,
        village: student?.permanentAddress[0].village,
        file_attachments: file_attachments,
      };
      console.log(data);
      const formResponse = await axiosPublic.post(
        "/certificate-withdrawal/post-form",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (formResponse.status == 200) {
        toast.success("Submission successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Certificate-Withdrawal-Form | CU-Certificate-Section</title>
      </Helmet>
      {/* main page start */}
      <form onSubmit={handleSubmit} className="space-y-8 hind-siliguri-regular">
        <div className="hind-siliguri-regular">
          <div className="mx-auto">
            <img className="mx-auto w-24 h-30" src="cu_logo.png" alt="" />
            <h1 className="text-xl font-bold mt-5">চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
            <div className="flex mx-auto justify-center mt-5 mb-5">
              <select
                required
                className="w-[180px] p-3 border-2 border-gray-300 rounded-xl"
                placeholder="সনদের ধরণ"
                value={formType}
                onChange={handleFormTypeChange}
              >
                <option disabled selected>
                  ---সনদের ধরণ---
                </option>
                <option>মূল সনদপত্র নিয়মিত</option>
                <option>ডুবলিকেট মূল সনদ</option>
                <option>সাময়িক সনদ</option>
                <option>সাময়িক সনদ (ডুবলিকেট)</option>
              </select>
            </div>
          </div>
        </div>
        {/* main form with input fields start */}
        {/* student image */}
        <div className="flex mx-auto justify-center mt-5 mb-5">
          <img
            className="border-2 border-gray-300"
            name="profile_image"
            src={student?.profile_image}
            alt="ছবি"
            width="180px"
            height="180px"
          />
        </div>
        {/* pay order info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center ">
          <div className="">
            <label>
              <span className="text-black">ডি-ডি/ পে অডার নং</span>
            </label>
            <input
              type="text"
              name="payorder_id"
              placeholder="ডি-ডি/ পে অডার নং"
              onChange={handlePayorderID}
              className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
              required
            />
          </div>
          <div className="">
            <label>
              <span className="text-black">
                {" "}
                ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক
                মোট টাকা{" "}
              </span>
            </label>
            {/* eta select er upor depend kore change kora lgbe usestate er maddhome */}
            <input
              type="text"
              name="payment_amount"
              value={payment}
              placeholder="ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা"
              className=" w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
              disabled
            />
          </div>
        </div>
        {/* student name in eng and bangla  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">শিক্ষার্থীর নাম (বাংলায়)</span>
            </label>
            <input
              type="text"
              name="first_name_bn"
              disabled
              value={student.first_name_bn}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">(ইংরেজিতে)</span>
            </label>
            <input
              type="text"
              name="first_name"
              disabled
              value={student.first_name}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
        </div>
        {/* father's name in eng and bangla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">পিতার নাম (বাংলায়)</span>
            </label>
            <input
              type="text"
              name="fathers_name_bn"
              placeholder="পিতার নাম"
              disabled
              value={student.fathers_name_bn}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">(ইংরেজিতে)</span>
            </label>
            <input
              type="text"
              name="fathers_name"
              placeholder="নাম"
              disabled
              value={student.fathers_name}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
        </div>
        {/* mother's name in eng and bangla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">মাতার নাম (বাংলায়)</span>
            </label>
            <input
              type="text"
              name="mothers_name_bn"
              disabled
              value={student.mothers_name_bn}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">(ইংরেজিতে)</span>
            </label>
            <input
              type="text"
              name="mothers_name"
              disabled
              value={student.mothers_name}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
        </div>
        {/* village and post office */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">গ্রাম</span>
            </label>
            <input
              type="text"
              name="village"
              disabled
              value={student.permanentAddress[0].village}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">পোস্ট</span>
            </label>
            <input
              type="text"
              name="post_office"
              disabled
              value={student.permanentAddress[0].post_office}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
        </div>
        {/* thana & district */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 px-5 items-stretch justify-center">
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">থানা</span>
            </label>
            <input
              type="text"
              name="thana"
              disabled
              value={student.permanentAddress[0].thana}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
          <div className="w-full lg:w-[590px]">
            <label>
              <span className="text-black">জেলা</span>
            </label>
            <input
              type="text"
              name="district"
              disabled
              value={student.permanentAddress[0].district}
              className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            />
          </div>
        </div>
        {/* present address */}
        <div className="w-full px-8  items-stretch">
          <label>
            <span className="text-black">বর্তমান ঠিকানা</span>
          </label>
          <input
            type="text"
            name="thana"
            disabled
            value={presentAddress}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>
        {/* mobile no */}
        <div className="w-full px-5 items-stretch">
          <label>
            <span className="text-black">মোবাইল নং/টেলিফোন নং</span>
          </label>
          <input
            type="text"
            name="phone"
            disabled
            value={student.phone}
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
          />
        </div>

        {/* ekahne student.program ashbe  */}

        {(student?.program_abbr.toLowerCase() == "bsc(engg)" ||
          student?.program_abbr == "bba") && (
          <>
            {/* ka section */}
            <div className="py-2">
              <span className="text-black text-xl font-bold ">
                {student?.program_abbr.toLowerCase() == "bsc(engg)"
                  ? "বিএসসি (ইন্জিনিয়ারিং) পরীক্ষা "
                  : "বিবিএ পরীক্ষা"}
              </span>
              <br />
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
                  value={student?.department_name}
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
                  value={student?.results[1]?.exam_centre}
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
                  value={student?.results[1]?.exam_name}
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
                  value={student?.results[1]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[1]?.cgpa}
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
                  value={formattedDate1 == "Invalid Date" ? "" : formattedDate1}
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
                  value={student?.department_name}
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
                  value={student?.results[3]?.exam_centre}
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
                  value={student?.results[3]?.exam_name}
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
                  value={student?.results[3]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[3]?.cgpa}
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
                  value={formattedDate2 == "Invalid Date" ? "" : formattedDate2}
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
                  value={student?.department_name}
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
                  value={student?.results[5]?.exam_centre}
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
                  value={student?.results[5]?.exam_name}
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
                  value={student?.results[5]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[5]?.cgpa}
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
                  value={formattedDate3 == "Invalid Date" ? "" : formattedDate3}
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
                  value={student?.department_name}
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
                  value={student?.results[7]?.exam_centre}
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
                  value={student?.results[7]?.exam_name}
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
                  value={student?.results[7]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[7]?.cgpa}
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
                  value={formattedDate4 == "Invalid Date" ? "" : formattedDate4}
                  className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
                />
              </div>
            </div>
          </>
        )}

        {/* masters degree start */}
        {(student?.program_abbr.toLowerCase() == "msc" ||
          student?.program_abbr.toLowerCase() == "mba") && (
          <>
            {/* preli */}
            <div className="py-2">
              <span className="text-black text-xl font-bold ">
                {student?.program_abbr.toLowerCase() == "msc(engg)"
                  ? "এম.এসসি. (ইন্জিনিয়ারিং) (প্রিলিমিনারি) পরীক্ষা "
                  : "এমবিএ  (প্রিলিমিনারি) পরীক্ষা"}
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
                  value={student?.department_name}
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
                  value={student?.results[1]?.exam_centre}
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
                  value={student?.results[1]?.exam_name}
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
                  value={student?.results[1]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[1]?.cgpa}
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
                  value={formattedDate1 == "Invalid Date" ? "" : formattedDate1}
                  className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
                />
              </div>
            </div>
            {/* final */}
            <div className="py-2">
              <span className="text-black font-bold ">
                {student?.program_abbr.toLowerCase() == "msc(engg)"
                  ? "এম.এসসি. (ইন্জিনিয়ারিং) (প্রিলিমিনারি) পরীক্ষা "
                  : "এমবিএ  (প্রিলিমিনারি) পরীক্ষা"}
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
                  value={student?.department_name}
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
                  value={student?.results[2]?.exam_centre}
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
                  value={student?.results[2]?.exam_name}
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
                  value={student?.results[2]?.exam_session}
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
                  type="text"
                  name=""
                  disabled
                  value={student?.student_id}
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
                  value={student?.academic_session}
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
                  value={student?.results[2]?.cgpa}
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
                  value={
                    formattedDateMasters == "Invalid Date"
                      ? ""
                      : formattedDateMasters
                  }
                  className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
                />
              </div>
            </div>
          </>
        )}
        {/* attachments */}
        <div className="w-full px-5 items-stretch">
          <label>
            <span className="text-black">
              মার্কশীট ও অন্যান্য এটাচমেন্ট জমা দিন
            </span>
          </label>
          <input
            type="file"
            name="attachments"
            accept="application/pdf"
            required
            multiple={true}
            placeholder="মার্কশীট ও অন্যান্য এটাচমেন্ট জমা দিন"
            className="w-full border-2 border-gray-300 py-3 px-8 rounded-xl"
            onChange={handleFileChange}
          />
          <p className="text-left text-red-700">
            Be careful. You can upload upto 8MB.
          </p>
        </div>
        {/* conditional button */}
        <Button type="submit" className="mt-5">
          Submit{" "}
        </Button>
      </form>
    </div>
  );
};

export default Formfillup;
