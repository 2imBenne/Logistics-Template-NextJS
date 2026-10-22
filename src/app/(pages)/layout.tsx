import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/header-one/Header';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>
    );
};

export default layout;