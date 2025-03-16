import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useProducts} from '@/hooks/useProducts';
import {Product, ProductData} from '@/models/Product';
import ProductCardClaude from "@/components/6. Claude/productCardClaude.tsx";
import HeaderClaude from "@/components/6. Claude/headerClaude.tsx";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";

const CreatePage: React.FC = () => {
    const navigate = useNavigate();
    const {addProduct} = useProducts();
    const [formData, setFormData] = useState({
        name: '',
        imageUrl: '',
        price: '',
        amount: ''
    });

    // Create a preview product object based on current form data
    const previewProduct: Product = {
        id: 1,
        name: formData.name || 'Plushie Name',
        imgUrl: formData.imageUrl || 'https://via.placeholder.com/400x300?text=Plushie+Image',
        price: parseFloat(formData.price) || 0,
        amount: parseInt(formData.amount) || 0
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: ProductData = {
            name: formData.name,
            imgUrl: formData.imageUrl,
            price: parseFloat(formData.price),
            amount: parseInt(formData.amount)
        };

        addProduct(newProduct);
        navigate('/version2');
    };

    // Placeholder function for preview card
    const handlePreviewDelete = () => {
        // This function is just a placeholder for the preview
        alert('This is just a preview! The product will be added when you submit the form.');
    };

    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-pink-50">
            <VersieKnoppen />

            <HeaderClaude/>
            <main className="container mx-auto">
                <div className="w-full py-6">
                    <div className="w-full px-6 py-8">
                        <h2 className="text-2xl font-bold text-purple-800 mb-6">Add New Plushie</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Form */}
                            <div>
                                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                            Plushie Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter plushie name"
                                            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="imageUrl" className="block  text-gray-700 font-medium mb-2">
                                            Image URL
                                        </label>
                                        <input
                                            type="url"
                                            id="imageUrl"
                                            name="imageUrl"
                                            value={formData.imageUrl}
                                            onChange={handleChange}
                                            required
                                            placeholder="https://example.com/plushie.jpg"
                                            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                                            Price ($)
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            step="0.5"
                                            min="0"
                                            required
                                            placeholder="19.99"
                                            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                                            Amount in Stock
                                        </label>
                                        <input
                                            type="number"
                                            id="amount"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            min="0"
                                            required
                                            placeholder="10"
                                            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                    >
                                        Add Plushie
                                    </button>
                                </form>
                            </div>

                            {/* Preview */}
                            <div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold text-purple-800 mb-4">Preview</h3>
                                    <div className="border-2 border-dashed border-purple-200 p-4 rounded-lg bg-pink-50">
                                        <ProductCardClaude
                                            product={previewProduct}
                                            onDelete={handlePreviewDelete}
                                        />
                                        <p className="text-center text-sm text-gray-500 mt-4">
                                            This is a preview of how your plushie will appear in the store.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreatePage;