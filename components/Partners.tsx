import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { Card } from "./ui/card";
import { useRef } from "react";

export default function Partners() {
    const logos = [
        { name: "Radar", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-5-1536x960.png" },
        { name: "Apporchid", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-4-1536x960.png" },
        { name: "Veho", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-2-1536x960.png" },
        { name: "LOGILE", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-3-1536x960.png" },
        { name: "Spring", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-12-1536x960.png" },
        { name: "Larky", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-13-1536x960.png" },
        { name: "BoomPop", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-14-1536x960.png" },
        { name: "Cartwheel", src: "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-19-1536x960.png" },
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
                            className="w-full flex items-center justify-center group"
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
                                // mix-blend not working !!!?
                                className="h-16 w-40 opacity-75 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 rounded-xl mix-blend-multiply md:w-auto md:h-28"
                                width={130}
                                height={130}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
