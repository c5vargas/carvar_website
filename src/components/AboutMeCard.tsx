import { ButtonPrimary } from "./shared/Button/Button";
import barcode from '../assets/img/barcode.svg'
import aboutMe from "../assets/img/txt_about_me.png"
import sphere from "../assets/img/sphere.webp"

function AboutMeCard() {
	return (
			<article className="flex flex-col py-20 min-h-[300px] md:flex-row md:items-center md:justify-end gap-12 bg-cover shadow-lg border-b border-gray-950 bg-top" style={{backgroundImage: `url(${sphere})`}}>
				<div className='hidden md:block h-[512px] w-[512px] w-full bg-contain bg-no-repeat' style={{backgroundImage: `url(${aboutMe})`}}></div>

				<div className="flex flex-col gap-4 max-w-[500px] w-full rounded-2xl border p-8 border-gray-50 bg-gray-900 bg-opacity-75">
					<div className='h-10 w-full bg-contain' style={{backgroundImage: `url(${barcode})`}}></div>
					<h2 className="f-ramsey text-4xl uppercase">Detrás de la Pantalla</h2>
					<p className="f-mono">Con una mentalidad centrada en el usuario y un ojo meticuloso para el detalle, 
						me esfuerzo por crear experiencias digitales que no solo sean estéticamente atractivas, 
						sino también intuitivas y eficientes.</p>

					<p className="f-mono">Fuera del mundo del desarrollo, me encanta sumergirme en el deporte, 
					explorar nuevas tecnologías y disfrutar de una buena taza de café mientras me sumerjo en 
					la escritura de código.</p>

					<ButtonPrimary label="Mas información" onClick={() => console.log('clicked')} />
				</div>
		</article>
	)
}

export default AboutMeCard