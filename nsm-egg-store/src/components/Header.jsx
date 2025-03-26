import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <nav className="flex justify-between h-16" aria-label="Global">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold">NSM Egg Store</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex">
                            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</a>
                            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;