// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

const componentsList = [
    { name: 'Accordion', path: '/documentation/accordion' },
    { name: 'Alert', path: '/documentation/alert' },
    { name: 'AlertDialog', path: '/documentation/alertdialog' },
    { name: 'Avatar', path: '/documentation/avatar' },
    { name: 'Badge', path: '/documentation/badge' },
    { name: 'Button', path: '/documentation/button' },
    { name: 'Card', path: '/documentation/card' },
    { name: 'Checkbox', path: '/documentation/checkbox' },
    { name: 'Collapse', path: '/documentation/collapse' },
    { name: 'Dialog', path: '/documentation/dialog' },
    { name: 'Dropdown', path: '/documentation/dropdown' },
    { name: 'Footer', path: '/documentation/footer' },
    { name: 'Input', path: '/documentation/input' },
    { name: 'Layout', path: '/documentation/layout' },
    { name: 'List', path: '/documentation/list' },
    { name: 'Modal', path: '/documentation/modal' },
    { name: 'Navbar', path: '/documentation/navbar' },
    { name: 'Notification', path: '/documentation/notification' },
    { name: 'ProgressBar', path: '/documentation/progressbar' },
    { name: 'ProgressTracker', path: '/documentation/progresstracker' },
    { name: 'RadioButton', path: '/documentation/radiobutton' },
    { name: 'Rating', path: '/documentation/rating' },
    { name: 'SearchBar', path: '/documentation/searchbar' },
    { name: 'Select', path: '/documentation/select' },
    { name: 'Slider', path: '/documentation/slider' },
    { name: 'Spinner', path: '/documentation/spinner' },
    { name: 'Stepper', path: '/documentation/stepper' },
    { name: 'Switch', path: '/documentation/switch' },
    { name: 'Tabs', path: '/documentation/tabs' },
    { name: 'TextArea', path: '/documentation/textarea' },
    { name: 'Toggle', path: '/documentation/toggle' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-900 h-screen md:h-auto p-4">
                <h2 className="text-xl font-bold mb-4">Components</h2>
                <ul>
                    {componentsList.map((component) => (
                        <li key={component.name} className="mb-2">
                            <Link href={component.path}>
                                {component.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="flex-1 p-4 bg-white dark:bg-black overflow-y-auto h-screen md:h-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;
