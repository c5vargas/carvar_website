import Spline from '@splinetool/react-spline';
import barcode from '../assets/img/barcode.svg'

function HomeSlider() {
	return (
		<section className="relative text-gray-100 h-screen bg-cover md:bg-contain bg-black">
			<div className="absolute z-50 p-10 top-20 w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0 md:z-0 md:bg-transparent">
				<article className="border-[1px] p-4 border-gray-100">
					<h1 className="text-3xl f-mono mb-2">Carles Vargas</h1>
					<p className="text-sm text-gray-300 leading-4 f-mono">Explora mi portafolio y descubre cómo podemos trabajar juntos para llevar tu proyecto al siguiente nivel.</p>
				</article>

				<article className="border-t border-gray-100 hidden md:block" />

				<article className="border-[1px] p-4 border-gray-100 hidden md:block">
					<h1 className="text-3xl f-mono mb-2">Frontend Developer</h1>
					<p className="text-xs text-gray-300 leading-4 f-mono">Mi objetivo es fusionar la estética con la funcionalidad para crear 
					experiencias de usuario cautivadoras y altamente efectivas. ¿Tienes una idea en mente? ¡Déjame ayudarte a convertirla en realidad!</p>
				</article>

				<div className="text-xs text-gray-300 my-10 f-mono hidden md:block max-w-[36ch]">
						Me apasiona diseñar y codificar proyectos
						desde cero, creando interfaces intuitivas
						y atractivas que cautiven a los usuarios.
				</div>
			</div>

			<div className="absolute p-10 bottom-10 w-full grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-3 z-50 md:z-0">
				<article>
					<p className="text-sm text-gray-300 leading-4 f-mono">Considero que la simplicidad es una regla de oro en el diseño web. 
					Mi enfoque se centra en estructuras de contenido simples, patrones de diseño limpios e interacciones 
					reflexivas para brindar a tu audiencia una experiencia positiva y agradable.</p>
				</article>

				<article />

				<article className="border-[1px] rounded-lg p-4 border-gray-100">
					<div className="hidden md:flex items-center gap-3">
						<div className="w-1/2">
							<div className='h-6 w-full bg-contain' style={{backgroundImage: `url(${barcode})`}}></div>
						</div>

						<div className="w-1/2">
							<span className="h-6 f-ramsey text-3xl text-gray-300 tracking-widest mb-1">VOL.0.24</span>
						</div>
					</div>

					<div className="block md:flex items-center gap-3">
						<div className="w-full md:w-1/2">
							<span className="h-3 text-gray-300 f-mono font-semibold tracking-wider">DESIGNED·BY·CARVAR</span>
						</div>

						<div className="w-full md:w-1/2">
							<div className='h-3 w-full' style={{backgroundImage: `url(${barcode})`}}></div>
						</div>
					</div>
				</article>
			</div>

			<div className="absolute left-0 top-0 h-full w-full md:hidden bg-black bg-opacity-75 z-10" />
			<Spline className="absolute left-0 top-0" scene="https://prod.spline.design/J-e73clV8V0xMcFE/scene.splinecode" />
		</section>
	)
}

export default HomeSlider