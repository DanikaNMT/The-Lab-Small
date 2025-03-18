import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addProduct, getProducts, deleteProduct } from '../services/dataService.ts';
import { ProductData } from '@/models/Product.ts';

export function useProducts() {
    const queryClient = useQueryClient();

    const { isLoading, isError, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
    });

    const { mutate: addProductMutate } = useMutation({
        mutationFn: (item: ProductData) => addProduct(item),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    });

    const { mutate: deleteProductMutate } = useMutation({
        mutationFn: async (id: string) => {
            if (products && products.length <= 2) {
                console.log("Only 2 or fewer products left, triggering insertProducts.");
                await insertProducts();
            }
            return deleteProduct(id);
        },
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

// Mock insertProducts function
async function insertProducts() {
    console.log("Inserting new products...");

    const newProduct0: ProductData = {
        imgUrl: "https://th.bing.com/th/id/R.4f713dcf1389efba05151ef361aae9de?rik=eMFPBcyUCqUKXQ&pid=ImgRaw&r=0",
        name: "BunBun",
        price: 18.99,
        amount: 5
    };
    const newProduct1: ProductData = {
        imgUrl: "https://th.bing.com/th/id/OIP.ECGEeBld40kXLjYgEGb1-wHaHa?rs=1&pid=ImgDetMain",
        name: "Uni",
        price: 8.48,
        amount: 8
    };

    const newProduct2: ProductData = {
        imgUrl: "https://th.bing.com/th/id/OIP.2I_-7XihXVhkSG8hsAdidAHaHa?rs=1&pid=ImgDetMain",
        name: "Angy Tutle",
        price: 12.88,
        amount: 89
    };

    const newProduct3: ProductData = {
        imgUrl: "https://th.bing.com/th/id/R.dd4a7745ec775250bd5325466fc3471a?rik=uc%2fA0NfimXn7bg&riu=http%3a%2f%2fcherriebaby.com.au%2fcdn%2fshop%2fproducts%2fjellycat-rose-dragon-huge-soft-toy-jellycat-751404.jpg%3fv%3d1697680875&ehk=fsCQVodZICeKJA5uUgUV5u%2b7oFBmb6manBHCBR2G01o%3d&risl=&pid=ImgRaw&r=0",
        name: "Fierge",
        price: 89.67,
        amount: 34
    };

    const newProduct4: ProductData = {
        imgUrl: "https://th.bing.com/th/id/OIP.F4EnPvYnDlQSXR5wFCBqtwHaHa?rs=1&pid=ImgDetMain",
        name: "Thoothless",
        price: 34.97,
        amount: 52
    };

    const newProduct5: ProductData = {
        imgUrl: "https://th.bing.com/th/id/R.c4edfb3b2023307fc7e2c5b9c8a7a48b?rik=U1VuJR4qpKtDQQ&pid=ImgRaw&r=0",
        name: "cutie",
        price: 34.65,
        amount: 23
    };
    const newProduct6: ProductData = {
        imgUrl: "https://th.bing.com/th/id/R.d5621561a9e9aa8680c1fd12408639c0?rik=rWXAzld%2b3bUngQ&pid=ImgRaw&r=0",
        name: "Pua",
        price: 23.87,
        amount: 81
    };

    const newProduct7: ProductData = {
        imgUrl: "https://th.bing.com/th/id/OIP.z2V2KRV7Y9O0KPSlrOhiawHaG9?rs=1&pid=ImgDetMain",
        name: "Samson",
        price: 18.99,
        amount: 15
    };

    const newProduct8: ProductData = {
        imgUrl: "https://dekikkerkoning.com/wp-content/uploads/2023/02/44YUM6DK.jpg",
        name: "Quacky",
        price: 56.87,
        amount: 31
    };

    const newProduct9: ProductData = {
        imgUrl: "https://th.bing.com/th/id/OIP.45X3n10RrPMyH6JHTcWcJgHaHa?rs=1&pid=ImgDetMain",
        name: "Orange",
        price: 13.67,
        amount: 13
    };

    await addProduct(newProduct0);
    await addProduct(newProduct1);
    await addProduct(newProduct2);
    await addProduct(newProduct3);
    await addProduct(newProduct4);
    await addProduct(newProduct5);
    await addProduct(newProduct6);
    await addProduct(newProduct7);
    await addProduct(newProduct8);
    await addProduct(newProduct9);


}
