import { Project } from "../types";
import barcode from '../assets/img/barcode.svg'
import { ButtonPrimary } from "./shared/Button/Button";
import { navigateTo } from "../utils";
import Socials from "./Socials";

interface Props {
	project: Project | null
	onClose: () => void
}

function ProjectDetails({ project, onClose }: Props) {
	const images = project?.images.slice(1)

	return project && (
		<div className="fixed top-0 left-0 h-full w-full z-40 bg-gray-950 animation-slide-in m-auto">
			<header className="flex items-center justify-between p-10 mb-10 shadow-lg">
				<button className="duration-500 hover:text-fuchsia-500 hover:blur-[2px] hover:underline f-mono text-lg" onClick={onClose}>[ GO BACK ]</button>

				<Socials />
			</header>
			<div className="container p-4 mx-auto overflow-y-scroll h-full pb-[200px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-3xl md:text-5xl f-ramsey text-gray-50 mb-2">{ project.name }_</h2>
						<p className="text-xl md:text-2xl f-mono text-gray-200 mb-2">{ project.subTitle }</p>
						<div className='h-6 w-full bg-contain mb-4' style={{backgroundImage: `url(${barcode})`}}></div>
						<div className="f-mono text-gray-300 flex flex-col gap-4 mb-8" dangerouslySetInnerHTML={{__html: project.descr}} />
						<ButtonPrimary label="Visitar proyecto" tag="LINK" onClick={() => navigateTo(project.link)} />
					</div>

					<div>
						{ images?.map(img => (
							<img 
								key={img}
								className="border-2 border-gray-800 filter rounded-3xl object-cover w-full mb-4" 
								src={`/assets/portfolio/${img}`} alt="" />

						))}
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default ProjectDetails