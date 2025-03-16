// ProductScreenDeepseek.tsx
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FaHome, FaPlus} from "react-icons/fa";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";
import ProductCardPreviewDeepseek from '@/components/3. Deepseek/ProductCardPreviewDeepseek.tsx';
import {ProductData} from '@/models/Product';
import {useProducts} from "@/hooks/useProducts.ts";

export function CreateProductDeepseek() {
    const navigate = useNavigate()
    const {addProduct} = useProducts();

    const [formData, setFormData] = useState({
        imgUrl: '',
        name: '',
        price: '',
        amount: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: ProductData = {
            imgUrl: formData.imgUrl,
            name: formData.name,
            price: parseFloat(formData.price),
            amount: parseInt(formData.amount)
        };
        addProduct(newProduct);

        setFormData({imgUrl: "", name: "", price: "", amount: ""});

        console.log('Creating product:', formData);
    };

    const previewProduct: ProductData = {
        imgUrl: formData.imgUrl,
        name: formData.name,
        price: parseFloat(formData.price) || 0,
        amount: parseInt(formData.amount) || 0
    };

    return (
        <div className="flex flex-col w-screen h-screen bg-gradient-to-b from-sky-100 to-pink-100">
            <VersieKnoppen/>
            <header
                className="text-center py-6 bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-repeat bg-[length:100px_100px]"
                     style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+")'}}/>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
                    <div className="flex-1"/>

                    <div className="flex-1 text-center">
                        <h1 className="text-5xl font-bold text-white font-bubblegum drop-shadow-md [text-shadow:_2px_2px_2px_rgb(255_105_180_/_40%)]">
                            ToyVerse 🪅
                        </h1>
                        <p className="text-xl text-white mt-3 animate-pulse">
                            Where Magic Lives! 🌈
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex-1 flex justify-end gap-4">
                        <button
                            className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl
                                      transition-all duration-300 text-lg flex items-center gap-2
                                      shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
                            onClick={() => navigate("/version5")}
                        >
                            <FaHome className="text-xl"/>
                            Home 🏡
                        </button>
                        <button
                            className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-2xl
                                      transition-all duration-300 text-lg flex items-center gap-2
                                      shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white"
                            onClick={() => navigate("/version5/create/")}
                        >
                            <FaPlus className="text-xl"/>
                            Create ✨
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 p-5 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Creation Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-50">
                        <h2 className="text-3xl font-bubblegum text-purple-600 mb-6 text-center">
                            Create New Magic Toy 🪄
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-pink-600 font-bold mb-2">
                                        Toy Image URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.imgUrl}
                                        onChange={(e) => setFormData({...formData, imgUrl: e.target.value})}
                                        className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-xl
             focus:outline-none focus:ring-2 focus:ring-purple-500
             transition-all placeholder-pink-300 focus:bg-white"
                                        placeholder="https://example.com/toy-image.jpg"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-pink-600 font-bold mb-2">
                                        Toy Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-xl
             focus:outline-none focus:ring-2 focus:ring-purple-500
             transition-all placeholder-pink-300 focus:bg-white"
                                        placeholder="Magical Unicorn Plushie"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-pink-600 font-bold mb-2">
                                            Price ($)
                                        </label>
                                        <input
                                            type="number"
                                            step={0.5}
                                            value={formData.price}
                                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-xl
             focus:outline-none focus:ring-2 focus:ring-purple-500
             transition-all placeholder-pink-300 focus:bg-white"
                                            placeholder="29.99"
                                            min="0"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-pink-600 font-bold mb-2">
                                            Stock Amount
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.amount}
                                            onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border-2 border-pink-200 rounded-xl
             focus:outline-none focus:ring-2 focus:ring-purple-500
             transition-all placeholder-pink-300 focus:bg-white"
                                            placeholder="50"
                                            min="0"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600
                                           text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
                                           transform hover:scale-101 text-lg flex items-center justify-center gap-2"
                            >
                                <FaPlus className="text-xl"/>
                                Create Magical Toy ✨
                            </button>
                        </form>
                    </div>

                    {/* Live Preview */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-50">
                        <h3 className="text-2xl font-bubblegum text-purple-600 mb-6 text-center">
                            Magic Preview 🌟
                        </h3>
                        <div className="max-w-md mx-auto">
                            <ProductCardPreviewDeepseek
                                product={previewProduct}
                                className="border-4 border-dashed border-pink-200 hover:border-purple-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements remain unchanged */}
        </div>
    );
}

export default CreateProductDeepseek;