"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, X, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/gallery/gallery-1.png",
    "/gallery/gallery-3.png",
    "/gallery/gallery-5.png",
    "/gallery/gallery-10.png",
    "/gallery/gallery-14.png",
    "/gallery/gallery-20.png"
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center text-white">
        <Image src="/gallery/gallery-22.png" width={260} height={260} alt={siteConfig.name + " Logo – Forestry Mulching and Land Clearing in Blumenort Manitoba"} className="h-24 w-auto brightness-0 invert hover:opacity-80 transition-all" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
          <div className="flex items-center gap-4 mr-2">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <a href="#contact" className="px-5 py-2 bg-orange-600 hover:bg-orange-500 rounded-sm text-white transition-all">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-neutral-900/70 z-10" />

        {/* Hero Background */}
        <div className="absolute inset-0 bg-[url('/gallery/gallery-14.png')] bg-cover bg-center" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight uppercase"
          >
            We Clear. <br /> <span className="text-orange-500">You Create.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            Expert forestry mulching, lot clearing, land management, driveway installs, and certified septic installation for farms, developers, and rural homeowners in Blumenort and southeast Manitoba.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:border-orange-500 hover:text-orange-400 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all">
              Our Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        >
          <a href="#services" className="text-white/70 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Our <span className="text-orange-500">Expertise</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              We provide heavy-duty land preparation and specialized septic design to clear the path for your next project. Backed by industry certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Farms */}
            <div className="bg-neutral-800/50 border-r-2 border-b-2 border-neutral-700 hover:border-orange-500 transition-colors rounded-sm p-8 flex flex-col items-start overflow-hidden relative group">
              <div className="bg-orange-500/10 text-orange-400 p-3 rounded-sm mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Farms & Acreage</h3>
              <p className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">Forestry Mulching</p>
              <p className="text-neutral-400 leading-relaxed">
                Reclaim your acreage with eco-friendly forestry mulching in Manitoba. Professional agricultural land clearing, fence line clearing for agriculture, brush clearing, and land reclamation that turns overgrown land into usable space—without burn piles or hauling.
              </p>
            </div>

            {/* Service 2: Developers */}
            <div className="bg-neutral-800/50 border-r-2 border-b-2 border-neutral-700 hover:border-orange-500 transition-colors rounded-sm p-8 flex flex-col items-start overflow-hidden relative group">
              <div className="bg-orange-500/10 text-orange-400 p-3 rounded-sm mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Builders & Developers</h3>
              <p className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">Commercial & Residential Site Development</p>
              <p className="text-neutral-400 leading-relaxed">
                Clear the way for success. From raw land to a build-ready site in Manitoba. We handle lot clearing, land management, subdivision grading, fence line clearing, and right-of-way management for commercial projects and residential home builders.
              </p>
            </div>

            {/* Service 3: Home Owners */}
            <div className="bg-neutral-800/50 border-r-2 border-b-2 border-neutral-700 hover:border-orange-500 transition-colors rounded-sm p-8 flex flex-col items-start overflow-hidden relative group">
              <div className="bg-orange-500/10 text-orange-400 p-3 rounded-sm mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Home Owners</h3>
              <p className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">Culvert, Driveway & Septic Installs</p>
              <p className="text-neutral-400 leading-relaxed">
                Your property, perfected. Expert culvert installation, gravel driveway grading, and certified septic system design and installation for residential properties, acreages, and farms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <BeforeAfterSlider
        beforeImage="/gallery/before.jpg"
        afterImage="/gallery/after.jpg"
      />

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] border-l-4 border-b-4 border-orange-500 overflow-hidden shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-[url('/gallery/gallery-17.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-bold text-2xl tracking-tighter shadow-sm backdrop-blur-sm bg-black/30 p-4 rounded-sm uppercase border-l-4 border-orange-500">
              Velocity LTS
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-6">
              The <span className="text-orange-500">Velocity</span> Edge
            </h2>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Based in Blumenort, Manitoba, Velocity Land & Tree Services isn't your average dirt-moving company. We bring technical precision, deep industry knowledge, and heavy-duty capabilities to every job site across southeast Manitoba.
              </p>
              <div className="bg-neutral-800/80 p-6 rounded-sm border-l-4 border-orange-500">
                <h4 className="text-white font-bold text-xl mb-4">Certified Professionals</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300"><strong>Licensed Arborist</strong> – Expert tree health and forestry management.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300"><strong>12-Year Red Seal Electrician</strong> – Ensuring site safety and precision utility coordination.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300"><strong>Certified Septic Expert</strong> – Licensed system design and complete installations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Our <span className="text-orange-500">Work</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              See the precision and power of our equipment in action.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(src)}
                className="relative h-64 border-2 border-neutral-800 hover:border-orange-500 transition-colors overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Frequently <span className="text-orange-500">Asked</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Common questions about our forestry mulching, land clearing, and septic installation services in Manitoba.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-neutral-800/50 border border-neutral-700 rounded-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold text-lg hover:text-orange-400 transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-700 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-orange-600/5 blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Ready to <span className="text-orange-500">Break Ground?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Get in touch today for a free estimate on your land clearing, grading, or septic project.
          </p>

          <form className="bg-neutral-800/80 p-8 border-l-4 border-b-4 border-orange-500 shadow-xl max-w-2xl mx-auto text-left flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">First & Last Name</label>
                <input type="text" id="name" className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="(204) 555-0123" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Service Interested In</label>
              <select id="service" className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none">
                <option>Forestry Mulching & Land Clearing</option>
                <option>Site Development & Grading</option>
                <option>Septic Installation / Design</option>
                <option>Driveway Installation</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Project Details</label>
              <textarea id="message" rows={4} className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg py-4 rounded-sm mt-2 transition-all hover:shadow-[0_0_20px_rgba(2ea,88,12,0.4)] flex justify-center items-center gap-2">
              Get in Contact
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Image src="/gallery/gallery-22.png" width={220} height={80} alt={siteConfig.name + " – Forestry Mulching and Land Clearing in Blumenort Manitoba"} className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" />
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-neutral-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. <br className="md:hidden" /> {siteConfig.address.locality}, {siteConfig.address.region}. <span className="block mt-1 text-neutral-600 text-xs">Serving Steinbach, Niverville, Ste. Anne, Saint Malo & all of southeast Manitoba.</span>
          </div>
        </div>
      </footer>

      {/* Image Modal overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-video border border-neutral-800 shadow-2xl overflow-hidden rounded-sm cursor-default"
            >
              <Image src={selectedImage} alt="Gallery Expanded" fill className="object-contain bg-black" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
