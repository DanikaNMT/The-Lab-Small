import {useQuery} from '@tanstack/react-query'
import {getProducts} from "../services/dataService.ts"

export function useProducts() {
    const {isLoading, isError, data: products} = useQuery({queryKey: ['products'], queryFn: () => getProducts()})
    return {
        isLoading,
        isError,
        products,
    }
}
