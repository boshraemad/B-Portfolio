import NavBar from "../components/navbar";
import Landing from "../components/landing";
import Separator from "../components/separator";
import AboutMe from "../sections/aboutMe";
import Stats from "../sections/stats";
function HomePage(){
    return(
       <div className="p-6">
         <NavBar/>
         <Landing/>
         <AboutMe/>
         <Stats/>
       </div>
    )
}

export default HomePage;