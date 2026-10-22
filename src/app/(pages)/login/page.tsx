import PageHeader from '@/components/headers/PageHeader';
import AccountSec from '@/features/login/AccountSec';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Login | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};

const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Login" subtitle="Login" />
            <AccountSec />
        </>
    );
};

export default page;