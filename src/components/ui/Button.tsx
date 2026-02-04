import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  Icon?: LucideIcon;
  variant?: "primary" | "outline" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  Icon,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  // Variant styles - simple and clear
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer",
    danger:
      "border border-gray-300 text-red-600 hover:bg-gray-50 cursor-pointer",
    success:
      "border border-gray-300 text-green-600 hover:bg-gray-50 cursor-pointer",
  };

  // Size styles - simple and clear
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 
        rounded-lg font-medium transition 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
