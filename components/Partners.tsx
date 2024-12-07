import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { Card } from "./ui/card";
import { useRef } from "react";

export default function Partners() {
    const logos = [
        { name: "Radar", src: "/client.svg" },
        { name: "Apporchid", src: "/client.svg" },
        { name: "Veho", src: "/client.svg" },
        { name: "LOGILE", src: "/client.svg" },
        { name: "Miso", src: "/client.svg" },
        { name: "Brave", src: "/client.svg" },
        { name: "Artisight", src: "/client.svg" },
        { name: "Data Biologics", src: "/client.svg" },
        { name: "Inbox Health", src: "/client.svg" },
        { name: "Stay N Touch", src: "/client.svg" },
        { name: "Spring", src: "/client.svg" },
        { name: "Larky", src: "/client.svg" },
        { name: "BoomPop", src: "/client.svg" },
        { name: "Cartwheel", src: "/client.svg" },
        { name: "Atlas", src: "/client.svg" },
        { name: "Air", src: "/client.svg" },
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <Card className="w-full p-8 bg-inherit border-none md:mb-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
                    ref={ref}
                >
                    {isInView && logos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            className="w-full flex items-center justify-center group text-white"
                            initial={{
                                translateY: 20,
                                opacity: 0,
                                filter: "blur(5px)"
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                delay: 0.1 * idx,
                            }}
                        >
                            {/* <p>{logo.name}</p> */}
                            <Image
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                className="h-10 w-auto object-contain opacity-75 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                                width={0}
                                height={0}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
