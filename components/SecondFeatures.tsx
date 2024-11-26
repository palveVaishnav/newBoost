import { useRef } from "react";
import { Card } from "./ui/card";
import { motion, useInView } from 'framer-motion';

export default function Features() {
    const features = [
        {
            number: "01",
            title: "IMMEDIATE SAVINGS",
            description: "Generate 40% or more of cost savings with a few clicks.",
            icon: (
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 32C8 18.745 18.745 8 32 8" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="32" cy="32" r="6" fill="#D8B4FE" />
                </svg>
            )
        },
        {
            number: "02",
            title: "NO CONTRACTS",
            description: "North operates with monthly flexibility. Cancel anytime.",
            icon: (
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="24" width="40" height="16" rx="8" stroke="#E9D5FF" strokeWidth="2" />
                    <circle cx="44" cy="32" r="6" fill="#D8B4FE" />
                </svg>
            )
        },
        {
            number: "03",
            title: "FULLY AUTOMATED",
            description: "Spend zero time analyzing your cloud FinOps posture.",
            icon: (
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 42C20 32 28 52 36 22C44 12 52 32" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="36" cy="22" r="6" fill="#D8B4FE" />
                </svg>
            )
        },
        {
            number: "04",
            title: "WILDLY SECURE",
            description: "North can't read sensitive data nor make any infrastructure changes.",
            icon: (
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="24" width="32" height="24" rx="4" stroke="#E9D5FF" strokeWidth="2" />
                    <circle cx="32" cy="36" r="2" fill="#D8B4FE" />
                </svg>
            )
        }
    ]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <div className="w-full max-w-6xl mx-auto p-8 flex items-center flex-col min-h-screen justify-center">
            <div className="text-center items-center max-w-xl space-y-4 gap-5"
                ref={ref}
            >
                {isInView &&
                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <span
                            className="text-2xl md:text-4xl font-mono font-medium mb-8"
                        >
                            EFFORTLESS COST SAVINGS WITH ENTERPRISE GRADE SECURITY
                        </span>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            North automates your full cost savings & financial operations in the cloud. Enjoy the deepest savings in the AWS & Google Cloud ecosystem while retaining on-demand like flexibility. We work with some of the most security sensitive companies in the world, and built a proprietary platform for discount sharing that lowers your costs while keeping your cloud systems secure at all times.
                        </p>
                    </motion.div>
                }
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {isInView && features.map((feature, index) => (
                    <motion.div key={index}
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: 'spring',
                            delay: 0.5 * index,
                        }}
                    >
                        <Card
                            className="p-6 flex flex-col items-center text-center border border-gray-200"
                        >
                            {feature.icon}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-500">{feature.number}.</p>
                                    <h3 className="font-mono text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
