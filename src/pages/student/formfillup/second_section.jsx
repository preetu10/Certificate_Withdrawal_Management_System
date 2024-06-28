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


const Second_Section = () => {
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
                                <Input placeholder="কলেজের নাম/কেন্দ্রের নাম"  />
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
                                    <FormLabel> রোল নং</FormLabel>
                                    <FormControl>
                                        <Input placeholder=" রোল নং"  />
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
                                    <FormLabel>প্রাপ্ত বিভাগ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="প্রাপ্ত বিভাগ"  />
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
                                        <Input placeholder="রেজিস্ট্রেশন নং"  />
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
                                    <FormLabel>সম্পুরক পাস হলে অনুষ্ঠিত মাস ও বৎসর</FormLabel>
                                    <FormControl>
                                        <Input placeholder="মাস ও বৎসর"  />
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
                                        <Input placeholder=" রোল নং"  />
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

export default Second_Section