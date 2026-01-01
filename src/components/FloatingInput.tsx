import { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const FloatingInput = ({ label, type = "text", required = false, value, onChange }: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isActive
            ? "top-1 text-xs text-popx-purple"
            : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
        }`}
      >
        {label}
        {required && <span className="text-popx-purple ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full h-12 pt-4 pb-1 px-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-popx-purple"
      />
    </div>
  );
};

export default FloatingInput;
