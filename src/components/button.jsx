import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  rounded = false,
  className,
  ...props
}) {
  const sizeStyles = {
    primary: "px-3 py-2 font-semibold",
    small: "px-2 py-2 text-sm",
    medium: "px-4 py-2 text-base font-semibold",
    large: "px-6 py-3 text-lg font-semibold",
    custom: "px-3 py-2 font-semibold",
  };

  const baseStyles = `rounded-md hover:bg-opacity-90 border transition-all hover:shadow-lg shadow-sm focus:outline-none focus:shadow-outline ${rounded ? "rounded-full" : ""}`;
  const variantStyles = {
    primary: "bg-button text-button-text",
    secondary: "bg-button-secondary text-secondary ring-secondary ring-2",
    custom:
      "bg-slate-900 border-slate-900 text-white hover:enabled:bg-slate-800 disabled:opacity-60",
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}
