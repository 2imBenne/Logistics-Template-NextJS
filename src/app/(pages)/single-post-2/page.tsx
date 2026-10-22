import PageHeader from '@/components/headers/PageHeader';
import SinglePostPage from '@/features/single-post-2/SinglePostPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Post | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Blog Single 2" subtitle="Blog Single 2" />

            <SinglePostPage />
        </>
    );
};

export default page;