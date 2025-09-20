"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { Button } from "@/components/ui/button"

import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Input } from '@/components/ui/input';
import { RegisterSchema, RegisterSchematype } from "@/schema/Register";


export default function Register() {
    const router = useRouter()
    const form = useForm<RegisterSchematype>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        resolver: zodResolver(RegisterSchema)
    });

    async function handleRegister(values: RegisterSchematype) {
        console.log(values);
        try {
            const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
            if (res.data.message === "success") {
                toast.success("Account created successfully 🎉", { position: "top-center", duration: 2000 });
                router.push('/Login')
            }
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Something went wrong", { position: "top-center", duration: 3000 });
        }
    }

    return <>



        <div className="w-1/2 mx-auto my-12">
            <h1 className="text-3xl text-center font-bold my-4 text-green-600">Register Now</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleRegister)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email </FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password </FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rePassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>RePassword </FormLabel>
                                <FormControl>
                                    <Input type='Password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone </FormLabel>
                                <FormControl>
                                    <Input type='tel' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="mt-4 cursor-pointer w-full bg-green-600" type="submit">Register Now</Button>
                </form>
            </Form>
        </div>
    </>
}



