import stackJSON from "../mocks/stack.json"
import sphere from "../assets/img/sphere.webp"
import Footer from "./Footer"

function StackSection() {
	return (
		<main className="py-20 px-4 sm:px-0" style={{backgroundImage: `url(${sphere})`}}>
			<section className="container mx-auto">
					<h2 className="text-center f-ramsey text-4xl uppercase mb-4">Mi Tech Stack</h2>
					<p className="text-center f-mono max-w-[902px] mx-auto text-lg">Como desarrollador frontend, he construido mi propio arsenal de herramientas y tecnologías
						que me permiten llevar a cabo proyectos de manera eficiente y con resultados excepcionales.
						Aquí tienes una vista rápida de mi Stack técnico.</p>

					<div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-20 mt-16">
					{ stackJSON.map(item => (
						<article className="rounded-2xl border p-4 border-gray-50 bg-gray-950 bg-opacity-75">
							<h1 className="f-ramsey text-xl uppercase mb-2 mx-auto w-full text-center">{item.title}_</h1>
							<div className="grid grid-cols-3 gap-4">
								{ item.elements.map(el => (
									<article key={el} className="relative group flex flex-col gap-2 items-center w-full aspect-square cursor-pointer">
										<img className="w-20 h-20 transition-all duration-500 ease-in-out transform filter grayscale-[0.6] group-hover:scale-[.9]" src={`/assets/stack/${el}.svg`} alt={el} />
										<span className="f-ramsey text-xs uppercase mb-2">{ el }_</span>
									</article>
								))}
							</div>
						</article>
					))}
					</div>
			</section>

			<Footer />
		</main>
	)
}

export default StackSection