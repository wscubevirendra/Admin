import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">E-Shop</Link>
                </div>
                <nav className="flex space-x-4">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                    <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
                    <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                    <Link to="/admin" className="text-gray-600 hover:text-gray-800">Admin</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="text-gray-600 hover:text-gray-800">
                        <FaShoppingCart className="w-6 h-6" />
                    </Link>
                    <Link to="/profile" className="text-gray-600 hover:text-gray-800">
                        <FaUser className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;