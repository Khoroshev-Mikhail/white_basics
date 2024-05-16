import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Social from "@/components/00Social";
import burger from "../public/img/01Header/burger.svg"
import cross from "../public/img/01Header/cross.svg"
import main from "../public/img/01Header/main.MP4"
import main_mobile from "../public/img/01Header/main_mobile.MP4"




export default function Header(){
    const [showButton, setShowButton] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [isHidden, setIsHidden] = useState(true);
    const [height, setHeight] = useState<number>()
    const [isMobile, setIsMobile] = useState<boolean>(false)

    // useEffect(() => {
    //     const handleResize = () => {
    //         if(window.innerWidth <= 767){
    //             setIsMobile(true)
    //         } else{
    //             setIsMobile(false)
    //         }
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []); 

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


    useLayoutEffect(()=>{
        setHeight(document.getElementById('Header')?.offsetHeight)
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        setIsMobile(isMobile)
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
            setScrollPosition(window.scrollY)
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
                <Image fetchPriority="high" className="fixed z-50 top-[15px] right-[40px] cursor-pointer " src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                        <menu className={`uppercase block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                            <li onClick={()=> setIsHidden(true)} className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#About">About</a></li>
                            <li onClick={()=> setIsHidden(true)} className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#Tokenomics">Tokemomics</a></li>
                            <li onClick={()=> setIsHidden(true)} className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="#Partners">Partners</a></li>
                            <li onClick={()=> setIsHidden(true)} className="flex justify-center md:justify-start w-full mt-3 md:mt-5 "><a href="https://docs.whitebasics.org/">White Paper</a></li>
                            <li onClick={()=> setIsHidden(true)} className="flex justify-center md:justify-start w-full mt-3 md:mt-5  py-[60px] xl:py-[100px] ">
                                <Social />
                            </li>
                        </menu>
                        <div>
                            <a className={`block text-center mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] cursor-pointer uppercase rounded-[100px] bg-[#FFFFFF] border-[1px] border-black hover:bg-[#F1F1F1] hover:shadow-inner text-[16px] md:text-[18px] text-[#303030]`}>Buy</a>
                        </div>
                    </div>
            </div> 

         

            {/* Фиксированная шапка меню */}
            <div id="menu" className="fixed z-40 top-0  py-[5px] md:py-[10px]  w-full bg-[#FFFFFF] text-black">
                <div className="_wrapper flex justify-between ">
                    <div className="hidden md:flex text-[16px] lg:text-[20px] flex-col justify-center">
                        <ul className="flex gap-x-[5px] lg:gap-x-[35px] xl:gap-x-[40px]">
                            <li onClick={()=>setActiveSection(1)} className={`${ activeSection === 1 ? 'font-bold' : ''} w-[53px] hover:text-[#666] cursor-pointer`}>
                                <a href="#About">About</a>
                            </li>
                            <li onClick={()=>setActiveSection(2)} className={`${ activeSection === 2 ? 'font-bold' : ''} w-[84px] hover:text-[#666] cursor-pointer`}>
                                <a href="#Roadmap">Roadmap</a>
                            </li>
                            <li onClick={()=>setActiveSection(3)} className={`${ activeSection === 3 ? 'font-bold' : ''} w-[105px] hover:text-[#666] cursor-pointer`}>
                                <a href="#Tokenomics">Tokenomics</a>
                            </li>
                            <li className={`hover:text-[#666] cursor-pointer`}>
                                <a href="https://docs.whitebasics.org/">White Paper</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-auto">
                        <div className="flex gap-x-5 md:gap-x-10 w-full md:w-auto justify-between md:justify-normal">
                            <a className={`block order-last md:order-first mr-8 md:mr-0 px-[28px] py-[5px] lg:px-[40px] md:py-[10px] cursor-pointer uppercase rounded-[100px] bg-[#FFF] border-[1px] border-black hover:bg-[#303030] hover:shadow-inner hover:text-[#FFF] text-[16px] md:text-[18px] text-[#303030]`} href="">Buy</a>
                            <div className="flex flex-col justify-center">
                                <Social />
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-col justify-center" onClick={()=> setIsHidden(false) }>
                        <Image src={burger} alt="menu" />
                    </div>
                </div>
            </div>

            {/* Секция с видео (она тоже фикс) */}
            <section id="Header" className={`_section fixed top-0 z-20 min-h-svh max-h-svh overflow-hidden`}>
                <div className="relative md:px-5  z-20 w-full h-full min-h-svh flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                    
                    <div className="z-0 absolute w-full h-full bg-white top-0 left-0 p-2 pt-[46px] xs:pt-[56px] md:pt-[70px] overflow-hidden">
                        <div className="bg-black rounded-[10px] w-full h-full">
                        </div>
                    </div>
                
                    <div className={`relative z-20 w-full md:w-[2/3] h-full px-2 overflow-hidden flex flex-col justify-center rounded-[10px]`}>
                        <video autoPlay muted playsInline className="block object-cover w-full md:w-2/3 md:mx-auto md:h-full  max-w-full rounded-[10px]" >
                            <source src={main} type="video/mp4" media="(min-width: 768px)"/>
                            <source src={main_mobile} type="video/mp4"  media="(max-width: 767px)"/>
                            <source src={isMobile ? main_mobile : main} type="video/mp4"/>
                        </video>
                    </div>
                    {/* {showButton &&
                        <div className="abosolute z-40 w-full flex justify-center left-0 bottom-[10%] md:bottom-[5%] _opacity_animation">
                            <a className={`block mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] cursor-pointer uppercase rounded-[100px] bg-[#FFFFFF] border-[1px] border-black hover:bg-[#F1F1F1] hover:shadow-inner text-[16px] md:text-[18px] text-[#303030]`}>Buy</a>
                        </div>
                    } */}
                </div>
            </section>
            
            {/* Заглушка с отступом для секции с видео */}
            <div style={{height:'100vh'}} className={`relative z-30 min-h-screen h-screen`}>
            </div>
        </>
    )
}