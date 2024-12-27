import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 4, name: 'Product 4', price: '$40', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 5, name: 'Product 5', price: '$50', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 6, name: 'Product 6', price: '$60', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 7, name: 'Product 7', price: '$70', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 8, name: 'Product 8', price: '$80', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 9, name: 'Product 9', price: '$90', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
    { id: 10, name: 'Product 10', price: '$100', image: 'https://www.pareedhaan.in/product-images/Dummy1.jpg/386590000002593099/800x800' },
];

const Card = ({ product }) => {
    return (
        <div className="border rounded shadow p-4 m-2 w-64">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
        </div>


    );
};

const CardList = () => {
    return (
        <div className="flex justify-center mx-auto container flex-wrap">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CardList;
