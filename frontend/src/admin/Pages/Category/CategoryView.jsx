import React from 'react';
import { Link } from 'react-router-dom';

const CategoryView = () => {
    const categories = [
        { id: 1, name: 'Category 1', slug: 'category-1', image: 'image1.jpg' },
        { id: 2, name: 'Category 2', slug: 'category-2', image: 'image2.jpg' },
        // Add more categories as needed
    ];

    return (
        <div className="container mx-auto p-4">

            <div className='flex justify-between mb-4'>
                <h1 className="text-2xl font-bold mb-4">Category List</h1>
                <Link
                    to="/admin/category/add"
                    className=" items-center justify-center border-2 px-6 py-2 text-md font-bold text-black  duration-200 bg-white shadow-sm rounded-xl hover:bg-gray-100"
                    role="button"
                >
                    Add Category <span className="ms-2 font-bold ">+</span>
                </Link>
            </div>

            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-center">Category Name</th>
                        <th className="py-2 px-4 border-b text-center">Slug</th>
                        <th className="py-2 px-4 border-b text-center">Image</th>
                        <th className="py-2 px-4 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td className="py-2 px-4 border-b text-center">{category.name}</td>
                            <td className="py-2 px-4 border-b text-center">{category.slug}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <img src={category.image} alt={category.name} className="h-10 w-10 object-cover mx-auto" />
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryView;