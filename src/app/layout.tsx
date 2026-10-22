import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";
import type { Metadata } from "next";
import { Rethink_Sans, DM_Sans } from "next/font/google";
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import "../assets/css/combined.css"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${rethinkSans.variable} ${dmSans.variable}`}>
        <ContextProvider>
          <CustomLayout>
            {children}
          </CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
