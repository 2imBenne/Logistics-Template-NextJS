import PageHeader from '@/components/headers/PageHeader';
import CaseDetailsPage from '@/features/single-casestudy/CaseDetailsPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Project | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Case Study Details"
                subtitle="Case Study Details"
            />
            <CaseDetailsPage />
        </>
    );
};

export default page;