import { Outlet } from "react-router-dom";
import logo from "../assets/carvar.svg"
import Socials from "../components/Socials";
export function RootLayout() {
	return (
		<>
			<header className="flex items-center justify-between px-10 py-4 w-full bg-gray-950 fixed z-20 top-0 left-0 bg-opacity-75">
				<figure>
					<img src={logo} className="w-32 h-14" alt="Logo" />
				</figure>

				<Socials />
			</header>

			<main className="w-full">
				<Outlet />
			</main>
		</>
	)
}