import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/header-one/Header';
import PageHeader from '@/components/headers/PageHeader';
import ErrorSec from '@/features/error404/ErrorSec';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "404 | TransHub - Transport & Logistics",
    description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const Page: React.FC = () => {
    return (
        <>
            <Header />
            <PageHeader title="Error 404 Page" subtitle="404 error" />
            <ErrorSec />
            <Footer />
        </>
    );
};

export default Page;