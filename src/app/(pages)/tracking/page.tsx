import PageHeader from '@/components/headers/PageHeader';
import TrackingPage from '@/features/tracking/TrackingPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tracking | TransHub - Transport & Logistics",
    description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Tracking Parcels" subtitle="Tracking Parcels" />
            <TrackingPage />
        </>
    );
};

export default page;