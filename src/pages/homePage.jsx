import NavBar from "../components/navbar";
import Landing from "../components/landing";
import AboutMe from "../sections/aboutMe";
import Stats from "../sections/stats";
import Footer from "../sections/footer";
function HomePage(){
    return(
       <div>
         <NavBar/>
         <Landing/>
         <AboutMe/>
         <Stats/>
         <Footer/>
       </div>
    )
}

export default HomePage;