import { motion } from 'framer-motion';
import { Globe } from './Globe';

export default function HeroSection() {
    return (
        <section
            className="w-full text-center items-center lg:text-left lg:items-start flex lg:px-20 flex-col min-h-screen justify-center gap-10 relative overflow-x-clip px-4"
        >
            <div
                className="flex flex-col"
            >
                <div
                    className="md:text-xl"
                >{"Humanless cloud optimization".split(" ").map((el, idx) => (
                    <motion.span
                        key={idx}
                        initial={{
                            opacity: 0,
                            scale: 2,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            type: 'spring',
                            delay: 0.1 * idx,
                            duration: 4,
                        }}
                    >
                        {el}{" "}
                    </motion.span>
                ))}</div>

                <div
                    className="text-[2em] md:text-[4em] uppercase max-w-2xl px-4"
                >{"Making Cloud Cheaper for you".split("").map((el, idx) => (
                    <motion.span
                        key={idx}
                        initial={{
                            opacity: 0,
                            scale: 1.3,
                            filter: "blur(5px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            type: 'spring',
                            delay: 0.1 * idx,
                            duration: 2,
                        }}
                    >
                        {el}
                    </motion.span>
                ))}
                </div>
            </div>
            <motion.span
                initial={{
                    translateX: -60,
                    opacity: 0,
                    filter: "blur(2px)",
                }}
                animate={{
                    translateX: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 2,
                }}
                className="px-2"
            >
                Cut your cloud bill by up to 50% with our enterprise grade AI-driven automation.<br />
                No risk, no contracts, and no technical work required.
            </motion.span>

            <motion.button
                className="border w-fit md:px-8  px-4 py-2 rounded-md bg-[#00ffd1] hover:bg-[#00ffd1] text-black text-lg font-semibold"
                initial={{
                    translateX: -60,
                    opacity: 0,
                    filter: "blur(2px)",
                }}
                animate={{
                    translateX: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 2,
                }}
                whileHover={{
                    y: -4,
                    transition: {
                        duration: 0.1,
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                    }
                }}
            >
                Start Saving
            </motion.button>

            <div className="absolute lg:-right-96 -z-50 top-40 w-full h-[150vh] border">
                <Globe />
            </div>
        </section>
    )
}