"use client";

import { HeroSection } from "@/components/hero-section";
import { CourseDetails } from "@/components/course-details";
import { PricingSection } from "@/components/pricing-section";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  console.log("Home page rendering");
  
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="details">
        <CourseDetails />
      </div>
      <PricingSection />
      <ContactForm />
    </main>
  );
}
