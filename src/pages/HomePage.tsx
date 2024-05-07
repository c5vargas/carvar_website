import AboutMeCard from "../components/AboutMeCard";
import HomeSlider from "../components/HomeSlider";
import stackJSON from "../mocks/stack.json"
import poster from "../assets/img/project.jpeg"

export function HomePage() {
	return (
		<main className="bg-gray-900 text-gray-100">
			<HomeSlider />

			<section className="container mx-auto px-4 md:px-0">
				<AboutMeCard />

				<article className="py-28">
					<h2 className="text-center f-ramsey text-4xl uppercase mb-4">Mi Tech Stack</h2>
					<p className="text-center f-mono max-w-[902px] mx-auto text-lg">Como desarrollador frontend, he construido mi propio arsenal de herramientas y tecnologías
						que me permiten llevar a cabo proyectos de manera eficiente y con resultados excepcionales.
						Aquí tienes una vista rápida de mi Stack técnico.</p>

					<div className="grid grid-cols-3 md:flex md:justify-center mx-auto gap-6 mt-16">
						{ stackJSON.map(el => (
							<div className="text-center" key={el}>
								<img className="w-28 -hue-rotate-60 opacity-50 mb-1 mx-auto cursor-pointer duration-500 hover:scale-125 hover:opacity-100" src={`/assets/stack/${el}.svg`} alt={el} />
								<p className="f-mono">{el}</p>
							</div>
						))}
					</div>
					
				</article>

				<article className="py-28">

					<div className="p-10 rounded-lg text-center">
						<h2 className="f-ramsey text-4xl uppercase mb-4">Mis proyectos</h2>
						<p className="f-mono max-w-[902px] mx-auto mb-10">Encontrarás una selección cuidadosamente curada de proyectos en los que he tenido el privilegio de trabajar. 
							Desde sitios web elegantes hasta aplicaciones interactivas, cada proyecto representa un desafío único y una oportunidad para dar vida a ideas innovadoras.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2">
						<article className="relative group flex items-center justify-center m-3 overflow-hidden shadow-xl w-full h-[512px] rounded-2xl cursor-pointer">
								<div 
									className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150 bg-blend-multiply bg-gray-400 filter blur-[1px] animate-blurry-pixel" 
									style={{backgroundImage: `url(${poster})`}} />
								<div className="absolute w-full h-full flex flex-col items-start justify-end p-6">
									<h3 className="f-ramsey text-3xl uppercase mb-2">Rendfitt</h3>
									<p className="f-mono text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto quia adipisci iste suscipit? A omnis dolor non harum illum repellendus, ratione ducimus voluptate odit iste, obcaecati quod eius iusto!</p>
									<span className="f-mono absolute end-3 top-2 rounded-full bg-gray-950 bg-opacity-75 px-4 py-2">Vue.JS</span>
								</div>
						</article>
					</div>

				</article>

			</section>
		</main>
	)
}