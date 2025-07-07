import 'flowbite';
import HomePage from "./pages/homePage"
import { Routes, Route, Navigate } from "react-router";
import './index.css'
import HomePageLayout from "./pages/homePageLayout";
import Projects from "./pages/projects";
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Login from './pages/login';
import Signup from './pages/signup';
import ProtectedRoute from './components/protectedRouteWrap';
import { useNavigate } from 'react-router';
import { useState , useEffect } from 'react';
import { supabase } from './supabase/supabase-client';

const queryClient = new QueryClient()

function App() {
  const [session , setSession]=useState(null);
  const navigate=useNavigate();

  const fetchSession=async()=>{
      const {data} = await supabase.auth.getSession();
      setSession(data.session)
      if(session){navigate("/home")}

  }

  useEffect(()=>{
        fetchSession();
        //listen for login
        const { data:listener}=supabase.auth.onAuthStateChange((event , session)=>{
          if(session){navigate("/home")}

      });


  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>}>
          <Route index element={<ProtectedRoute><HomePageLayout/></ProtectedRoute>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
        </Routes>
    </QueryClientProvider>
  )
}

export default App
