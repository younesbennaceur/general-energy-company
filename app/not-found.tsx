"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from 'react'
import { GradientText } from "@/components/ui/gradient-text";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'

export default function NotFoundPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center justify-center py-24">
                    <div>
                        <GradientText className='font-bold text-7xl'>404</GradientText>
                    </div>

                    <p className="font-bold mt-8 mb-4 text-center heading-3">
                        Sorry, Page not found!
                    </p>

                    <p className="mb-12 text-center">
                        You can go back to the homepage or browse other sections
                        to find what you need.
                    </p>

                    <div>
                        <Button variant="primary" asChild>
                            <Link href="/">
                                <Image src="/assets/arrow-turn-left.svg" alt="arrow-turn-left" width={24} height={24} />
                                Back to Home
                </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Container type="intrinsic" className="bg-accent">
                <Footer />
            </Container>
        </>
    )
}
