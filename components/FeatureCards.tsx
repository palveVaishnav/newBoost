import { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from "next/image";

export default function FeatureCards() {
    const FeatureList = [
        {
            title: "No Commitment",
            description: "Get started with no upfront costs or long-term contracts. IOOxBoost is designed to deliver value quickly, with immediate savings from the moment you connect your cloud account.",
            illustration: "/groupbuying.svg",
            bgcolor: '#1f2937',
        },
        {
            title: "Smart Cloud Insights",
            description: "some tagline here, and a very small description here as well approx 2 - lines at max.",
            illustration: "/smartinsights.svg",
            bgcolor: '#34455d',
        },
        {
            title: "Automated Resource Optimization",
            description: "some tagline here, and a very small description here as well approx 2 - lines at max.",
            illustration: "/automated.svg",
            bgcolor: "#1f2937",
        },
        {
            title: "Smart Cloud Insights",
            description: "some tagline here, and a very small description here as well approx 2 - lines at max.",
            illustration: "/smartinsights.svg",
            bgcolor: '#34455d',
        },
        {
            title: "Automated Resource Optimization",
            description: "some tagline here, and a very small description here as well approx 2 - lines at max.",
            illustration: "/automated.svg",
            bgcolor: "#1f2937",
        },
    ]

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section
            ref={container}
            className="w-full px-4 md:px-20 grid gap-40 relative"
        >
            {FeatureList.map((feature, idx) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const targetScale = 1 - ((FeatureList.length - idx) * 0.05);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

                return (
                    <motion.div
                        key={idx}
                        className="h-screen flex justify-center items-center"
                        style={{
                            position: 'sticky',
                            top: 40 * idx,
                            scale,
                        }}
                    >
                        <motion.div
                            className={`block sm:flex justify-items-center items-center p-5 sm:p-10 md:p-20 rounded-xl bg-[#1e2125] border h-fit`}
                            initial={{
                                top: 80 * idx,
                            }}
                            animate={{}}
                            transition={{}}
                        >
                            <div className="w-1/2 p-2">
                                <h2 className="text-[2em] md:text-[3em]">{feature.title}</h2>
                                <p className="text-md text-gray-400 hidden sm:block">{feature.description}</p>
                            </div>
                            <div className="w-1/2">
                                <Image
                                    src={feature.illustration}
                                    alt={feature.title}
                                    width={0}
                                    height={0}
                                    className="w-full max-h-96"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </section>
    )
}
