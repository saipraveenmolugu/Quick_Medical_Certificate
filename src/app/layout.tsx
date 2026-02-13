import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "QuickMedicalCertificate - Get Your Medical Certificate in 30 Minutes",
  description: "Get legitimate medical certificates from registered doctors through secure teleconsultation. Sick leave, fitness, recovery certificates available 24/7.",
  keywords: ["medical certificate", "sick leave certificate", "fitness certificate", "online doctor consultation", "telemedicine"],
  authors: [{ name: "QuickMedicalCertificate" }],
  icons: {
    icon: [
      { url: `${basePath}/icon.png` },
      { url: `${basePath}/icon.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: `${basePath}/apple-icon.png` },
    ],
  },
  openGraph: {
    title: "QuickMedicalCertificate - Medical Certificates Online",
    description: "Get legitimate medical certificates from registered doctors through secure teleconsultation.",
    type: "website",
    locale: "en_IN",
    siteName: "QuickMedicalCertificate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
