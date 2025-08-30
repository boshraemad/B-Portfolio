import NavBar from "../components/navbar";
import Footer from "../sections/footer";
import { Outlet } from "react-router-dom";
function HomePage(){

    return(
       <div className="grid grid-rows-[auto_minmax(600px,_1fr)_auto]">
         <NavBar/>
          <Outlet/>
          <Footer/>
       </div>
    )
}

export default HomePage;