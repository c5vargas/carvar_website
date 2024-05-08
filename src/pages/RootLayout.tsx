import { Outlet } from "react-router-dom";
import logo from "../assets/react.svg"
import Socials from "../components/Socials";
export function RootLayout() {
	return (
		<>
			<header className="flex items-center justify-between px-10 py-4 w-full bg-gray-900 fixed z-20 top-0 left-0 bg-opacity-50">
				<picture>
					<img src={logo} className="w-14" alt="Logo" />
				</picture>

				<Socials />
			</header>

			<main className="w-full">
				<Outlet />
			</main>

			{/* <footer className="fixed p-2 bg-gray-50 shadow bottom-0 left-0 w-full z-20">
				Lorem ipsum footer
			</footer> */}
		</>
	)
}