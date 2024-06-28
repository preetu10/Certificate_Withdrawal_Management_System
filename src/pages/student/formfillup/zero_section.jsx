import React from 'react'
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
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



const Zero_section = () => {
    const profileFormSchema = z.object({

    });

    const defaultValues = {
    };
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
    return (
        <form onSubmit={handleSubmit} className="hind-siliguri-regular">
            <div className="mx-auto">
                <img className="mx-auto w-24 h-30" src="cu_logo.png" alt="" />
                <h1 className="text-xl font-bold mt-5">চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
                <div className="flex mx-auto justify-center mt-5 mb-5">
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

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="applicationDate">আবেদনপত্র গ্রহনের তারিখ</label>
                    <input type="text" id="applicationDate" name="applicationDate" placeholder="আবেদনপত্র গ্রহনের তারিখ" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="certificateIssueDate">সনদপত্র প্রদানের তারিখ</label>
                    <input type="text" id="certificateIssueDate" name="certificateIssueDate" placeholder="সনদপত্র প্রদানের তারিখ" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="fatherName">প্রভোস্ট / অধ্যক্ষ / বহিরাগত প্রার্থীর ক্ষেত্রে ছবি</label>
                    <input type="text" id="fatherName" name="fatherName" placeholder="ছবি" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="motherName">উস ফি</label>
                    <input type="text" id="motherName" name="motherName" placeholder="উস ফি" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="emergencyFee">জরুরী ফি</label>
                    <input type="text" id="emergencyFee" name="emergencyFee" placeholder="জরুরী ফি" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="englishTemporaryFee">ইংরেজিতে সাময়িক সনদ ফি</label>
                    <input type="text" id="englishTemporaryFee" name="englishTemporaryFee" placeholder="ইংরেজিতে সাময়িক সনদ ফি" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="banglaTemporaryFee">বাংলায় সাময়িক সনদ ফি</label>
                    <input type="text" id="banglaTemporaryFee" name="banglaTemporaryFee" placeholder="বাংলায় সাময়িক সনদ ফি" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="marksheetFee">মার্কশিট ফি</label>
                    <input type="text" id="marksheetFee" name="marksheetFee" placeholder="মার্কশিট ফি" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="bankAmount">ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা</label>
                    <input type="text" id="bankAmount" name="bankAmount" placeholder="ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="ddNumber">ডি-ডি/ পে অডার নং</label>
                    <input type="text" id="ddNumber" name="ddNumber" placeholder="ডি-ডি/ পে অডার নং" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="amount">টাকা</label>
                    <input type="text" id="amount" name="amount" placeholder="টাকা" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="bankName">অগ্রণী ব্যাংক / জনতা ব্যাংক</label>
                    <input type="text" id="bankName" name="bankName" placeholder="অগ্রণী ব্যাংক / জনতা ব্যাংক" required />
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:space-x-8">
                <div className="lg:w-[590px]">
                    <label htmlFor="signature">দায়িত্বপ্রাপ্ত কর্মকর্তার স্বাক্ষর</label>
                    <input type="text" id="signature" name="signature" placeholder="স্বাক্ষর" required />
                </div>
                <div className="lg:w-[590px]">
                    <label htmlFor="date">তারিখ</label>
                    <input type="text" id="date" name="date" placeholder="তারিখ" required />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Zero_section