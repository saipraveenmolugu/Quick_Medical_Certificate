"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type AuthMode = "login" | "signup" | "otp";

export default function LoginPage() {
    const [mode, setMode] = useState<AuthMode>("login");
    const [authMethod, setAuthMethod] = useState<"email" | "phone">("phone");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        name: "",
        otp: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (mode === "login" || mode === "signup") {
                setMode("otp");
            } else {
                // OTP verification - redirect to dashboard
                window.location.href = "/dashboard";
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
                </div>

                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Quick Medical Certificate"
                            width={250}
                            height={70}
                            className="mb-8"
                        />
                    </Link>

                    <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Get Your Medical<br />
                        Certificate in<br />
                        <span className="gradient-text">30 Minutes</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-md">
                        Secure teleconsultation with NMC-registered doctors.
                        Trusted by 10,000+ users across India.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap gap-4">
                        {[
                            { icon: "✓", text: "NMC Registered" },
                            { icon: "🔒", text: "100% Secure" },
                            { icon: "⚡", text: "Instant Delivery" },
                        ].map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white/60 backdrop-blur px-4 py-2 rounded-full text-sm"
                            >
                                <span>{badge.icon}</span>
                                <span className="text-gray-700 font-medium">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8 text-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Quick Medical Certificate"
                                width={200}
                                height={56}
                                className="mx-auto"
                            />
                        </Link>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card variant="glass" className="shadow-xl">
                                <CardHeader className="text-center pb-2">
                                    <CardTitle className="text-2xl">
                                        {mode === "login" && "Welcome Back"}
                                        {mode === "signup" && "Create Account"}
                                        {mode === "otp" && "Verify OTP"}
                                    </CardTitle>
                                    <CardDescription>
                                        {mode === "login" && "Login to access your certificates"}
                                        {mode === "signup" && "Join 10,000+ satisfied users"}
                                        {mode === "otp" && `Enter the code sent to your ${authMethod}`}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-4">
                                    {mode !== "otp" && (
                                        <>
                                            {/* Auth Method Toggle */}
                                            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setAuthMethod("phone")}
                                                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${authMethod === "phone"
                                                        ? "bg-white text-primary shadow-sm"
                                                        : "text-gray-500 hover:text-gray-700"
                                                        }`}
                                                >
                                                    📱 Phone
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setAuthMethod("email")}
                                                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${authMethod === "email"
                                                        ? "bg-white text-primary shadow-sm"
                                                        : "text-gray-500 hover:text-gray-700"
                                                        }`}
                                                >
                                                    ✉️ Email
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {mode === "signup" && (
                                            <Input
                                                label="Full Name"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        )}

                                        {mode !== "otp" && authMethod === "phone" && (
                                            <div className="relative">
                                                <Input
                                                    label="Phone Number"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="Enter 10-digit mobile number"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="pl-16"
                                                    required
                                                />
                                                <span className="absolute left-4 top-[38px] text-gray-500 font-medium">
                                                    +91
                                                </span>
                                            </div>
                                        )}

                                        {mode !== "otp" && authMethod === "email" && (
                                            <Input
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        )}

                                        {mode === "otp" && (
                                            <div className="space-y-4">
                                                <Input
                                                    label="Enter OTP"
                                                    name="otp"
                                                    type="text"
                                                    placeholder="Enter 6-digit OTP"
                                                    value={formData.otp}
                                                    onChange={handleInputChange}
                                                    className="text-center text-2xl tracking-widest"
                                                    maxLength={6}
                                                    required
                                                />
                                                <p className="text-center text-sm text-gray-500">
                                                    Didn&apos;t receive code?{" "}
                                                    <button
                                                        type="button"
                                                        className="text-primary font-medium hover:underline"
                                                        onClick={() => {/* Resend OTP logic */ }}
                                                    >
                                                        Resend OTP
                                                    </button>
                                                </p>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                            fill="none"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                        />
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                <>
                                                    {mode === "login" && "Send OTP"}
                                                    {mode === "signup" && "Create Account"}
                                                    {mode === "otp" && "Verify & Continue"}
                                                </>
                                            )}
                                        </Button>
                                    </form>

                                    {mode === "otp" && (
                                        <button
                                            type="button"
                                            onClick={() => setMode("login")}
                                            className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 text-center"
                                        >
                                            ← Back to Login
                                        </button>
                                    )}

                                    {mode !== "otp" && (
                                        <>
                                            {/* Divider */}
                                            <div className="relative my-6">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-gray-200" />
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span className="bg-white px-4 text-gray-500">
                                                        or continue with
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Google Sign In */}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="lg"
                                                className="w-full"
                                                onClick={() => {/* Google Auth logic */ }}
                                            >
                                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#4285F4"
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    />
                                                    <path
                                                        fill="#34A853"
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    />
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    />
                                                    <path
                                                        fill="#EA4335"
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    />
                                                </svg>
                                                Continue with Google
                                            </Button>

                                            {/* Toggle Login/Signup */}
                                            <p className="mt-6 text-center text-sm text-gray-600">
                                                {mode === "login" ? (
                                                    <>
                                                        Don&apos;t have an account?{" "}
                                                        <button
                                                            type="button"
                                                            onClick={() => setMode("signup")}
                                                            className="text-primary font-semibold hover:underline"
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        Already have an account?{" "}
                                                        <button
                                                            type="button"
                                                            onClick={() => setMode("login")}
                                                            className="text-primary font-semibold hover:underline"
                                                        >
                                                            Login
                                                        </button>
                                                    </>
                                                )}
                                            </p>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Security Notice */}
                    <p className="mt-6 text-center text-xs text-gray-500">
                        🔒 Your data is encrypted and secure. By continuing, you agree to our{" "}
                        <Link href="/terms" className="underline hover:text-gray-700">
                            Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-gray-700">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
