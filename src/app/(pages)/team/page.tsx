import PageHeader from '@/components/headers/PageHeader';
import TeamSec from '@/features/team/TeamSec';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Team | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Our Team" subtitle="Our Team" />
            <TeamSec />
        </>
    );
};

export default page;