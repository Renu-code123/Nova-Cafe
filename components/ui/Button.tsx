"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "px-4 py-2 text-xs tracking-wider",
      md: "px-6 py-3 text-xs tracking-widest",
      lg: "px-8 py-4 text-sm tracking-widest",
    };

    const variantStyles = {
      primary:
        "bg-[#F5EFE6] text-[#0C0B09] hover:bg-[#E5DCD0] active:scale-[0.98] border border-transparent shadow-sm",
      secondary:
        "bg-[#1A1815] text-[#F5EFE6] hover:bg-[#25211C] border border-[rgba(245,239,230,0.12)] active:scale-[0.98]",
      outline:
        "bg-transparent text-[#F5EFE6] hover:bg-[#F5EFE6]/5 border border-[rgba(245,239,230,0.2)] hover:border-[rgba(245,239,230,0.4)] active:scale-[0.98]",
      amber:
        "bg-[#C88242] text-[#0C0B09] font-medium hover:bg-[#DE9B5E] active:scale-[0.98] border border-transparent",
      ghost:
        "bg-transparent text-[#9E9589] hover:text-[#F5EFE6] p-0 active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "group relative inline-flex items-center justify-center font-sans uppercase transition-all duration-300 select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Processing...</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <span>{children}</span>
            {withArrow && (
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
