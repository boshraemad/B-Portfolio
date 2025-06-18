import HomePage from "./pages/homePage"
import { Routes, Route } from "react-router";
import './index.css'
import HomePageLayout from "./pages/homePageLayout";
import Projects from "./pages/projects";
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route index element={<HomePageLayout/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
