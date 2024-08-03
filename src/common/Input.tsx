import { InputTextProps } from "@/lib/definitions";
import { FC, ReactNode } from "react";

const InputText: FC<InputTextProps> = ({
  type,
  name,
  children,
  label,
  register,
  formState,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full mx-auto relative">
      <label
        htmlFor={name}
        className="w-4 h-4 text-slate-600 absolute top-2 left-1.5"
      >
        {children}
      </label>
      <input
        type={type}
        {...register(name)}
        id={name}
        placeholder={label}
        className="appearance-none dark:bg-slate-300 py-2 pl-7 placeholder:text-[10px] text-xs border-none focus:ring-0 focus:outline-none shadow-[1px_1px_3px_rgba(0,0,0,0.2)] focus:shadow-[inset_2px_1px_3px_rgba(0,0,0,0.2)] rounded"
      />
      {formState.errors && formState.errors[name] && (
        <p className="text-rose-500 pl-2 text-[10px]">
          {formState.errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default InputText;
