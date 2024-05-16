import AboutMeCard from "../components/AboutMeCard";
import HomeSlider from "../components/HomeSlider";
import StackSection from "../components/StackSection";
import ProjectsSection from "../components/ProjectsSection";

export function HomePage() {	
	return (
		<main className="bg-gray-950 text-gray-100">
			<HomeSlider />

			<section className="container mx-auto px-4 md:px-0">
				<AboutMeCard />
				<ProjectsSection />
			</section>
			
			<StackSection />
		</main>
	)
}
