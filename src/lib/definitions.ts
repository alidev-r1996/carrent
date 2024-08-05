import { LoginSchema } from "@/constants/constant";
import { z } from "zod";
import { FormState, UseFormRegister } from "react-hook-form";

export type CarCardProps = {
  id: number | string;
  name: string;
  type: string;
  img: string;
  fuel: string;
  steering: string;
  capacity: string;
  price: number | string;
  discount: number | string;
  isLike: boolean;
  recent: boolean;
  recommend: boolean;
};

export type CarListProps = {
  title: string;
  cars: CarCardProps[];
};

export type LoginPrps = {
  setStep: React.Dispatch<boolean>;
  step: boolean;
};

export type formFields = z.infer<typeof LoginSchema>;

export type InputTextProps = {
  type: string;
  name: "email" | "name" | "password";
  children: React.ReactNode;
  label: string;
  register: UseFormRegister<{ name?: string; email: string; password: string }>;
  formState: FormState<{ name?: string; email: string; password: string }>;
};

export type CommentProps = {
  comment: {
    avatar: string;
    author: string;
    expertise: string;
    date: string;
    rate: number;
    text: string;
  };
};
