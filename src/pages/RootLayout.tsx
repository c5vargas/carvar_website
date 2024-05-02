import { Outlet } from "react-router-dom";
import logo from "../assets/react.svg"
export function RootLayout() {
	return (
		<>
			<header className="flex items-center px-10 py-4 w-full bg-gray-900 fixed z-50 top-0 left-0 bg-opacity-50">
				<picture>
					<img src={logo} className="w-14" alt="Logo" />
				</picture>
			</header>

			<main className="w-full">
				<Outlet />
			</main>

			<footer className="fixed p-2 bg-gray-50 shadow bottom-0 left-0 w-full">
				Lorem ipsum footer
			</footer>
		</>
	)
}