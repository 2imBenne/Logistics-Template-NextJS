import PageHeader from '@/components/headers/PageHeader';
import ProjectSec from '@/features/case-studies/ProjectSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Project | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Case Study" subtitle="Case Study" />
            <ProjectSec />
        </>
    );
};

export default page;