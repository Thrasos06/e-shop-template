import type { InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({
  label,
  id,
  name,
  className = "",
  ...otherProps
}: FormInputProps) => {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        id={inputId}
        name={name}
        {...otherProps}
        className={`
          w-full
          rounded-lg
          border border-slate-200
          bg-white
          px-4 py-3
          text-sm text-slate-950
          outline-none
          transition
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-slate-950
          focus:ring-1
          focus:ring-slate-950
          ${className}
        `}
      />
    </div>
  );
};

export default FormInput;
