import React, { HTMLAttributes } from "react"

import { cn } from "@/utils"

interface HeadingsProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export const Heading= ({ children, className, ...props }: HeadingsProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
