import Landing from "../components/landing";
import AboutMe from "../sections/aboutMe";
import Stats from "../sections/stats";
import Footer from "../sections/footer";
function HomePageLayout(){
    return(
        <>
         <Landing/>
         <AboutMe/>
         <Stats/>
         <Footer/>
        </>
    )
}

export default HomePageLayout;