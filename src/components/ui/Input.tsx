import { LucideIcon } from "lucide-react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  Icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  ...props
}: InputProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 
          border border-gray-300 rounded-lg 
          text-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${Icon && iconPosition === "left" ? "pl-10" : ""}
          ${Icon && iconPosition === "right" ? "pr-10" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : ""}
        `}
        {...props}
      />

      {Icon && iconPosition === "left" && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      )}

      {Icon && iconPosition === "right" && (
        <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      )}
    </div>
  );
}

// USUAGE

// Basic input
// {
/* <Input placeholder="Enter text..." />

// With search icon on left
<Input 
  placeholder="Search restaurant..." 
  Icon={Search} 
  className="sm:w-80"
/>

// With icon on right
<Input 
  placeholder="Search..." 
  Icon={Search} 
  iconPosition="right"
/>

// Disabled state
<Input 
  placeholder="Disabled" 
  disabled={true}
/>

// With value and onChange (for controlled inputs)
<Input 
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search..."
/> */
// }
