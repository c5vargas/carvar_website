import Spline from '@splinetool/react-spline';
import poster from '../assets/img/poster_cyberpunk_16.jpg'
import barcode from '../assets/img/barcode.svg'

export function HomePage() {

	// style={{backgroundImage: `url(${poster})`}}

	return (
		<main>
			<section className="relative text-gray-100 h-screen bg-cover md:bg-contain bg-black">

				<div className="absolute p-10 top-20 w-full grid grid-cols-3">
					<article className="border-[1px] p-4 border-gray-100">
						<h1 className="text-3xl">WWW.CARVAR.ES</h1>
						<p className="text-sm leading-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
							Eaque repellat id adipisci.</p>
					</article>

					<article className="border-t border-gray-100" />

					<article className="border-[1px] p-4 border-gray-100">
						<h1 className="text-3xl">Frontend Developer</h1>
						<p className="text-xs leading-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
							Eaque repellat id adipisci ipsum dolor sit amet consectetur, adipisicing elit. </p>
					</article>

					<div className="text-xs my-10">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
						Ducimus ab non voluptatum. Debitis deserunt incidunt <br/>
						nostrum fugit, doloremque voluptate illum non cumque optio.
					</div>
				</div>

				<div className="absolute p-10 bottom-10 w-full grid grid-cols-3">
					<article>
						<p className="text-sm leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Ea commodi sit rem facere sequi reiciendis omnis, corporis, excepturi tenetur voluptas 
						blanditiis incidunt autem numquam earum adipisci libero distinctio, consectetur praesentium.
						consectetur adipisicing elit ea commodi sit rem facere sequi reiciendis omnis, corporis, excepturi.</p>
					</article>

					<article />

					<article className="border-[1px] rounded-lg p-4 border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-full">
								<div className='h-6 w-full bg-contain' style={{backgroundImage: `url(${barcode})`}}></div>
							</div>

							<div className="w-full">
								<span className="h-6 text-3xl tracking-wider mb-1">V0.05.2024</span>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<div className="w-full">
								<span className="h-3 tracking-wider">DESIGNED·BY·CARVAR</span>
							</div>

							<div className="w-full">
								<div className='h-3 w-full' style={{backgroundImage: `url(${barcode})`}}></div>
							</div>
						</div>
					</article>
				</div>
				
				<Spline className="absolute left-0 top-0" scene="https://prod.spline.design/J-e73clV8V0xMcFE/scene.splinecode" />
			</section>
		</main>
	)
}