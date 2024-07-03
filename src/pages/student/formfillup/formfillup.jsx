import React, { useState } from 'react'
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Formfillup = () => {
  const profileFormSchema = z.object({});

  const defaultValues = {};

  const [formData, setFormData] = useState({
    applicationDate: '',
    certificateIssueDate: '',
    guardianOfficerPhoto: '',
    fees: '',
    englishTemporaryCertificateFee: '',
    banglaTemporaryCertificateFee: '',
    marksheetFee: '',
    managerBankAmount: '',
    ddOrPayOrderNumber: '',
    bankName: '',
    responsibleOfficerSignature: '',
    date: '',
    studentNameBangla: '',
    studentNameEnglish: '',
    fatherNameBangla: '',
    fatherNameEnglish: '',
    motherNameBangla: '',
    motherNameEnglish: '',
    village: '',
    postOffice: '',
    thana: '',
    district: '',
    currentAddress: '',
    mobileNumber: '',
    collegeName: '',
    examName: '',
    rollNumber: '',
    examYear: '',
    obtainedDivision: '',
    registrationNumber: '',
    academicYear: '',
    supplementaryPassedMonthYear: '',
    supplementaryRollNumber: '',
    username: '',
    college: '',
    examName: '',
    examYear: '',
    rollNo: '',
    regNo: '',
    academicYear: '',
    grade: '',
    examMonthYear: '',
    subject: '',
    secondYearCollege: '',
    secondYearExamName: '',
    secondYearExamYear: '',
    secondYearRollNo: '',
    secondYearRegNo: '',
    secondYearAcademicYear: '',
    secondYearGrade: '',
    secondYearExamMonthYear: '',
    thirdYearSubject: '',
    thirdYearhallCollege: '',
    thirdYearexamName: '',
    thirdYearexamYear: '',
    thirdYearrollNo: '',
    thirdYearregistrationNo: '',
    thirdYearacademicYear: '',
    thirdYearobtainedClassGPA: '',
    thirdYearexamMonthYear: '',

    fourthYearSubject: '',
    fourthYearHallCollege: '',
    fourthYearExamName: '',
    fourthYearExamYear: '',
    fourthYearRollNo: '',
    fourthYearRegistrationNo: '',
    fourthYearAcademicYear: '',
    fourthYearObtainedClassGPA: '',
    fourthYearExamMonthYear: ''
  });


  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });



  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Form {...form}>

        <div className="hind-siliguri-regular">
          <div className='mx-auto'>
            <img className='mx-auto w-24 h-30' src="cu_logo.png" alt="" />
            <h1 className='text-xl font-bold mt-5'>চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
            <div className='flex mx-auto justify-center mt-5 mb-5'>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="সনদের ধরণ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">মূল সনদপত্র নিয়মিত</SelectItem>
                  <SelectItem value="light">মূল সনদপত্র বহিরাগত</SelectItem>
                  <SelectItem value="light">জরুরী ফিসসহ নিয়মিত</SelectItem>
                  <SelectItem value="light">জরুরী ফিসসহ বহিরাগত</SelectItem>
                  <SelectItem value="light">ডুবলিকেট মূল সনদ</SelectItem>
                  <SelectItem value="light">দ্বিতীয় ডুবলিকেট মূল সনদ</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ পুরাতন বাংলা</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ পুরাতন বাংলা বহিরাগত</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ ইংরেজি বহিরাগত</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ ইংরেজি পুরাতন</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ ইংরেজি নতুন</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ (ডুবলিকেট)</SelectItem>
                  <SelectItem value="light">সাময়িক সনদ (ডুবলিকেট) বহিরাগত </SelectItem>
                </SelectContent>
              </Select>
            </div>


          </div>
        </div>


        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 hind-siliguri-regular">
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>আবেদনপত্র গ্রহনের তারিখ</FormLabel>
                    <FormControl>
                      <Input placeholder="আবেদনপত্র গ্রহনের তারিখ" required value={formData.applicationDate} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সনদপত্র প্রদানের তারিখ</FormLabel>
                    <FormControl>
                      <Input placeholder="সনদপত্র প্রদানের তারিখ" required value={formData.certificateIssueDate}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="fathername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>প্রভোস্ট / অধ্যক্ষ / বহিরাগত
                  প্রার্থীর ক্ষেত্রে গেজেটেড অফিসার
                  কর্তৃক সত্যায়িত ছবি এখানে সংযুক্ত
                  করতে হবে (এক কপি)</FormLabel>
                <FormControl>
                  <Input placeholder="ছবি" required value={formData.guardianOfficerPhoto}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>মূল সনদ ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="মূল সনদ ফি" required value={formData.fees}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name="mothername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>উস ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="উস ফি" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>জরুরী ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="জরুরী ফি" required value={formData.emergencyFee}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ইংরেজিতে সাময়িক সনদ ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="ইংরেজিতে সাময়িক সনদ ফি" required value={formData.englishTemporaryCertificateFee}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বাংলায় সাময়িক সনদ ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="বাংলায় সাময়িক সনদ ফি" required value={formData.banglaTemporaryCertificateFee}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>মার্কশিট ফি</FormLabel>
                    <FormControl>
                      <Input placeholder="মার্কশিট ফি" required value={formData.marksheetFee}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /></div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা </FormLabel>
                <FormControl>
                  <Input placeholder="ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা" required value={formData.managerBankAmount}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ডি-ডি/ পে অডার নং</FormLabel>
                    <FormControl>
                      <Input placeholder="ডি-ডি/ পে অডার নং" required value={formData.ddOrPayOrderNumber}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>টাকা</FormLabel>
                    <FormControl>
                      <Input placeholder="টাকা" required value={formData.amount}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>তারিখ</FormLabel>
                    <FormControl>
                      <Input placeholder="তারিখ" required value={formData.date}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>অগ্রণী ব্যাংক / জনতা ব্যাংক</FormLabel>
                    <FormControl>
                      <Input placeholder="অগ্রণী ব্যাংক / জনতা ব্যাংক" required value={formData.bankName}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>দায়িত্বপ্রাপ্ত কর্মকর্তার স্বাক্ষর</FormLabel>
                <FormControl>
                  <Input placeholder="স্বাক্ষর" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষার্থীর নাম (বাংলায়)</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষার্থীর নাম" required value={formData.studentNameBangla}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>(ইংরেজিতে)</FormLabel>
                    <FormControl>
                      <Input placeholder="নাম" required value={formData.studentNameEnglish}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name="fathername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পিতার নাম (বাংলায়)</FormLabel>
                    <FormControl>
                      <Input placeholder="পিতার নাম" required value={formData.fatherNameBangla}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>(ইংরেজিতে)</FormLabel>
                    <FormControl>
                      <Input placeholder="নাম" required value={formData.fatherNameEnglish}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name="mothername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>মাতার নাম (বাংলায়)</FormLabel>
                    <FormControl>
                      <Input placeholder="মাতার নাম" required value={formData.motherNameBangla}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>(ইংরেজিতে)</FormLabel>
                    <FormControl>
                      <Input placeholder="নাম" required value={formData.motherNameEnglish}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>গ্রাম</FormLabel>
                    <FormControl>
                      <Input placeholder="গ্রাম" required value={formData.village}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পোস্ট</FormLabel>
                    <FormControl>
                      <Input placeholder="পোস্ট" required value={formData.postOffice}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly lg:space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>থানা</FormLabel>
                    <FormControl>
                      <Input placeholder="থানা" required value={formData.thana}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>জেলা</FormLabel>
                    <FormControl>
                      <Input placeholder="জেলা" required value={formData.district}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>বর্তমান ঠিকানা</FormLabel>
                <FormControl>
                  <Input placeholder="ঠিকানা" required value={formData.currentAddress}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>মোবাইল নং/টেলিফোন নং</FormLabel>
                <FormControl>
                  <Input placeholder="মোবাইল নং" required value={formData.mobileNumber}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ১. ডিগ্রী পাস পরীক্ষা (বি. এ /
                  বি. এসসি/ বি.এস.এস/
                  বি.কম ও বি.এফ.এ. পাস)
                </FormDescription>
                <FormLabel>কলেজের নাম/কেন্দ্রের নাম</FormLabel>
                <FormControl>
                  <Input placeholder="কলেজের নাম/কেন্দ্রের নাম" value={formData.collegeName}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" value={formData.examName}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" value={formData.rollNumber}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" value={formData.examYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত বিভাগ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত বিভাগ" value={formData.obtainedDivision}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং" value={formData.registrationNumber}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" value={formData.academicYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সম্পুরক পাস হলে অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="মাস ও বৎসর" value={formData.supplementaryPassedMonthYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" value={formData.supplementaryRollNumber}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ২. ডিগ্রী অনার্স/এম.বি.বি.এস./ইঞ্জিনিয়ারিং পরীক্ষা
                </FormDescription>
                <FormDescription>
                  ক। ১ম বর্ষ/১ম প্রফেশনাল/বিষয়
                </FormDescription>
                <FormLabel>১ম বর্ষ/১ম প্রফেশনাল /বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="১ম বর্ষ/১ম প্রফেশনাল /বিষয়" value={formData.username}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>হল/কলেজ</FormLabel>
                <FormControl>
                  <Input placeholder="হল/কলেজ" value={formData.college}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" value={formData.examName}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" value={formData.examYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং/আই. ডি . নং
                    </FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং/আই. ডি . নং
"  value={formData.rollNo}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং/আই. ডি . নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং" value={formData.regNo}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" value={formData.academicYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী/জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ " value={formData.grade}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                <FormControl>
                  <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর" value={formData.examMonthYear}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  খ। ২য় বর্ষ/২য় প্রফেশনাল/বিষয়
                </FormDescription>
                <FormLabel>২য় বর্ষ/২য় প্রফেশনাল/বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="২য় বর্ষ/২য় প্রফেশনাল/বিষয়" value={formData.subject}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>হল/কলেজ</FormLabel>
                    <FormControl>
                      <Input placeholder="হল/কলেজ" value={formData.secondYearCollege}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" value={formData.secondYearExamName}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" value={formData.secondYearExamYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং/আই. ডি . নং
                    </FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং/আই. ডি . নং
"  value={formData.secondYearRollNo}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">

              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং/আই. ডি . নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং" value={formData.secondYearRegNo}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" value={formData.secondYearAcademicYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী/জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ " value={formData.secondYearGrade}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর" value={formData.secondYearExamMonthYear}
                        onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  গ। ৩য় বর্ষ/৩য় প্রফেশনাল /বিষয়
                </FormDescription>
                <FormLabel>৩য় বর্ষ/৩য় প্রফেশনাল/বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="৩য় বর্ষ/৩য় প্রফেশনাল/বিষয়" value={formData.thirdYearSubject}
                    onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />








          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>হল/কলেজ</FormLabel>
                    <FormControl>
                      <Input placeholder="হল/কলেজ" value={formData.thirdYearhallCollege} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" value={formData.thirdYearexamName} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" value={formData.thirdYearexamYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং/আই. ডি . নং
                    </FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং/আই. ডি . নং
"  value={formData.thirdYearrollNo} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং/আই. ডি . নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং" value={formData.thirdYearregistrationNo} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" value={formData.thirdYearacademicYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী/জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ " value={formData.thirdYearobtainedClassGPA} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর" value={formData.thirdYearexamMonthYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>


          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription>
                  ঘ। ৪র্থ বর্ষ/৪র্থ প্রফেশনাল/বিষয়
                </FormDescription>
                <FormLabel>৪র্থ বর্ষ/৪র্থ প্রফেশনাল/বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="৪র্থ বর্ষ/৪র্থ প্রফেশনাল/বিষয়" value={formData.fourthYearSubject} onChange={handleChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>হল/কলেজ</FormLabel>
                    <FormControl>
                      <Input placeholder="হল/কলেজ" value={formData.fourthYearHallCollege} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" value={formData.fourthYearExamName} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" value={formData.fourthYearExamYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং/আই. ডি . নং
                    </FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং/আই. ডি . নং
" value={formData.fourthYearRollNo} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং/আই. ডি . নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং" value={formData.fourthYearRegistrationNo} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" value={formData.fourthYearAcademicYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী/জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ " value={formData.fourthYearObtainedClassGPA} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর" value={formData.fourthYearExamMonthYear} onChange={handleChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ৩. মাস্টার ডিগ্রী / এলএল.বি. (প্রিলিমিনারি) পরীক্ষাঃ (এম.এ / এম.এসসি. /
                  এম.এস.এস /এম.কম.)
                </FormDescription>
                <FormLabel>বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="বিষয়" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>কলেজের নাম/কেন্দ্রের নাম</FormLabel>
                <FormControl>
                  <Input placeholder="কলেজ/কেন্দ্র/হল" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী /জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী /জিপিএ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>সম্পুরক পাস হলে অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                <FormControl>
                  <Input placeholder="মাস ও বৎসর" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ৪. মাস্টার ডিগ্রী / এলএল.বি. (ফাইনাল) পরীক্ষাঃ (এম.এ / এম.এসসি. /
                  এম.এস.এস /এম.কম./
                  এম.বি.এ/এলএল.এম/
                  এম.এস)
                </FormDescription>
                <FormLabel>বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="বিষয়" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>কলেজের নাম/কেন্দ্রের নাম</FormLabel>
                <FormControl>
                  <Input placeholder="কলেজ/কেন্দ্র/হল" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার নাম" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী /জিপিএ</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী /জিপিএ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সম্পুরক পাস হলে অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="মাস ও বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সনদপত্র নং</FormLabel>
                    <FormControl>
                      <Input placeholder="সনদপত্র নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ৫. বি.এডঃ কলেজ
                </FormDescription>
                <FormLabel>বি.এডঃ কলেজ</FormLabel>
                <FormControl>
                  <Input placeholder="বি.এডঃ কলেজ" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রাপ্ত শ্রেণী</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রাপ্ত শ্রেণী" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="মাস ও বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormDescription className="mt-5 font-bold">
                  ৬. মিলিটারি সাইন্স/ সার্টিফিকেট কোর্স /
                  ডিপ্লোমা কোর্স /এম.এফ. পরীক্ষা/ ডিপ্লোমা চিকিৎসা বিজ্ঞান
                </FormDescription>
                <FormLabel>পরীক্ষার নাম</FormLabel>
                <FormControl>
                  <Input placeholder="পরীক্ষার নাম" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> রোল নং</FormLabel>
                    <FormControl>
                      <Input placeholder=" রোল নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পরীক্ষার বৎসর</FormLabel>
                    <FormControl>
                      <Input placeholder="পরীক্ষার বৎসর" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>রেজিস্ট্রেশন নং</FormLabel>
                    <FormControl>
                      <Input placeholder="রেজিস্ট্রেশন নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাবর্ষ</FormLabel>
                    <FormControl>
                      <Input placeholder="শিক্ষাবর্ষ" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-evenly space-x-8">
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ফলাফল</FormLabel>
                    <FormControl>
                      <Input placeholder="ফলাফল" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:w-[590px]">
              <FormField
                control={form.control}
                name=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সনদপত্র নং</FormLabel>
                    <FormControl>
                      <Input placeholder="সনদপত্র নং" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>হল/কলেজ/ইনস্টিটিউট</FormLabel>
                <FormControl>
                  <Input placeholder="হল/কলেজ/ইনস্টিটিউট" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="font-bold text-left">মার্কশীট ও অন্যান্য এটাচমেন্ট জমা দিন</FormLabel>
                <FormControl>
                  <Input placeholder="মার্কশীট ও অন্যান্য এটাচমেন্ট জমা দিন" required type="file" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </form>
        <Link to="/pdf">
          <Button type="submit" className="mt-5">Submit </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Formfillup