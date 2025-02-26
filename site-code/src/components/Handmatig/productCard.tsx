import {Product} from "@/models/Product.ts";

interface ProductCardProps {
    product: Product
}

export function ProductCard({product}: ProductCardProps) {

    return (
        <div className="w-72 flex flex-col rounded-xl overflow-hidden shadow-lg bg-orange-200">
            <img className="h-64 p-1 w-full object-cover rounded-xl" src={product.imgUrl} alt={`image of ${product.name}`} />
            <div className="flex flex-col flex-grow px-6 pb-4 pt-1">
                <div className="font-bold text-xl mb-2 text-gray-800">{product.name}</div>
                <p className="text-gray-700 text-base">Price: € {product.price}</p>
                <p className="text-gray-700 text-base">Amount {product.amount}</p>
            </div>
        </div>
    );

}
