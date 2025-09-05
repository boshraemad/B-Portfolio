import { Outlet } from "react-router";
import NavBar from "../components/navbar";
import Footer from "../sections/footer";

function HomePage() {
	return (
		<div className="grid grid-rows-[auto_minmax(600px,_1fr)_auto] bg-black">
			<NavBar />
			<main className="p-2">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
