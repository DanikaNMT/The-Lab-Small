import axios from 'axios'
import {Product, ProductData} from "@/models/Product.ts";

export async function getProducts() {
    const {data} = await axios.get<Product[]>(`/products`)
    return data
}

export const addProduct = (productData: ProductData) => {
    return axios.post('/products', productData)
}

/*export async function deleteMedication(medicationId: number) {
    const { data } = await axios.delete(`/medication/${medicationId}`);
    return data;
}*/



