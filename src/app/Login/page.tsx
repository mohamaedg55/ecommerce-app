"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { LoginSchema, LoginSchematype } from "@/schema/Login"


export default function Login() {
    const router = useRouter()
    const form = useForm<LoginSchematype>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(LoginSchema)
    });

    async function handleLogin(values: LoginSchematype) {
        console.log(values);
        try {
            const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
            if (res.data.message === "success") {
                toast.success("You Loged in  successfully 🎉", { position: "top-center", duration: 2000 });
                router.push('/Login')
            }
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Something went wrong", { position: "top-center", duration: 3000 });
        }
    }

    return (
        <div className="w-1/2 mx-auto my-12">
            <h1 className="text-3xl text-center font-bold my-4 text-green-600">Login Now</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)}>
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
                    <Button className="mt-4 cursor-pointer w-full bg-green-600">Login Now</Button>
                </form>
            </Form>
        </div>
    );
}



