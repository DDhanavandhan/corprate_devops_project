import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} NSM Egg Store. All rights reserved.</p>
                <p>Follow us on social media!</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-yellow-500">Facebook</a>
                    <a href="#" className="hover:text-yellow-500">Instagram</a>
                    <a href="#" className="hover:text-yellow-500">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;