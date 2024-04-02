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
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";



const Zero_section = () => {
    const profileFormSchema = z.object({

    });

    // This can come from your database or API.
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
        <Form {...form}>
            <div className="hind-siliguri-regular">
                <div className='mx-auto mt-10'>
                    <img className='mx-auto w-24 h-30' src="cu_logo.png" alt="" />
                    <h1 className='text-xl font-bold mt-5'>চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
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
                                        <Input placeholder="আবেদনপত্র গ্রহনের তারিখ" required />
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
                                        <Input placeholder="সনদপত্র প্রদানের তারিখ" required />
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
                                <Input placeholder="ছবি" required />
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
                                        <Input placeholder="মূল সনদ ফি" />
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
                                        <Input placeholder="জরুরী ফি" required />
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
                                        <Input placeholder="ইংরেজিতে সাময়িক সনদ ফি" required />
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
                                        <Input placeholder="বাংলায় সাময়িক সনদ ফি" required />
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
                                        <Input placeholder="মার্কশিট ফি" required />
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
                                <Input placeholder="ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা" required />
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
                                        <Input placeholder="ডি-ডি/ পে অডার নং" required />
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
                                        <Input placeholder="টাকা" required />
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
                                        <Input placeholder="তারিখ" required />
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
                                        <Input placeholder="অগ্রণী ব্যাংক / জনতা ব্যাংক" required />
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
                <Button type="submit">Go to next button</Button>
            </form>
        </Form>
    )
}

export default Zero_section