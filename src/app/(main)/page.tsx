"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CERTIFICATE_TYPES, formatCurrency } from "@/lib/utils";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function StatCounter({ target, suffix = "", prefix = "", decimals = 0 }: { target: number; suffix?: string; prefix?: string; decimals?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    prefix + latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }) + suffix
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function HomePage() {
  const stats = [
    { target: 10000, suffix: "+", label: "Certificates Issued" },
    { target: 500, suffix: "+", label: "Verified Doctors" },
    { target: 30, suffix: " Min", label: "Average Delivery" },
    { target: 4.9, decimals: 1, suffix: "/5", label: "Customer Rating" },
  ];

  const howItWorks = [
    { step: 1, title: "Select Certificate", description: "Choose the type of certificate you need", icon: "📋" },
    { step: 2, title: "Fill Details", description: "Complete your medical information form", icon: "✍️" },
    { step: 3, title: "Make Payment", description: "Secure payment via Razorpay", icon: "💳" },
    { step: 4, title: "Consultation", description: "Brief video call with registered doctor", icon: "👨‍⚕️" },
    { step: 5, title: "Get Certificate", description: "Receive verified certificate instantly", icon: "📜" },
  ];

  return (
    <>
      <section className="relative min-h-[100svh] lg:min-h-screen flex items-center gradient-hero pt-24 lg:pt-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 lg:pr-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left lg:pl-16 xl:pl-24"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs sm:text-sm text-gray-600 mb-6 shadow-sm border border-blue-50">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available 24/7 • Trusted by 10,000+ Users
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Online Medical Certificate
                <span className="block mt-1">
                  For <span className="gradient-text">Recovery Fitness</span>
                </span>
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-gray-800 mt-1">
                  within 30 Minutes*
                </span>
              </h1>

              <div className="space-y-3 mb-8 max-w-lg mx-auto lg:mx-0">
                {[
                  "Compliant with NMC & WHO standards",
                  "Issued by a registered Indian doctor",
                  "No appointment or travel time needed",
                  "Recognized by airlines, banks, government etc.",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-600 font-medium text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
                <Link href="/get-certificate" className="w-full sm:w-auto">
                  <Button size="lg" className="animate-pulse-glow w-full">
                    Get Medical Certificate
                  </Button>
                </Link>
                <Link href="/how-it-works" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    See How It Works
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {[
                  { icon: "✓", text: "NMC Registered" },
                  { icon: "🔒", text: "100% Secure" },
                  { icon: "💯", text: "Guarantee" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end items-end h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-none flex justify-center lg:justify-end">
                <Image
                  src="/doctor-hero.PNG"
                  alt="Board Certified Doctor"
                  width={600}
                  height={600}
                  className="w-full lg:w-auto h-auto lg:h-full object-contain object-bottom lg:scale-110 lg:origin-bottom-right"
                  priority
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <StatCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certificate Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Certificate Type
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We offer a variety of medical certificates for different purposes.
              All certificates are issued by registered medical practitioners.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {CERTIFICATE_TYPES.map((cert) => (
              <motion.div key={cert.id} variants={fadeInUp}>
                <Link href={`/certificates/${cert.id}`}>
                  <Card variant="glass" hover className="h-full">
                    <CardContent className="pt-6">
                      <div className="text-3xl sm:text-4xl mb-4">{cert.icon}</div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mb-4 line-clamp-2">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg sm:text-xl font-bold text-primary">
                          {formatCurrency(cert.price)}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-400">
                          {cert.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Get your medical certificate in 5 simple steps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative px-4 sm:px-0">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary to-primary-light/20 md:to-primary-light" />

              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  className={`relative flex items-center gap-6 md:gap-8 mb-10 md:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card variant="glass" className="inline-block w-full sm:w-auto">
                      <CardContent className="p-4 sm:py-4">
                        <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step number */}
                  <div className="absolute left-0 md:relative md:left-auto flex w-12 h-12 rounded-full gradient-primary items-center justify-center text-white font-bold text-lg shadow-lg z-10 shrink-0">
                    {item.step}
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/get-certificate">
              <Button size="lg" className="w-full sm:w-auto">
                Start Now - Get Your Certificate
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your Certificate?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who got their medical
              certificates quickly and hassle-free.
            </p>
            <Link href="/get-certificate">
              <Button
                size="xl"
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-xl"
              >
                Get Started Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
