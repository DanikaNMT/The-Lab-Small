import React from 'react';
import ProductCardClaude from './productCardClaude';
import { Product } from '@/models/Product';

interface ProductGridProps {
    products: Product[];
    onDeleteProduct: (id: string) => void;
    isLoading: boolean;
    isError: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onDeleteProduct, isLoading, isError }) => {
    if (isLoading) {
        return <div className="text-center py-10">Loading plushies...</div>;
    }

    if (isError) {
        return <div className="text-center text-red-500 py-10">Error loading plushies! Please try again.</div>;
    }

    if (!products || products.length === 0) {
        return <div className="text-center py-10">No plushies found. Add some cuddly friends!</div>;
    }

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCardClaude
                    key={product.id}
                    product={product}
                    onDelete={onDeleteProduct}
                />
            ))}
        </div>
    );
};

export default ProductGrid;