import { z } from "astro/zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name required." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
