import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import portfolioJSON from "../mocks/portfolio.json"
import { Project } from "../types";

function ProjectsSection() {
	const [modal, setModal] = useState<Project | null>(null)

	const handleClose = () => {
		setModal(null)
	}

	return (
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
	)
}

export default ProjectsSection