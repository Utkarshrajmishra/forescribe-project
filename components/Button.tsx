import React from "react";

const variants = {
  primary: "bg-[#8B3DFF] hover:bg-[#7D27F5]",
  secondary: "bg-[#4A4A4A] hover:bg-[#424242] ",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={`font-poppins font-extralight flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-3 hover:scale-102 text-white ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
