import React from 'react';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/header-one/Header';
import AboutSection from '@/features/home-one/AboutSection';
import BlogSec from '@/features/home-one/BlogSec';
import BrandsSec from '@/features/home-one/BrandsSec';
import ChooseSec from '@/features/home-one/ChooseSec';
import PortfolioSec from '@/features/home-one/PortfolioSec';
import PricingSec from '@/features/home-one/PricingSec';
import ProcessSec from '@/features/home-one/ProcessSec';
import ReviewSec from '@/features/home-one/ReviewSec';
import ServicesSec from '@/features/home-one/ServicesSec';
import SliderSection from '@/features/home-one/SliderSection';
import StatSec from '@/features/home-one/StatSec';
import TrackingCtaSec from '@/features/home-one/TrackingCtaSec';
import TrackingFormSec from '@/features/home-one/TrackingFormSec';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <SliderSection />
      <AboutSection />
      <ServicesSec />
      <BrandsSec />
      <ProcessSec />
      <ChooseSec />
      <StatSec />
      <PortfolioSec />
      <TrackingCtaSec />
      <TrackingFormSec />
      <ReviewSec />
      <PricingSec />
      <BlogSec />
      <Footer />
    </>
  );
};

export default HomePage;
