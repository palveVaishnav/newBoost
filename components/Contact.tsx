import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Contact() {
    const bannerContainer = useRef(null);
    const bannerVisible = useInView(bannerContainer);

    return (
        <div className="w-full px-4 md:py-16 mb-10">
            <Card className="max-w-6xl mx-auto bg-[#00ffd1]/50 border-gray-800 overflow-hidden relative md:px-20 md:py-16" ref={bannerContainer}>
                <div className="absolute inset-0 bg-[#00ffd1]/10 blur-3xl" />
                {bannerVisible &&
                    <motion.div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                        initial={{
                            x: -60,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-mono uppercase">
                                Ready to Join ?
                            </h2>
                            <p className="text-black max-w-xl">
                                Get in touch with our team to learn about your savings potential or ask us anything you&apos;d like!
                            </p>
                        </div>

                        <motion.div className="flex flex-col sm:flex-row gap-4"
                            initial={{
                                x: -30,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 1,
                            }}

                        >
                            <Button
                                variant='default'
                                className=""
                            >
                                GET STARTED
                            </Button>
                            <Button
                                variant='outline'
                                className="hover:bg-primary bg-inherit border-black hover:text-white group transition-all ease-in-out 2s"
                            >
                                <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-2 transition-all ease-in-out 2s" />
                                BOOK A DEMO
                            </Button>
                        </motion.div>
                    </motion.div>
                }
            </Card>
        </div>
    )
}
