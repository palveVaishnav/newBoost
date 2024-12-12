"use client"
import { Menu } from "@/components/Menu";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FeatureCards from "@/components/FeatureCards";
import Partners from "@/components/Partners";
import Lenis from 'lenis'
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/SecondFeatures";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <div
      className="h-auto mt-0 mb-40"
    >
      <Menu />
      <HeroSection />
      <Partners />
      <Banner />
      <FeatureCards />
      <Features />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}