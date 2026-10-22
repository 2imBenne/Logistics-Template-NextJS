import PageHeader from '@/components/headers/PageHeader';
import QuoteFeatures from '@/features/quote/QuoteFeatures';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Quote | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Request Quote" subtitle="Request Quote" />
            <QuoteFeatures />
        </>
    );
};

export default page;