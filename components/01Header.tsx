import Image from "next/image"
import burger from "../public/img/01Header/burger.svg"
import cross from "../public/img/01Header/cross.svg"
import { useEffect, useState } from "react";
import Social from "./00Social";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true);
    // запретить скролл при isHidden true

    const [showButton, setShowButton] = useState<boolean>(false);
    useEffect(() => {
        const video = document.querySelector("video");
        const handleVideoTimeUpdate = () => {
            if(video){
                const videoDuration = video.duration;
                const currentTime = video.currentTime;
                const timeUntilEnd = videoDuration - currentTime;
                const threshold = 3; 
                if (timeUntilEnd <= threshold) {
                    setShowButton(true);
                }
            }
        };

        if (video) {
            video.addEventListener("timeupdate", handleVideoTimeUpdate);
            return () => {
                video.removeEventListener("timeupdate", handleVideoTimeUpdate);
            };
        }
    }, []);

    const [activeSection, setActiveSection] = useState<number | null>(null);

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


    return(
        <section id="Header" className="_section relative z-50 min-h-screen max-h-screen bg-black overflow-hidden ">
            <div className="relative w-full h-full min-h-screen max-h-screen flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px]">

            <div className={`${isHidden ? 'hidden' : 'block'} md:!hidden fixed z-50 top-0 left-0 w-full min-h-screen max-h-screen bg-white flex flex-col justify-center`}>
            <Image className="fixed top-[15px] right-[20px] cursor-pointer " src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                    
                    <menu className={`uppercase block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                        <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#About">About</a></li>
                        <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#Tokenomics">Tokemomics</a></li>
                        <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#Partners">Partners</a></li>
                        <li  onClick={()=> setIsHidden(true) }  className="flex justify-center md:justify-start w-full mt-3 md:mt-5 py-[60px] xl:py-[100px] ">
                            <Social />
                        </li>
                    </menu>
                </div>
            </div>   

                <div id="menu" className="fixed z-40 top-0 px-[20px] md:px-[40px] md:py-[20px] py-[15px] flex justify-between w-full bg-[#FFFFFF] text-black">
                    <div className="hidden md:block  text-[20px]">
                        <ul className="flex gap-x-[50px]">
                            <li onClick={()=>setActiveSection(0)} className={`${ activeSection === 1 ? 'font-bold' : ''}`}><a href="#About">About</a></li>
                            <li onClick={()=>setActiveSection(1)} className={`${ activeSection === 2 ? 'font-bold' : ''}`}><a href="#Roadmap">Roadmap</a></li>
                            <li onClick={()=>setActiveSection(2)} className={`${ activeSection === 3 ? 'font-bold' : ''}`}><a href="#Tokenomics">Tokenomics</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Social />
                    </div>
                    <div className="md:hidden flex flex-col justify-center" onClick={()=> setIsHidden(false) }>
                        <Image src={burger} alt="menu" />
                    </div>
                </div>

                <div className="w-full h-full">
                    <video autoPlay muted playsInline className="block mx-auto w-full md:w-auto h-auto">
                    {/* poster="/img/01Header/loading.gif" */}
                        <source src="/img/01Header/main.MP4" type="video/mp4"/>
                    </video>
                    {showButton &&
                        <div className="absolute w-full flex justify-center bottom-[10%] md:bottom-[5%] _opacity_animation">
                            <a className="block mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] uppercase rounded-[100px] bg-[#FFFFFF] text-[16px] md:text-[18px] text-[#303030]">Buy</a>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}