import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MainScreen} from "@/components/MainScreen.tsx";
import JobInfo from "@/components/jobs/jobInfo.tsx";
import CreateJob from "@/components/jobs/createJob.tsx";
const queryClient = new QueryClient()


function App() {
    return(
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainScreen/>}/>
                        <Route path="/container/:id" element={<JobInfo />}/>
                        <Route path={"/create"} element={<CreateJob />}/>
                    </Routes>
                </BrowserRouter>
        </QueryClientProvider>
  )
}

export default App;