
import {useProducts} from "@/hooks/useProducts.ts";
import {ProductCardHandmatig} from "@/components/1. Handmatig/productCardHandmatig.tsx";
import {Product} from "@/models/Product.ts";

export function ProductOverviewHandmatig() {
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
                    <ProductCardHandmatig product={product} key={product.id} />
            ))}
        </div>
    );

}
