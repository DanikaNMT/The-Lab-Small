import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {addProduct, getProducts} from "../services/dataService.ts"
import {ProductData} from "@/models/Product.ts";

export function useProducts() {
    const queryClient = useQueryClient();

    const {isLoading, isError, data: products} = useQuery({queryKey: ['products'], queryFn: () => getProducts()})

    const {
        mutate,
    } = useMutation(
        {
            mutationFn: (item:ProductData) => addProduct(item),
            onSuccess: () => queryClient.invalidateQueries({queryKey: ['products']}),
        });
    return {
        isLoading,
        isError,
        products,
        addProduct: mutate,
    }
}
