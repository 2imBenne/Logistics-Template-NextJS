import PageHeader from '@/components/headers/PageHeader';
import BlogStandardSec from '@/features/blog-classic/BlogStandardSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Blog | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Blog Classic" subtitle="Blog Classic" />
            <BlogStandardSec />
        </>
    );
};

export default page;