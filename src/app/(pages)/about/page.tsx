import React from 'react';
import PageHeader from '@/components/headers/PageHeader';
import AboutDetails from '@/features/about/AboutDetails';
import ProcessSec from '@/features/home-one/ProcessSec';
import AboutSec3 from '@/features/home-three/AboutSec3';
import OperationSec from '@/features/home-two/OperationSec';
import TeamSec from '@/features/home-two/TeamSec';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="About Us" subtitle="About Us" />
            <AboutDetails />

            <ProcessSec />

            <AboutSec3 />

            <OperationSec />

            <TeamSec />
        </>
    );
};

export default page;