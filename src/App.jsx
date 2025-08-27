import "flowbite";
import HomePage from "./pages/homePage";
import { Routes, Route, Navigate } from "react-router";
import "./index.css";
import HomePageLayout from "./pages/homePageLayout";
import Projects from "./pages/projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useNavigate } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./api/supabase-client";

const queryClient = new QueryClient();

function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  const fetchSession = useCallback(
    () => async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      if (session) {
        navigate("/home");
      }
    },
    [session]
  );

  useEffect(() => {
    fetchSession();
    //listen for login
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          navigate("/home");
        }
      }
    );
  }, [fetchSession]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePageLayout />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
