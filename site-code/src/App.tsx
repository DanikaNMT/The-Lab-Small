import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MainScreen} from "@/components/Handmatig/MainScreen.tsx";
import {CreateProduct} from "@/components/Handmatig/createProduct.tsx";
import axios from 'axios';

const queryClient = new QueryClient()
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL




function App() {
    return(
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainScreen/>}/>
                        <Route path="/create" element={<CreateProduct />}/>
                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
  )
}

export default App;