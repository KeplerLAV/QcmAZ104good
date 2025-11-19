"use client";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border p-4 bg-white dark:bg-neutral-900 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
