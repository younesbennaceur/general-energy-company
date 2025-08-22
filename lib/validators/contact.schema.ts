import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    from: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string({
        required_error: "Please select a subject.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})