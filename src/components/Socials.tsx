import { navigateTo } from "../utils"
import { GithubIcon, LinkedInIcon } from "./shared/Icons"

function Socials() {
	return (
		<div className="flex items-center gap-2">
			<span className="flex group cursor-pointer items-center gap-2" onClick={() => navigateTo("https://github.com/c5vargas")}>
				<GithubIcon className="w-8 h-8 text-white" />
				<p className="text-[0px] text-gray-50 duration-500 group-hover:text-sm">Ir a Github</p>
			</span>
			<span className="flex group cursor-pointer items-center gap-2" onClick={() => navigateTo("https://www.linkedin.com/in/carles-vargas")}>
				<LinkedInIcon className="w-8 h-8 text-white" />
				<p className="text-[0px] text-gray-50 duration-500 group-hover:text-sm">Ir a LinkedIn</p>
			</span>
		</div>
	)
}

export default Socials