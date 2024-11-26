import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            className="w-full text-left flex px-20 flex-col min-h-screen justify-center gap-10 relative"
        >
            <div
                className="flex flex-col"
            >
                <div
                    className="text-xl"
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
                    className="text-[4em] uppercase max-w-2xl"
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
            >
                Cut your cloud bill by up to 50% with our enterprise grade AI-driven automation.<br />
                No risk, no contracts, and no technical work required.
            </motion.span>
            <motion.button
                className="border w-fit px-12 py-4 rounded-md bg-purple-700 hover:bg-purple-900 text-lg font-semibold"
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
                    y: -10,
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
            <motion.img
                src={'hero1.svg'}
                alt=""
                width={0}
                height={0}
                className="w-96 h-full absolute right-40"
                initial={{
                    translateX: 60,
                    opacity: 0,
                }}
                animate={{
                    translateX: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
            />
        </section>
    )
}
