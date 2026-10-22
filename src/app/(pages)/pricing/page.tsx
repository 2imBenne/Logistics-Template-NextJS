import PageHeader from '@/components/headers/PageHeader';
import PricingSec from '@/features/pricing/PricingSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Pricing | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Pricing" subtitle="Pricing" />
            <PricingSec />
        </>
    );
};

export default page;