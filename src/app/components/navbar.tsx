"use client"
import React from "react"
import Link from "next/link"
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import MaxWidthWrapper from "@/app/components/max-width-wrapper"
import { BRAND_NAME } from "@/app/constants"

export const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop:blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center h-16">
          <Link href="/" className="font-bold">
            {BRAND_NAME}
          </Link>
          <div className="ml-auto flex items-center h-16 gap-8">
            <SignedIn>
              <SignOutButton>
                <Button size="sm" variant="ghost">
                  Sign out
                </Button>
              </SignOutButton>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1",
                })}
              >
                Dashboard
                <ArrowRight className="mla-1.5 size-4" />
              </Link>
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1",
                  variant: "ghost",
                })}
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1",
                })}
              >
                Sign Up <ArrowRight className="mla-1.5 size-4" />
              </Link>
            </SignedOut>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
