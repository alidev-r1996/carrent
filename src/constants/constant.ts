import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email({ message: "format is wrong, try user@example.com" }),
  password: z.string({
    required_error: "password is required",
    invalid_type_error: "password must be a string",
  }).min(8),
  name: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .min(4)
    .optional(),
});


export const footerTitle = {
  About: ["how it works", "featured", "partnership", "bussiness relation"],
  Community: ["events", "blog", "podcast", "invite a friend"],
  Social: ["Discord", "Instagram", "Twitter", "Facebook"],
};


