import PageHeader from '@/components/headers/PageHeader';
import BlogPage from '@/features/blog-2/BlogPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Blog | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Blog Style 2" subtitle="Blog 2" />
            <BlogPage />
        </>
    );
};

export default page;