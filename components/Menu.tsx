"use client";
import { motion } from 'framer-motion';
export function NavMenu() {
    return (
        <motion.div
            className="flex justify-between fixed top-0 w-full px-4 md:px-20 py-4 z-50 bg-gradient-to-t from-[#1e2125] to-[#0f1113]"
            initial={{
                y: -100,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                delay: 1,
                duration: 1,
            }}
        >
            <div
                className="text-lg md:text-xl"
            >
                <span>100xBoost</span>
            </div>
            <NavLinks />
            <div className="">
                <button
                    className="border px-2 py-1 md:px-4 md:py-2 rounded-md"
                >Start Saving</button>
            </div>
        </motion.div >
    )
}

export default function NavLinks() {
    return (
        <div
            className="hidden md:flex gap-4 border px-20 py-2 rounded-full"
        >
            <span>PARTNERS</span>
            <span>FEATURES</span>
            <span>PRIZING</span>
            <span>DOCS</span>
        </div>
    )
}

