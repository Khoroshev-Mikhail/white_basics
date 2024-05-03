import Social from "@/components/00Social";
import Header from "@/components/01Header";
import About from "@/components/02About";
import Roadmap from "@/components/03Roadmap";
import Tokenomics from "@/components/04Tokenomics";
import Partners from "@/components/05Partners";
import Footer from "@/components/06Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParallax } from 'react-scroll-parallax';
import burger from "../public/img/01Header/burger.svg"
import cross from "../public/img/01Header/cross.svg"

export default function Home() {
    // const { ref } = useParallax<HTMLDivElement>({ 
    //     translateY: [0, 0], 
    //     easing: [0, 0, 1, 0.1],
    // });
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [ isHidden, setIsHidden ] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const sections = document.querySelectorAll('section');

        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                setActiveSection(index);
            }
        });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <main className="select-none">
            <div className={`${isHidden ? 'hidden' : 'block'} md:!hidden fixed z-50 top-0 left-0 w-full min-h-screen max-h-screen bg-white flex flex-col justify-center`}>
                <Image className="fixed top-[15px] right-[20px] cursor-pointer " src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                        
                        <menu className={`uppercase block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                            <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#About">About</a></li>
                            <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#Tokenomics">Tokemomics</a></li>
                            <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#Partners">Partners</a></li>
                            <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5  py-[60px] xl:py-[100px] ">
                                <Social />
                            </li>
                        </menu>
                    </div>
            </div> 

            <div id="menu" className="fixed z-40 top-0 px-[20px] md:px-[40px] md:py-[20px] py-[15px] flex justify-between w-full bg-[#FFFFFF] text-black">
                <div className="hidden md:block  text-[20px]">
                    <ul className="flex gap-x-[50px]">
                        <li onClick={()=>setActiveSection(0)} className={`${ activeSection === 1 ? 'font-bold' : ''} hover:text-[#666] cursor-pointer`}><a href="#About">About</a></li>
                        <li onClick={()=>setActiveSection(1)} className={`${ activeSection === 2 ? 'font-bold' : ''} hover:text-[#666] cursor-pointer`}><a href="#Roadmap">Roadmap</a></li>
                        <li onClick={()=>setActiveSection(2)} className={`${ activeSection === 3 ? 'font-bold' : ''} hover:text-[#666] cursor-pointer`}><a href="#Tokenomics">Tokenomics</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <Social />
                </div>
                <div className="md:hidden flex flex-col justify-center" onClick={()=> setIsHidden(false) }>
                    <Image src={burger} alt="menu" />
                </div>
            </div>
            <Header />

                <About />
                <Roadmap />
                <Tokenomics />
                <Partners />
                <Footer />

        </main>
    );
}
