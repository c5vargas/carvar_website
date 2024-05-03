import Spline from '@splinetool/react-spline';
import barcode from '../assets/img/barcode.svg'

function HomeSlider() {
	return (
		<section className="relative text-gray-100 h-screen bg-cover md:bg-contain bg-black">
			<div className="absolute z-50 p-10 top-20 w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0 md:z-0 md:bg-transparent">
				<article className="border-[1px] p-4 border-gray-100">
					<h1 className="text-3xl f-mono">WWW.CARVAR.ES</h1>
					<p className="text-sm leading-4 f-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
						Eaque repellat id adipisci.</p>
				</article>

				<article className="border-t border-gray-100 hidden md:block" />

				<article className="border-[1px] p-4 border-gray-100 hidden md:block">
					<h1 className="text-3xl f-mono">Frontend Developer</h1>
					<p className="text-xs leading-4 f-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
						Eaque repellat id adipisci ipsum dolor sit amet consectetur, adipisicing elit. </p>
				</article>

				<div className="text-xs my-10 f-mono hidden md:block">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
					Ducimus ab non voluptatum. Debitis deserunt incidunt <br/>
					nostrum fugit, doloremque voluptate illum non cumque optio.
				</div>
			</div>

			<div className="absolute p-10 bottom-10 w-full grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-3 z-50 md:z-0">
				<article>
					<p className="text-sm leading-4 f-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Ea commodi sit rem facere sequi reiciendis omnis, corporis, excepturi tenetur voluptas 
					blanditiis incidunt autem numquam earum adipisci libero distinctio, consectetur praesentium.
					consectetur adipisicing elit ea commodi sit rem facere sequi reiciendis omnis, corporis, excepturi.</p>
				</article>

				<article />

				<article className="border-[1px] rounded-lg p-4 border-gray-100">
					<div className="hidden md:flex items-center gap-3">
						<div className="w-1/2">
							<div className='h-6 w-full bg-contain' style={{backgroundImage: `url(${barcode})`}}></div>
						</div>

						<div className="w-1/2">
							<span className="h-6 f-ramsey text-3xl tracking-widest mb-1">VOL.0.24</span>
						</div>
					</div>

					<div className="block md:flex items-center gap-3">
						<div className="w-full md:w-1/2">
							<span className="h-3 f-mono font-semibold tracking-wider">DESIGNED·BY·CARVAR</span>
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