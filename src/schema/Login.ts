import { z } from "zod"


export const LoginSchema = z.object({

    email: z.email()
        .nonempty("Your email is required to continue"),

    password: z.string()
        .nonempty("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be less than 20 characters"),

})

export type LoginSchematype = z.infer<typeof LoginSchema>