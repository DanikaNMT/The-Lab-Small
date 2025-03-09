import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addProduct, getProducts, deleteProduct } from '../services/dataService.ts';
import { ProductData } from '@/models/Product.ts';

export function useProducts() {
    const queryClient = useQueryClient();

    const { isLoading, isError, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts()
    });

    const { mutate: addProductMutate } = useMutation({
        mutationFn: (item: ProductData) => addProduct(item),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });

    const { mutate: deleteProductMutate } = useMutation({
        mutationFn: (id: string) => deleteProduct(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });

    return {
        isLoading,
        isError,
        products,
        addProduct: addProductMutate,
        deleteProduct: deleteProductMutate,
    };
}
