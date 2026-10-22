import PageHeader from '@/components/headers/PageHeader';
import ContactSec from '@/features/contact/ContactSec';
import ContactWidgets from '@/features/contact/ContactWidgets';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Contact | TransHub - Transport & Logistics",
    description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Contact Us" subtitle="Contact Us" />

            <ContactWidgets />
            <ContactSec />
        </>
    );
};

export default page;