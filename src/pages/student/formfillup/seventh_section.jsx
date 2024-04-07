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


const Seventh_Section = () => {
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                    control={form.control}
                    name=""
                    render={({ field }) => (
                        <FormItem>
                            <FormDescription>
                            ৬. মিলিটারি সাইন্স/ সার্টিফিকেট কোর্স /
       ডিপ্লোমা কোর্স /এম.এফ. পরীক্ষা/ ডিপ্লোমা চিকিৎসা বিজ্ঞান
                            </FormDescription>
                            <FormLabel>পরীক্ষার নাম</FormLabel>
                            <FormControl>
                                <Input placeholder="পরীক্ষার নাম" required />
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
                                <Input placeholder=" রোল নং"required />
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
                                <Input placeholder="পরীক্ষার বৎসর"required />
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
                                <Input placeholder="রেজিস্ট্রেশন নং"required />
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
                                <Input placeholder="শিক্ষাবর্ষ" required/>
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
                                <Input placeholder="ফলাফল" required/>
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
                                <Input placeholder="সনদপত্র নং" required/>
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
                                <Input placeholder="হল/কলেজ/ইনস্টিটিউট" required/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );

}

export default Seventh_Section