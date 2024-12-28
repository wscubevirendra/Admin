import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

const CategoryAdd = () => {
    const [categoryName, setCategoryName] = useState('');
    const [slug, setSlug] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);

    const handleImageChange = (e) => {
        setCategoryImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ categoryName, slug, categoryImage });
    };

    return (
        <>
            <div className="flex  justify-between mx-auto px-2 my-2">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link
                                to="/admin"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600  "
                            >
                                <FaHome className="w-3 h-3 me-2.5" />
                                DashBoard
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <FiChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                                <Link
                                    to="/admin/category"
                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 "
                                >
                                    Category
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <FiChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                                <span className="ms-1 text-sm font-medium">
                                    Add
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="flex  justify-center items-center h-[70vh] bg-gray-100">

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md min-w-[800px]">
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Category Name</label>
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Slug</label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Category Image</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
                        Add Category
                    </button>
                </form>
            </div>

        </>

    );
};

export default CategoryAdd;
