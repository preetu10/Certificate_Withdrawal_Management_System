"use client";
import React from 'react'

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
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";


const Third_Section = () => {
    const profileFormSchema = z.object({

    });

    // This can come from your database or API.
    const defaultValues = {
        bio: "I own a computer.",
        urls: [
            { value: "https://shadcn.com" },
            { value: "http://twitter.com/shadcn" },
        ],
    };
    const form = useForm({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 hind-siliguri-regular">
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
                                <Input placeholder="১ম বর্ষ/১ম প্রফেশনাল /বিষয়"  />
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
                                <Input placeholder="হল/কলেজ"  />
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
                                        <Input placeholder="পরীক্ষার নাম"  />
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
                                        <Input placeholder="পরীক্ষার বৎসর"  />
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
"  />
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
                                        <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং"  />
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
                                        <Input placeholder="শিক্ষাবর্ষ"  />
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
                                        <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ "  />
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
                                <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর"  />
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
                                <Input placeholder="২য় বর্ষ/২য় প্রফেশনাল/বিষয়"  />
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
                                        <Input placeholder="হল/কলেজ"  />
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
                                        <Input placeholder="পরীক্ষার নাম"  />
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
                                        <Input placeholder="পরীক্ষার বৎসর"  />
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
"  />
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
                                        <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং"  />
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
                                        <Input placeholder="শিক্ষাবর্ষ"  />
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
                                        <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ "  />
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
                                        <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর"  />
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
                                <Input placeholder="৩য় বর্ষ/৩য় প্রফেশনাল/বিষয়"  />
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
                                        <Input placeholder="হল/কলেজ"  />
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
                                        <Input placeholder="পরীক্ষার নাম"  />
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
                                        <Input placeholder="পরীক্ষার বৎসর"  />
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
"  />
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
                                        <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং"  />
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
                                        <Input placeholder="শিক্ষাবর্ষ"  />
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
                                        <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ "  />
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
                                        <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর"  />
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
                                <Input placeholder="৪র্থ বর্ষ/৪র্থ প্রফেশনাল/বিষয়"  />
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
                                        <Input placeholder="হল/কলেজ"  />
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
                                        <Input placeholder="পরীক্ষার নাম"  />
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
                                        <Input placeholder="পরীক্ষার বৎসর"  />
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
"  />
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
                                        <Input placeholder="রেজিস্ট্রেশন নং/আই. ডি . নং"  />
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
                                        <Input placeholder="শিক্ষাবর্ষ"  />
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
                                        <Input placeholder="প্রাপ্ত শ্রেণী/জিপিএ "  />
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
                                        <Input placeholder="পরীক্ষা অনুষ্ঠিত মাস ও বৎসর"  />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </form>
        </Form>
    );

}

export default Third_Section