import PageHeader from '@/components/headers/PageHeader';
import FaqSec from '@/features/faq/FaqSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Faq | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Faq" subtitle="Faq" />
            <FaqSec />
        </>
    );
};

export default page;