import PageHeader from '@/components/headers/PageHeader';
import MainProductDetails from '@/features/single-product/MainProductDetails';
import ProductDetails from '@/features/single-product/ProductDetails';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product | TransHub - Transport & Logistics",
  description: "A modern transport and logistics platform offering reliable, fast, and efficient delivery solutions for businesses and individuals.",
};
const page: React.FC = () => {
    return (
        <>
            <PageHeader title="Single Product" subtitle="Single Product" />
            <MainProductDetails />
            <ProductDetails />
        </>
    );
};

export default page;