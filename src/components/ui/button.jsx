import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  rounded = false,
  className,
  ...props
}) {
  const baseStyles = `inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 disabled:pointer-events-none disabled:opacity-50 ${rounded ? "rounded-full" : ""}`;

  const variantStyles = {
    primary:
      "bg-button text-button-text border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
    secondary: "bg-button-secondary text-secondary ring-secondary",
    neutral:
      "bg-background text-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
    custom:
      "bg-slate-900 border-slate-900 text-white hover:enabled:bg-slate-800 disabled:opacity-60",
  };

  const sizeStyles = {
    primary: "h-10 px-3 py-2",
    small: "h-9 px-2 py-2",
    medium: "h-10 px-4 py-2",
    large: "h-11 px-6 py-3",
    custom: "px-3 py-2",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}
