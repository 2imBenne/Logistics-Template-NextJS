import PageHeader from '@/components/headers/PageHeader';
import Services3 from '@/features/case-studies-2/Services3';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Project | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Case Study 2" subtitle="Case Study 2" />
            <Services3 />
        </>
    );
};

export default page;