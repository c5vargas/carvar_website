import AboutMeCard from "../components/AboutMeCard";
import HomeSlider from "../components/HomeSlider";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import stackJSON from "../mocks/stack.json"
import portfolioJSON from "../mocks/portfolio.json"
import { useState } from "react";
import { Project } from "../types";

export function HomePage() {
	const [modal, setModal] = useState<Project | null>(null)

	const handleClose = () => {
		setModal(null)
	}
	
	return (
		<main className="bg-gray-950 text-gray-100">
			<HomeSlider />

			<section className="container mx-auto px-4 md:px-0">
				<AboutMeCard />

				<article className="py-20">
					<div className="p-0 md:p-10 rounded-lg text-center">
						<h2 className="f-ramsey text-3xl md:text-6xl uppercase mb-4">Proyectos</h2>
						<p className="f-mono max-w-[902px] mx-auto mb-10">Encontrarás una selección cuidadosamente curada de proyectos en los que he tenido el privilegio de trabajar. 
							Desde sitios web elegantes hasta aplicaciones interactivas, cada proyecto representa un desafío único y una oportunidad para dar vida a ideas innovadoras.</p>
					</div>

					<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
						{ portfolioJSON.map(el => (
							<ProjectCard key={el.name} project={el} onClick={setModal} />
						))}
					</div>

					<ProjectDetails project={modal} onClose={handleClose} />
				</article>

				<article className="py-20">
					<h2 className="text-center f-ramsey text-4xl uppercase mb-4">Mi Tech Stack</h2>
					<p className="text-center f-mono max-w-[902px] mx-auto text-lg">Como desarrollador frontend, he construido mi propio arsenal de herramientas y tecnologías
						que me permiten llevar a cabo proyectos de manera eficiente y con resultados excepcionales.
						Aquí tienes una vista rápida de mi Stack técnico.</p>

					<div className="grid grid-cols-2 mx-auto sm:grid-cols-3 md:grid-cols-4 gap-4 mt-16">
					{ stackJSON.map(el => (
						<article className="relative group flex items-center justify-center overflow-hidden shadow-xl w-full aspect-square rounded-3xl cursor-pointer">
							<div 
								className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-125 bg-gray-950 bg-opacity-25 filter grayscale-[0.6]" 
								style={{backgroundImage: `url(/assets/stack/${el}.svg)`}} />

							<div className="absolute w-full h-full flex flex-col items-start justify-end p-6">
								<h3 className="f-ramsey text-3xl uppercase mb-2">{ el }_</h3>
							</div>
						</article>
					))}
					</div>
				</article>

			</section>
		</main>
	)
}
