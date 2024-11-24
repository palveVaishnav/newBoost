"use client"
import { NavMenu } from "@/components/Menu";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Home() {
  return (
    <div
      className="h-auto mt-0 mb-40"
    >
      <NavMenu />
      <HeroSection />
      <TrustedBy />
      <Banner />
      <Features />
      <FeaturesTwo />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Footer() {
  const navigationLinks = {
    platform: [
      { name: "AWS", href: "#" },
      { name: "GCP", href: "#" },
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Company", href: "#" },
      { name: "Blog & Resources", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Featured Customers", href: "#" },
      { name: "Venture Partnerships", href: "#" },
    ],
    legal: [
      { name: "Privacy policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Settings", href: "#" },
      { name: "Media Brand Kit", href: "#" },
      { name: "Release Notes", href: "#" },
      { name: "Security", href: "#" },
      { name: "Events", href: "#" },
    ],
  }

  return (
    <footer className="w-full px-4 py-12 md:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logo and Address Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="North"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-sm text-gray-400">
              A Product from 100xDevs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              {navigationLinks.platform.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              {navigationLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2024 100xBoost Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Contact() {
  return (
    <div className="w-full px-4 py-16 md:py-24">
      <Card className="max-w-6xl mx-auto bg-gray-900/50 border-gray-800 overflow-hidden relative px-20 py-16">
        {/* Purple glow effect */}
        <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl text-white font-mono uppercase">
              Ready to Join ?
            </h2>
            <p className="text-gray-400 max-w-xl">
              Get in touch with our team to learn about your savings potential or ask us anything you&apos;d like!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="border-purple-500 hover:bg-purple-500/10 text-black hover:text-white"
            >
              GET STARTED
            </Button>
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

function FAQ() {

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

  const ref = useRef(null);
  const dikhRahaHai = useInView(ref);

  return (
    <div className="w-full px-4 py-16 md:py-24 relative overflow-hidden" ref={ref}>

      {dikhRahaHai &&
        <div className="container mx-auto relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-white font-mono mb-4">
              FAQS
            </h2>
            <p className="text-gray-400">
              Find answers to commonly asked questions about our product and services.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
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
              ))}
            </Accordion>
          </div>
        </div>}

    </div>
  )
}

function Testimonials() {
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
  const isInView = useInView(ref);

  return (
    <div className="w-full px-4 py-16 md:py-24">
      <div className="container mx-auto" ref={ref}>
        {isInView &&
          <>
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
            <Carousel className="w-full p-10">
              <CarouselContent className="w-1/2 p-10">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem className="w-1/2" key={index}>
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600" />
              <CarouselNext className="right-4 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600" />
            </Carousel>
          </>
        }
      </div>
    </div>
  )
}

function FeaturesTwo() {
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
  const isInView = useInView(ref);

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex items-center flex-col">
      <div className="text-center mb-16 items-center max-w-xl space-y-4"
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

function Features() {
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
  ]

  return (
    <section
      className="w-full p-20 grid gap-40 relative"
    >
      {FeatureList.map((feature, idx) => (
        <motion.div
          key={idx}
          className="flex items-center p-20 sticky top-40 rounded-xl bg-[#1e2125] border"
          initial={{}}
          animate={{}}
          transition={{}}
        >
          <div
            className="w-1/2 p-2"
          >
            <h2
              className="text-[3em]"
            >{feature.title}</h2>
            <p
              className="text-md text-gray-400"
            >{feature.description}</p>
          </div>
          <div
            className="w-1/2"
          >
            <Image
              src={feature.illustration}
              alt="NoCommitment"
              width={0}
              height={0}
              className="w-full max-h-96"
            />
          </div>
        </motion.div>

      ))}
    </section>
  )
}


function Banner() {
  const points = [
    {
      number: "01.",
      description:
        "Thousands of products and endless pricing programs can be confusing, leading to wasted expenses. On average, companies waste 30% or more on cloud spend because of financial mismanagement.",
    },
    {
      number: "02.",
      description:
        "Cloud architecture changes constantly as the business evolves. This drives financial inefficiency as vendor commitment based pricing programs limit your flexibility.",
    },
    {
      number: "03.",
      description:
        "Implementing healthy cloud accounting and FinOps practices traditionally demands significant engineering hours.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref);
  return (
    <div className="w-full p-4">
      <div className="relative bg-white rounded-3xl text-black h-88 flex overflow-hidden">
        {/* Decorative Elements */}
        <div className="h-full overflow-hidden">
          <Image
            src={"https://cdn.prod.website-files.com/665f27834e206c9660b3a626/6661b7e2cc9e612f00511849_half-orbit.svg"}
            width={0}
            height={0}
            alt="Circle svg"
            className="h-full w-60"
          />
        </div>
        {/* Content */}
        <div className=" w-full p-8 md:p-12 bg-red-0" ref={ref}>
          {isInView &&
            <>
              <motion.h2 className="text-[3em] font-mono font-medium mb-16 max-w-4xl"

                initial={{
                  y: 40,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 2
                }}
              >
                CLOUD FINANCE IS UNNECESSARILY COMPLICATED.
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {points.map((point, idx) => (
                  <motion.div key={idx} className="space-y-4"
                    initial={{
                      y: 40,
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 0.4 * idx,
                    }}
                  >
                    <hr />
                    <h3 className="text-[4em] font-mono text-gray-700">
                      {point.number}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          }
        </div>
      </div>

    </div>
  )
}

function TrustedBy() {
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
    <Card className="w-full p-8 bg-inherit border-none mb-40">
      <div className="container mx-auto g-orange-300">
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

function HeroSection() {
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
        className="border w-fit px-12 py-4 rounded-md"
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


