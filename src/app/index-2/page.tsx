import React from 'react';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/header-two/Header';
import FaqSec from '@/features/faq/FaqSec';
import AboutSec2 from '@/features/home-two/AboutSec2';
import BlogSec from '@/features/home-two/BlogSec';
import ChooseSec2 from '@/features/home-two/ChooseSec2';
import OperationSec from '@/features/home-two/OperationSec';
import SliderSec2 from '@/features/home-two/SliderSec2';
import TeamSec from '@/features/home-two/TeamSec';
import TextSlideSec from '@/features/home-two/TextSlideSec';
import VideoSec2 from '@/features/home-two/VideoSec2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <Header />
            <SliderSec2 />

            <AboutSec2 />

            <TextSlideSec />
            <ChooseSec2 />

            <VideoSec2 />

            <TeamSec />

            <OperationSec />

            <FaqSec />

            <BlogSec />
            <Footer />
        </>
    );
};

export default page;