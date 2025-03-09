import React, { useState } from 'react';
import { ProductData } from "@/models/Product.ts";
import { useProducts } from "@/hooks/useProducts.ts";
import ToyCardPreview from "./productCardPreviewPerplexity.tsx"; // Import the preview card component

const ProductFormPerplexity: React.FC = () => {
    const { addProduct } = useProducts();

    const [formData, setFormData] = useState<ProductData>({
        imgUrl: '',
        name: '',
        price: 0,
        amount: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === "price" || name === "amount" ? parseFloat(value) || 0 : value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const newProduct: ProductData = {
            imgUrl: formData.imgUrl,
            name: formData.name,
            price: formData.price,
            amount: formData.amount
        };
        addProduct(newProduct);
        setFormData({ imgUrl: "", name: "", price: 0, amount: 0 });
    };

    return (
        <div className="max-w-6xl mx-auto  flex flex-col md:flex-row gap-8">
            {/* Form Section */}
            <div className="w-full">
                <form onSubmit={handleSubmit} className="bg-gradient-to-b from-yellow-300 to-pink-200 shadow-md rounded-lg px-8 pt-6 pb-8">
                    <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">🎨 Create Your Toy!</h2>

                    <div className="mb-4">
                        <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="imgUrl">
                            🖼️ Image URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-purple-700 leading-tight focus:outline-none focus:ring focus:ring-purple-300"
                            id="imgUrl"
                            type="text"
                            placeholder="Paste an image link here!"
                            name="imgUrl"
                            value={formData.imgUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="name">
                            🧸 Toy Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-purple-700 leading-tight focus:outline-none focus:ring focus:ring-purple-300"
                            id="name"
                            type="text"
                            placeholder="What’s your toy called?"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="price">
                            💰 Price ($)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-purple-700 leading-tight focus:outline-none focus:ring focus:ring-purple-300"
                            id="price"
                            type="number"
                            placeholder="How much does it cost?"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            step="0.5"
                            min="0"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="amount">
                            🔢 Quantity
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-purple-700 leading-tight focus:outline-none focus:ring focus:ring-purple-300"
                            id="amount"
                            type="number"
                            placeholder="How many toys do you have?"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-300"
                            type="submit"
                        >
                            🎉 Add Toy!
                        </button>
                    </div>
                </form>
            </div>

            {/* Preview Section */}
            <div className="w-full flex justify-center items-start">
                <ToyCardPreview product={formData} />
            </div>
        </div>
    );
};

export default ProductFormPerplexity;
