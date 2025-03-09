import React, { useState } from "react";
import { ProductData } from "@/models/Product.ts";
import { useProducts } from "@/hooks/useProducts";
import ProductCardPreview from "@/components/2. ChatGPT/productCardPreviewChatGPT.tsx";

const ProductForm: React.FC = () => {
    const { addProduct } = useProducts();

    const [product, setProduct] = useState<ProductData>({
        imgUrl: "",
        name: "Sample Product",
        price: 0,
        amount: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: name === "price" || name === "amount" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ imgUrl: "", name: "", price: 0, amount: 0 });
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-br from-yellow-200 to-pink-300 shadow-xl rounded-3xl">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-300 w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-4">✨ Create Your Toy ✨</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">🖼️ Image URL</label>
                    <input
                        type="text"
                        name="imgUrl"
                        value={product.imgUrl}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">🎁 Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-bold mb-2">💰 Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
                            placeholder="Enter price"
                            min="0"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-bold mb-2">📦 Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={product.amount}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black"
                            placeholder="Enter stock amount"
                            min="0"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all text-lg">
                    🎉 Add Toy!
                </button>
            </form>
            {/* Live Preview */}
            <div className="flex justify-center items-center w-full max-w-md">
                <ProductCardPreview product={product} />
            </div>
        </div>
    );
};

export default ProductForm;