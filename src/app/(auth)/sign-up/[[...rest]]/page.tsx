"use client"

import React from "react"
import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="w-full flex-1 flex items-center justify-center bg-white">
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
