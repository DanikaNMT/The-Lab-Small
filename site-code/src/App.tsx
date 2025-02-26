import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ProductScreenHandmatig} from "@/components/Handmatig/productScreenHandmatig.tsx";
import {CreateProductHandmatig} from "@/components/Handmatig/createProductHandmatig.tsx";
import axios from 'axios';
import {ProductScreenChatGPT} from "@/components/ChatGPT/productScreenChatGPT.tsx";
import {MainScreen} from "@/components/mainScreen.tsx";

const queryClient = new QueryClient()
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL




function App() {
    return(
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainScreen/>}/>
                        <Route path="/versie1" element={<ProductScreenHandmatig />}/>
                        <Route path="/versie1/create" element={<CreateProductHandmatig />}/>

                        <Route path="/versie2" element={<ProductScreenChatGPT />}/>
                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
  )
}

export default App;