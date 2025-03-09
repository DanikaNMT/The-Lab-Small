import React from 'react';
import ProductGridClaude from './productCardGridClaude.tsx';
import { useProducts } from '@/hooks/useProducts';
import HeaderClaude from "@/components/6. Claude/headerClaude.tsx";
import {VersieKnoppen} from "@/components/versieknoppen.tsx";

const HomePageClaude: React.FC = () => {
    const { isLoading, isError, products, deleteProduct } = useProducts();

    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-pink-50">
            <VersieKnoppen />
            <HeaderClaude />
            <main className="container mx-auto">
                <div className="w-full py-6">
                    <h2 className="text-2xl font-bold text-purple-800 mb-6">Our Cuddly Collection</h2>
                    <ProductGridClaude
                        products={products || []}
                        onDeleteProduct={deleteProduct}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </div>
            </main>
        </div>
    );
};

export default HomePageClaude;