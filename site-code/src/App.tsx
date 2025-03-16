import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ProductScreenHandmatig} from "@/components/1. Handmatig/productScreenHandmatig.tsx";
import {CreateProductHandmatig} from "@/components/1. Handmatig/createProductHandmatig.tsx";
import axios from 'axios';
import {ProductScreenChatGPT} from "@/components/2. ChatGPT/productScreenChatGPT.tsx";
import {MainScreen} from "@/components/mainScreen.tsx";
import ProductFormChatGPT from "@/components/2. ChatGPT/createProductChatGPT.tsx";
import ProductScreenDeepseek from "@/components/3. Deepseek/productScreenDeepseek.tsx";
import ProductScreenGemini from "@/components/4. Gemini/productScreenGemini.tsx";
import {ProductScreenPerplexity} from "@/components/5. Perplexity/productScreenPerplexity.tsx";
import CreateProductDeepseek from "@/components/3. Deepseek/createProductDeepseek.tsx";
import CreateProductScreenGemini from "@/components/4. Gemini/createProductGemini";
import {CreateProductPerplexity} from "@/components/5. Perplexity/createProductPerplexity.tsx";
import HomePageClaude from "@/components/6. Claude/homePageClaude.tsx";
import CreatePage from "@/components/6. Claude/createPageClaude.tsx";

const queryClient = new QueryClient()
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL




function App() {
    return(
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainScreen/>}/>

                        <Route path="/version1" element={<ProductScreenChatGPT />}/>
                        <Route path="/version1/create" element={<ProductFormChatGPT />}/>

                        <Route path="/version2" element={<HomePageClaude />}/>
                        <Route path="/version2/create" element={<CreatePage />}/>

                        <Route path="/version3" element={<ProductScreenPerplexity />}/>
                        <Route path="/version3/create" element={<CreateProductPerplexity />}/>

                        <Route path="/version4" element={<ProductScreenHandmatig />}/>
                        <Route path="/version4/create" element={<CreateProductHandmatig />}/>

                        <Route path="/version5" element={<ProductScreenDeepseek />}/>
                        <Route path="/version5/create" element={<CreateProductDeepseek />}/>

                        <Route path="/version6" element={<ProductScreenGemini />}/>
                        <Route path="/version6/create" element={<CreateProductScreenGemini />}/>


                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
  )
}

export default App;