import NavBar from "../components/navbar";
import Landing from "../components/landing";

function HomePage(){
    return(
       <div className="p-4">
         <NavBar/>
         <Landing/>
       </div>
    )
}

export default HomePage;