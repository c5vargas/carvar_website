import HomeSlider from "../components/HomeSlider";
import barcode from '../assets/img/barcode.svg'
import { ButtonPrimary } from "../components/shared/Button";

export function HomePage() {
	return (
		<main className="bg-gray-900 text-gray-100">
			<HomeSlider />

			<section className="container mx-auto">

				<article className="flex items-center gap-12 py-20 min-h-[300px]">
					<div>
						<div className='h-10 w-full bg-contain' style={{backgroundImage: `url(${barcode})`}}></div>
						<h2 className="f-ramsey text-4xl uppercase">Lorem ipsum lorem<br /> sit amet</h2>
					</div>

					<div className="flex flex-col gap-4 max-w-[500px] w-full rounded-xl border p-5 border-gray-50">
						<p className="f-mono">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vitae aperiam aliquid nobis dolorem distinctio tenetur beatae illum inventore quibusdam? Labore cum incidunt adipisci. Et reiciendis deserunt laudantium accusantium illo.</p>
						<p className="f-mono">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam vitae aperiam aliquid nobis dolorem distinctio tenetur beatae illum inventore quibusdam? Labore cum incidunt adipisci. Et reiciendis deserunt laudantium accusantium illo.</p>

						<ButtonPrimary />
					</div>

				</article>
			</section>
		</main>
	)
}