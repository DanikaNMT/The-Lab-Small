import axios from 'axios'
import {Product, ProductData} from "@/models/Product.ts";

export async function getProducts() {
    const {data} = await axios.get<Product[]>(`/products`)
    return data
}

export const addProduct = (productData: ProductData) => {
    return axios.post('/products', productData)
}

export const deleteProduct = (productId: string) => {
    return axios.delete(`/products/${productId}`)
}




