import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/header-three/Header';
import AboutSec3 from '@/features/home-three/AboutSec3';
import Blog3 from '@/features/home-three/Blog3';
import BrandsSec3 from '@/features/home-three/BrandsSec3';
import Hero3 from '@/features/home-three/Hero3';
import ProcessSec3 from '@/features/home-three/ProcessSec3';
import RecentWork from '@/features/home-three/RecentWork';
import ReviewSec3 from '@/features/home-three/ReviewSec3';
import Services3 from '@/features/home-three/Services3';
import SolutionSec from '@/features/home-three/SolutionSec';
import StatSec3 from '@/features/home-three/StatSec3';
import VideoSec3 from '@/features/home-three/VideoSec3';
import WhyUs3 from '@/features/home-three/WhyUs3';
import TextSlideSec from '@/features/home-two/TextSlideSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <Header />
            <Hero3 />

            <Services3 />

            <TextSlideSec />

            <AboutSec3 />

            <StatSec3 />

            <BrandsSec3 />

            <ProcessSec3 />

            <SolutionSec />

            <VideoSec3 />

            <RecentWork />

            <WhyUs3 />

            <ReviewSec3 />

            <Blog3 />

            <Footer />
        </>
    );
};

export default page;