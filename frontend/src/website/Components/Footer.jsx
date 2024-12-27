import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p>
                            We are a leading e-commerce website providing a wide range of products to cater to all your needs. Our mission is to deliver quality products at the best prices.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><Link to="/" className="hover:underline">Home</Link></li>
                            <li className="mb-2"><Link to="/shop" className="hover:underline">Shop</Link></li>
                            <li className="mb-2"><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            <li className="mb-2"><Link to="/about" className="hover:underline">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl hover:text-gray-400"><FaFacebook /></a>
                            <a href="#" className="text-2xl hover:text-gray-400"><FaTwitter /></a>
                            <a href="#" className="text-2xl hover:text-gray-400"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;