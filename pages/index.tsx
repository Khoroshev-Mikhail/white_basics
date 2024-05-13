import Header from "@/components/01Header";
import About from "@/components/02About";
import Roadmap from "@/components/03Roadmap";
import Tokenomics from "@/components/04Tokenomics";
import Partners from "@/components/05Partners";
import Footer from "@/components/06Footer";


export default function Home() {

    return (
        <main className="select-none relative">
            <Header />
            <About />
            <Roadmap />
            <Tokenomics />
            <Partners />
            <Footer />
        </main>
    );
}
