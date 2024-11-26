import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";
import { useInView, motion } from 'framer-motion';

export default function FAQ() {

    const faqs = [
        {
            question: "How does it work?",
            answer: "Our platform automatically analyzes your cloud usage patterns and implements cost-saving strategies while maintaining flexibility and security. We provide real-time optimization recommendations and automated implementation options."
        },
        {
            question: "Can't I buy savings plans from AWS?",
            answer: "While AWS does offer savings plans directly, our solution provides more flexibility and often deeper savings through our proprietary platform. We don't require long-term commitments and can adjust to your changing needs."
        },
        {
            question: "Are you guys just another RI broker?",
            answer: "No, we're much more than that. We're a comprehensive cloud financial operations platform that provides automated cost optimization, security controls, and flexible commitment terms that traditional RI brokers can't match."
        },
        {
            question: "What happens if I need to cancel my subscription?",
            answer: "You can cancel your subscription at any time with no penalties. We operate on a monthly basis, providing you with the flexibility to adjust or end your service as your needs change."
        },
        {
            question: "I have an EDP, does this complicate using North?",
            answer: "Not at all. North is designed to work seamlessly with Enterprise Discount Programs (EDPs). We can help you optimize your cloud costs while maintaining compliance with your existing enterprise agreements."
        }
    ]

    const faqContainer = useRef(null);
    const faqVisible = useInView(faqContainer);

    return (
        <div className="w-full px-4 py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto relative">
                <motion.div className="max-w-2xl mx-auto text-center mb-12"
                    initial={{
                        y: 40,
                        opacity: 0,
                        filter: 'blur(20px',
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                    }}
                >
                    <h2 className="text-3xl md:text-5xl text-white font-mono mb-4">
                        FAQS
                    </h2>
                    <p className="text-gray-400">
                        Find answers to commonly asked questions about our product and services.
                    </p>
                </motion.div>
                <div className="max-w-2xl mx-auto" ref={faqContainer}>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqVisible && faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    y: 30,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.4 * index,
                                }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border-gray-800 bg-gray-900/50 rounded-lg px-6"
                                >
                                    <AccordionTrigger className="text-white hover:text-white hover:no-underline py-6 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>

        </div>
    )
}
