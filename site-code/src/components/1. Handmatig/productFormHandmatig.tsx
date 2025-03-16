import { useState, ChangeEvent, FormEvent } from "react";
import { ProductData } from "@/models/Product.ts";
import { ProductPreviewCardHandmatig } from "@/components/1. Handmatig/productPreviewCardHandmatig.tsx";
import { useProducts } from "@/hooks/useProducts";

export default function ProductFormHandmatig() {
    const { addProduct } = useProducts();

    const [form, setForm] = useState({
        imgUrl: "",
        name: "",
        price: "",
        amount: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newProduct: ProductData = {
            imgUrl: form.imgUrl,
            name: form.name,
            price: parseFloat(form.price),
            amount: parseInt(form.amount)
        };
        addProduct(newProduct);
        setForm({ imgUrl: "", name: "", price: "", amount: "" });
    };

    const previewProduct: ProductData = {
        imgUrl: form.imgUrl || "https://via.placeholder.com/150",
        name: form.name || "Preview Name",
        price: form.price ? parseFloat(form.price) : 0,
        amount: form.amount ? parseInt(form.amount) : 0
    };

    return (
        <div className="p-2 md:p-6 flex flex-col md:flex-row md:gap-6">
            <form onSubmit={handleSubmit} className="mb-4 md:mb-6 space-y-3 md:space-y-4 w-full md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-bold">Add a new product</h1>
                <input
                    className="border p-2 w-full bg-white text-black rounded"
                    type="text"
                    name="imgUrl"
                    placeholder="Image URL"
                    value={form.imgUrl}
                    onChange={handleChange}
                    required
                />
                <input
                    className="border p-2 w-full bg-white text-black rounded"
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="border p-2 w-full bg-white text-black rounded"
                    type="number"
                    name="price"
                    step="0.5"
                    placeholder="Price (€)"
                    value={form.price}
                    onChange={handleChange}
                    min="0"
                    required
                />
                <input
                    className="border p-2 w-full bg-white text-black rounded"
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={handleChange}
                    min="0"
                    required
                />
                <button
                    className="bg-orange-300 hover:bg-orange-400 text-white px-4 py-2 rounded transition-colors"
                    type="submit"
                >
                    Create
                </button>
            </form>

            {/* Preview only shown on tablet/desktop */}
            <div className="hidden md:flex w-1/2 justify-center items-start">
                <ProductPreviewCardHandmatig product={previewProduct} />
            </div>
        </div>
    );
}