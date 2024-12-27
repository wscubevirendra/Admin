import React from 'react'

export default function CategoryAdd() {
    return (
        <section className="bg-white">
            <div className="py-2 px-4 mx-auto max-w-2xl lg:py-2">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new Category</h2>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Category Name</label>
                            <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product brand" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Category Slug</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required />
                        </div>
                        <div className="w-full col-span-2">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Category images</label>
                            <input type="file" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required />
                        </div>

                    </div>
                    <button type="submit" className="inline-flex border bg-purple-200 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg ">
                        Save
                    </button>
                </form>
            </div>
        </section>

    )
}
