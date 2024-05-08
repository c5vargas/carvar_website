import { Project } from "../types"
import { ArrowUpRight } from "./shared/Icons"

interface Props {
	project: Project
	onClick: (project: Project) => void
}

function ProjectCard({ project, onClick }: Props) {
	const handleClick = () => {
		onClick(project)
	}
	
	return project && (
		<article className="relative group flex items-center justify-center overflow-hidden shadow-xl w-full h-[412px] lg:h-[512px] rounded-3xl cursor-pointer" onClick={handleClick}>
				<div 
					className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-125 bg-blend-multiply bg-gray-500" 
					style={{backgroundImage: `url(/assets/portfolio/${project.images[0]})`}} />
				<div className="absolute w-full h-full flex flex-col items-start justify-end p-6">
					<h3 className="f-ramsey text-3xl uppercase mb-2">{ project.name }_</h3>
					<p className="f-mono text-sm">{ project.extract }</p>
					<span className="f-mono absolute start-3 top-2 rounded-full bg-gray-950 bg-opacity-75 px-4 py-2">
						{ project.stack }</span>

					<span className="flex items-center justify-center text-gray-950 absolute -end-10 top-4 w-9 h-9 rounded-full bg-gray-50 duration-500 group-hover:end-4 hover:bg-gray-900 hover:text-gray-50">
						<ArrowUpRight className="w-5 h-5" />
					</span>
				</div>
		</article>
	)
}

export default ProjectCard