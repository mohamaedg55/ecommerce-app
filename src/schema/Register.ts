import { z } from "zod"


export const RegisterSchema = z.object({
    name: z
        .string()
        .nonempty("Your name is required to continue")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be less than 50 characters"),

    email: z.email()
        .nonempty("Your email is required to continue"),

    password: z.string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be less than 20 characters"),

    rePassword: z.string().nonempty("Password is required"),

    phone: z.string()
        .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, "Invalid Egyptian phone number")
})
    .refine((object) => object.password === object.rePassword, {
        message: "Passwords do not match !!",
        path: ["rePassword"],
    })


export type RegisterSchematype = z.infer<typeof RegisterSchema>