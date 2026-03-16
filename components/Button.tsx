import React from "react";

const variants = {
  primary: "bg-[#8B3DFF] flex  items-center justify-center gap-2  w-full flex justify-center rounded-lg px-3 py-3 hover:opacity-90 text-white",
  secondary: "bg-[#4A4A4A] flex items-center gap-2 w-full flex justify-center rounded-lg px-3 py-3 hover:opacity-90 text-white",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; 
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;