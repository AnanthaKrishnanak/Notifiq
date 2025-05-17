"use client"

import React from "react"
import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}
