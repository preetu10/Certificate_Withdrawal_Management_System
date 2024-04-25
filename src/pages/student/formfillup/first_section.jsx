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


const First_Section = () => {
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5 hind-siliguri-regular">
                <div className="lg:flex lg:justify-evenly lg:space-x-8">
                    <div className="lg:w-[590px]">
                        <FormField
                            control={form.control}
                            name=""
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>শিক্ষার্থীর নাম (বাংলায়)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="শিক্ষার্থীর নাম" required />
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
                                        <Input placeholder="নাম" required />
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
                                        <Input placeholder="পিতার নাম" required />
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
                                        <Input placeholder="নাম" required />
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
                                        <Input placeholder="মাতার নাম" required />
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
                                        <Input placeholder="নাম" required />
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
                                        <Input placeholder="গ্রাম" required />
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
                                        <Input placeholder="পোস্ট" required />
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
                                        <Input placeholder="থানা" required />
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
                                        <Input placeholder="জেলা" required />
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
                                <Input placeholder="ঠিকানা" required />
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
                                <Input placeholder="মোবাইল নং" required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );

}

export default First_Section