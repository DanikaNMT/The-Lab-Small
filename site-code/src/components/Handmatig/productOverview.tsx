
import {useProducts} from "@/hooks/useProducts.ts";
import {ProductCard} from "@/components/Handmatig/productCard.tsx";
import {Product} from "@/models/Product.ts";

export function ProductOverview() {
    const {isLoading, isError, products} = useProducts()

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError) {
        return (

            <div>Products could not be loaded</div>
        )
    }
    if (!products) {
        return (
            <div>No products</div>
        )
    }

    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center items-start w-full">
            {products.map((product: Product) => (
                    <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );

}
