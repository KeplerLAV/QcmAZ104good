"use client";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "default",
  size = "sm",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-md font-medium transition-all focus:outline-none inline-flex items-center justify-center";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
