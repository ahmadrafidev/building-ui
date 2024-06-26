import React from 'react';
import Link from 'next/link';

import { Tabs, Tab } from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout/Layout';

import { foundationList, componentsList } from '../../utils/constants/route';


const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Astra UI Overview</h1>
            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Purposes</h2>
                <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-900 dark:text-gray-50">
                    The main purpose of Astra UI is to provide a space where I can explore and refine the process of creating high-quality React components. This project serves as both a portfolio of my work and a resource for other developers who are looking to understand and implement similar components in their own projects.
                </p>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-900 dark:text-gray-50">
                    <li className="text-sm md:text-base mb-2">
                        <strong>Consistent:</strong> Ensure that all components adhere to a unified design language, providing a cohesive and professional look and feel across applications.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Reusable:</strong> Develop components that can be easily reused across different projects, reducing the need for redundant code and promoting efficient development practices.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Accessible:</strong> Prioritize accessibility in all components to ensure that they can be used by a wide range of users, including those with disabilities.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Customizable:</strong> Provide options for customization to allow developers to adapt components to their specific needs and branding guidelines.
                    </li>
                </ul>
                <div className="flex flex-col ">
                    <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-900 dark:text-gray-50">
                        Astra UI aims to be a versatile toolset for developers, enabling them to create beautiful, functional, and accessible web applications with ease. Whether you are building a simple website or a complex web application, Astra UI provides the foundational components you need to get started quickly and efficiently.
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 inline-block ml-2">
                            <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
                        </svg>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default AboutAstraPage;
