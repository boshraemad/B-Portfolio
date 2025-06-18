import NavBar from "../components/navbar";
import HomePageLayout from "./homePageLayout";
import { Outlet } from "react-router-dom";
function HomePage(){
    return(
       <div>
          <NavBar/>
          <Outlet/>
       </div>
    )
}

export default HomePage;