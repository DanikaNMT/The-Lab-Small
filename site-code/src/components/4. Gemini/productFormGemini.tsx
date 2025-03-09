import React, { useState } from 'react';
import ProductCardGeminiPreview from "@/components/4. Gemini/productCardPreviewGemini.tsx";
import { ProductData } from '@/models/Product';
import { useProducts } from "@/hooks/useProducts.ts";

const ProductFormGemini: React.FC = () => {
    const { addProduct } = useProducts();

    const [product, setProduct] = useState<ProductData>({
        imgUrl: '',
        name: '',
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newProduct: ProductData = {
            imgUrl: product.imgUrl,
            name: product.name,
            price: product.price,
            amount: product.amount
        };
        addProduct(newProduct);
        setProduct({ imgUrl: "", name: "", price: 0, amount: 0 });
    };

    return (
        <div className="flex justify-center items-start mt-8">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg w-96 mr-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Add a New Toy!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="imgUrl">
                            Picture Link:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="imgUrl"
                            type="text"
                            name="imgUrl"
                            value={product.imgUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Toy Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
                            Price ($):
                        </label>
                        <input
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            min="0"
                            step="0.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="amount">
                            How Many?:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="amount"
                            type="number"
                            name="amount"
                            value={product.amount}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>

                    <button
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                        Add Toy!
                    </button>
                </form>
            </div>
            {/* Preview Section */}
            <div className="w-72">
                <ProductCardGeminiPreview product={product} />
            </div>
        </div>
    );
};

export default ProductFormGemini;