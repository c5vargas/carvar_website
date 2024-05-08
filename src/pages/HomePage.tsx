import AboutMeCard from "../components/AboutMeCard";
import HomeSlider from "../components/HomeSlider";
import stackJSON from "../mocks/stack.json"
import portfolioJSON from "../mocks/portfolio.json"

import ProjectCard from "../components/ProjectCard";

export function HomePage() {
	return (
		<main className="bg-gray-900 text-gray-100">
			<HomeSlider />

			<section className="container mx-auto px-4 md:px-0">
				<AboutMeCard />

				<article className="py-20">
					<h2 className="text-center f-ramsey text-4xl uppercase mb-4">Mi Tech Stack</h2>
					<p className="text-center f-mono max-w-[902px] mx-auto text-lg">Como desarrollador frontend, he construido mi propio arsenal de herramientas y tecnologías
						que me permiten llevar a cabo proyectos de manera eficiente y con resultados excepcionales.
						Aquí tienes una vista rápida de mi Stack técnico.</p>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex md:justify-center mx-auto gap-6 mt-16">
						{ stackJSON.map(el => (
							<div className="text-center" key={el}>
								<img className="w-28 -hue-rotate-60 opacity-50 mb-1 mx-auto cursor-pointer duration-500 hover:scale-125 hover:opacity-100" src={`/assets/stack/${el}.svg`} alt={el} />
								<p className="f-mono">{el}</p>
							</div>
						))}
					</div>
					
				</article>

				<article className="py-20">

					<div className="p-10 rounded-lg text-center">
						<h2 className="f-ramsey text-4xl uppercase mb-4">Mis proyectos</h2>
						<p className="f-mono max-w-[902px] mx-auto mb-10">Encontrarás una selección cuidadosamente curada de proyectos en los que he tenido el privilegio de trabajar. 
							Desde sitios web elegantes hasta aplicaciones interactivas, cada proyecto representa un desafío único y una oportunidad para dar vida a ideas innovadoras.</p>
					</div>

					<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
						{ portfolioJSON.map(el => (
							<ProjectCard key={el.name} project={el} />
						))}
					</div>

				</article>

			</section>
		</main>
	)
}