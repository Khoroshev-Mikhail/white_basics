import Image from "next/image"
import burger from "../public/img/01Header/burger.svg"
import cross from "../public/img/01Header/cross.svg"
import { useEffect, useState } from "react";
import Social from "./00Social";
import { useParallax } from 'react-scroll-parallax';

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true);
    // запретить скролл при isHidden true

    const { ref } = useParallax<HTMLDivElement>({ 
        translateY: [-50, 50], 
        // translateY: [0, 0], 
        // easing: [0, 0, 1, 0.1],
    });

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
                    // document.body.style.overflow = "auto";
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

    // const [activeSection, setActiveSection] = useState<number | null>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const sections = document.querySelectorAll('section');

    //     sections.forEach((section, index) => {
    //         const top = section.offsetTop;
    //         const height = section.offsetHeight;

    //         if (window.scrollY >= top && window.scrollY < top + height) {
    //             setActiveSection(index);
    //         }
    //     });
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return(
        <section ref={ref} id="Header" className="_section relative  min-h-screen max-h-screen bg-red-500 overflow-hidden ">
            <div className="relative z-30 w-full h-full min-h-screen flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                
                <div className="z-0 absolute w-full h-full bg-white top-0 left-0 p-2 pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                    <div className="bg-black rounded-[10px] w-full h-full">

                    </div>
                </div>

                <div className="z-30 w-full h-full overflow-hidden flex flex-col justify-center">
                    <video autoPlay muted playsInline className="block mx-auto px-2 w-full md:w-auto h-full" >
                        <source src="/img/01Header/main_mobile.MP4" type="video/mp4" media="(max-width: 767px)" />
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