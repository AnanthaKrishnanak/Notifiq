import React from "react"
import MaxWidthWrapper from "./max-width-wrapper"
import Link from "next/link"
import { BRAND_NAME } from "../constants"

export const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop:blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center h-16">
          <Link href="/" className="font-bold">
            {BRAND_NAME}
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
