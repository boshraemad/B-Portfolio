import "flowbite";
import HomePage from "./pages/homePage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import HomePageLayout from "./pages/homePageLayout";
import Projects from "./pages/projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./components/Theme-Provider";
const queryClient = new QueryClient();

function App() {
  return (
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePageLayout />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </QueryClientProvider>
   </ThemeProvider>
  );
}

export default App;
