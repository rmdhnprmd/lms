import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Aeonik } from "@/public/customFonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enhancing Educational Excellence: Kursusku – Empowering Learning, Collaboration, and Progress",
  description: "Discover a transformative learning experience with Kursusku, a cutting-edge Learning Management System designed to empower educators, engage learners, and facilitate seamless collaboration. Our platform goes beyond traditional education, providing a dynamic environment where knowledge meets innovation. Explore advanced features, interactive content, and personalized learning paths, fostering a community of lifelong learners. Join us on a journey of educational excellence, where every interaction fuels progress and unlocks the full potential of your learning community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Aeonik.className} font-medium tracking-[0.02rem]`}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
