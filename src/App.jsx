import 'flowbite';
import HomePage from "./pages/homePage"
import { Routes, Route } from "react-router";
import './index.css'
import HomePageLayout from "./pages/homePageLayout";
import Projects from "./pages/projects";
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
        <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<HomePageLayout/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
        </Routes>
    </QueryClientProvider>
  )
}

export default App
