import { useEffect, useState } from "react";
import Image from "next/image";
import Social from "@/components/00Social";
import burger from "../public/img/01Header/burger.svg"
import cross from "../public/img/01Header/cross.svg"
// import main from "../public/img/01Header/main.mp4"
import main_mobile from "../public/img/01Header/main_mobile.MP4"

export default function Header(){
    const [showButton, setShowButton] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [isHidden, setIsHidden] = useState(true);
    const [height, setHeight] = useState<number>()

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setShowButton(currentPosition > scrollPosition);
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

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


    useEffect(()=>{
        setHeight(document.getElementById('Header')?.offsetHeight)
        // console.log(main)
    }, [])



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
        <>
            {/* Выпадающая менюшка */}
            <div className={`${isHidden ? 'hidden' : 'block'} md:!hidden fixed z-50 top-0 left-0 w-full min-h-screen max-h-screen bg-white flex flex-col justify-center`}>
                <Image fetchPriority="high" className="fixed top-[15px] right-[20px] cursor-pointer " src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
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

            {/* Фиксированная шапка меню */}
            <div id="menu" className="fixed z-40 top-0 px-[20px] md:px-[40px] md:py-[20px] py-[15px]  w-full bg-[#FFFFFF] text-black">
                <div className="_wrapper flex justify-between">
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
            </div>

            {/* Секция с видео (она тоже фикс) */}
            <section id="Header" className="_section fixed top-0 z-20 min-h-svh  bg-black overflow-hidden ">
                <div className="relative z-20 w-full h-full min-h-svh flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                    
                    <div className="z-0 absolute w-full h-full bg-white top-0 left-0 p-2 pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                        <div className="bg-black rounded-[10px] w-full h-full">
                        </div>
                    </div>
                
                    <div className={`relative z-20 w-full md:w-[2/3] h-full px-2 overflow-hidden flex flex-col justify-center rounded-[10px]`}>
                        <video autoPlay muted playsInline className="block object-cover w-full md:w-2/3 md:mx-auto md:h-full  max-w-full rounded-[10px]" >
                            <source src="/img/01Header/main.mp4" type="video/mp4" media="(min-width: 768px)"/>
                            <source src={main_mobile} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </section>
            
            {/* Заглушка с отступом для секции с видео */}
            <div className={`pt-[${height}px] relative -z-50 min-h-screen`}></div>

            {showButton &&
                <div className="fixed z-50 w-full flex justify-center left-0 bottom-[15%] md:bottom-[5%] _opacity_animation">
                    <a className={`block mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] cursor-pointer uppercase rounded-[100px] bg-[#FFFFFF] border-[1px] border-black hover:bg-[#F1F1F1] hover:shadow-inner text-[16px] md:text-[18px] text-[#303030]`}>Buy</a>
                </div>
            }
        </>
    )
}