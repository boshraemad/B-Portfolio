import NavBar from "../components/navbar";
import Landing from "../components/landing";
import Separator from "../components/separator";
import AboutMe from "../sections/aboutMe";
function HomePage(){
    return(
       <div className="p-6">
         <NavBar/>
         <Landing/>
         <AboutMe/>
       </div>
    )
}

export default HomePage;