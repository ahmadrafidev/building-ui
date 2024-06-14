// pages/foundation/about.tsx
'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

const FoundationContentPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Content standards</h1>
        </Layout>
    );
};

export default FoundationContentPage;
