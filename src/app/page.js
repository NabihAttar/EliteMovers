import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/About/About1";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Features from "@/components/sections/features/Features";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/heros/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import Skills1 from "@/components/sections/Skills/Skills1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import FooterStack from "@/components/shared/wrappers/FooterStack";
import Brands1 from "@/components/sections/brands/Brands1";
export default function Home() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} isHeaderTop={true} />
			<main>
				<Hero />
				<Features />
				<About1 />
				<Services1 />
				<Funfact1 />
				{/* <Skills1 /> */}
				{/* <Testimonials1 /> */}
				{/* <Portfolios1 /> */}
				{/* <Blogs1 /> */}
				<Brands1/>
			</main>
			<FooterStack>
				<Footer />
			</FooterStack>
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
