import Socials from "./Socials"

function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="mt-20 container mx-auto flex items-center justify-between bg-gray-950 bg-opacity-75 border border-gray-700 p-4 rounded-2xl w-full">
			<p>©{ year } www.carvar.es | La mayoría de los derechos están retenidos.</p>
			<section>
				<Socials />
			</section>
		</footer>
	)
}

export default Footer