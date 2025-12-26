import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#2F7FD7] hover:bg-[#4a9eff] text-white shadow-[0_0_20px_rgba(47,127,215,0.3)] hover:shadow-[0_0_30px_rgba(47,127,215,0.5)] border border-transparent",
    ghost: "bg-transparent hover:bg-white/10 text-white/90 hover:text-white border border-white/20",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;