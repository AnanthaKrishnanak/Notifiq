import React from "react"
import { ArrowRight } from "lucide-react"

import MaxWidthWrapper from "@/app/components/max-width-wrapper"
import { Heading } from "@/app/components/heading"
import { BRAND_NAME } from "@/app/constants"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto flex flex-col gap-8 items-center text-center">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights</span>
                <br />
                <span className=" from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                  Delivered to your integration
                </span>
              </Heading>
            </div>
            <p className="text-sm">
              {BRAND_NAME} is the easiest way to monitor your application. Get
              instant notification for any events
            </p>
            <Button>
              Get started <ArrowRight />
            </Button>
            <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
              <Image
                src="/placeholder.svg"
                fill
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
