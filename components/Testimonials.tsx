import { useRef } from "react";
import { useInView, motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "./ui/card";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Name 1",
            title: "Position",
            company: "Company",
            companyLogo: "/client.svg",
            avatar: "/profile",
            quote: "With North we get the savings coverage we want without being locked in for 3 years. It's so easy scaling up to optimize discounts and we feel safe having the option to also scale down.",
            savings: "39% Saved"
        },
        {
            name: "Name 2",
            title: "Position",
            company: "Company",
            companyLogo: "/client.svg",
            avatar: "/profile",
            quote: "With North we get the savings coverage we want without being locked in for 3 years. It's so easy scaling up to optimize discounts and we feel safe having the option to also scale down.",
            savings: "39% Saved"
        }, {
            name: "Name 3",
            title: "Position",
            company: "Company",
            companyLogo: "/client.svg",
            avatar: "/profile",
            quote: "With North we get the savings coverage we want without being locked in for 3 years. It's so easy scaling up to optimize discounts and we feel safe having the option to also scale down.",
            savings: "39% Saved"
        }, {
            name: "Name 4",
            title: "Position",
            company: "Company",
            companyLogo: "/client.svg",
            avatar: "/profile",
            quote: "With North we get the savings coverage we want without being locked in for 3 years. It's so easy scaling up to optimize discounts and we feel safe having the option to also scale down.",
            savings: "39% Saved"
        }, {
            name: "Name 5",
            title: "Position",
            company: "Company",
            companyLogo: "/client.svg",
            avatar: "/profile",
            quote: "With North we get the savings coverage we want without being locked in for 3 years. It's so easy scaling up to optimize discounts and we feel safe having the option to also scale down.",
            savings: "39% Saved"
        },
    ]

    const ref = useRef(null);
    const cardContainer = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cardsInView = useInView(ref)
    return (
        <div className="w-full px-4 py-16 md:py-24 flex flex-col justify-center">
            <div className="container mx-auto" ref={ref}>
                {isInView &&
                    <div className="mb-4 space-y-2">
                        <motion.h3 className="text-purple-400 text-sm font-medium"
                            initial={{
                                x: 20,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >WHAT THEY SAY</motion.h3>
                        <motion.h2 className="text-3xl md:text-5xl text-white font-mono"
                            initial={{
                                x: 20,
                                opacity: 0,
                            }}
                            animate={{
                                x: 5,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                            }}
                        >OUR CUSTOMERS LOVE US</motion.h2>
                    </div>
                }
                <Carousel className="w-full md:p-10" ref={cardContainer}>
                    <CarouselContent className="md:w-1/2 md:p-10">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem className="w-1/2" key={index}>
                                {cardsInView &&
                                    <Card className="bg-gray-900 border-gray-800 p-8">
                                        <motion.div
                                            initial={{
                                                x: 40,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.3 * index,
                                            }}
                                        >
                                            <div className="flex items-start gap-6">
                                                <Image
                                                    src={testimonial.avatar + ((index + 1) % 7) + ".png"}
                                                    alt={testimonial.name}
                                                    width={80}
                                                    height={80}
                                                    className="min-w-max rounded-full overflow-hidden"
                                                />
                                                <div className="space-y-4">
                                                    <div>
                                                        <h3 className="text-xl text-white font-medium">{testimonial.name}</h3>
                                                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                                                    </div>
                                                    <Image
                                                        src={testimonial.companyLogo}
                                                        alt={testimonial.company}
                                                        width={120}
                                                        height={40}
                                                        className="h-8 w-auto"
                                                    />
                                                </div>
                                            </div>
                                            <blockquote className="mt-6 text-lg text-gray-300">
                                                {testimonial.quote}
                                            </blockquote>
                                            <p className="mt-6 text-emerald-400 font-medium">{testimonial.savings}</p>
                                        </motion.div>
                                    </Card>
                                }
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600" />
                    <CarouselNext className="right-4 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600" />
                </Carousel>
            </div>
        </div >
    )
}
