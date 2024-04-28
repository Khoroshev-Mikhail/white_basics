import Image from "next/image"
import burger from "../public/img/01Header/burger.svg"
import { useEffect, useRef, useState } from "react";
import Social from "./00Social";

export default function Header(){
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    const [showButton, setShowButton] = useState<boolean>(false);
    useEffect(() => {
        const video = document.querySelector("video");
        const handleVideoEnd = () => {
            setShowButton(true);
        };
        // const handleVideoPlay = () => {
        //     setIsLoading(false)
        // };
    
        if (video) {
            video.addEventListener("ended", handleVideoEnd);
            // video.addEventListener("canplay", handleVideoPlay);
            return () => {
                video.removeEventListener("ended", handleVideoEnd);
                // video.removeEventListener("canplay", handleVideoPlay);
            };
        }
      }, []);
    return(
        <section id="Header" className="_section relative z-50 min-h-screen bg-black overflow-hidden ">
            {/* {isLoading && <div className="fixed top-0 left-0 z-50 w-full h-full min-h-screen bg-red-600"></div>} */}
            <div className="relative w-full h-full min-h-screen flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px]">
                {/* <Image className="block mx-auto" src={main} alt="White Basics" /> */}
                <div id="menu" className="fixed z-40 top-0 px-[20px] md:px-[40px] md:py-[20px] py-[15px] flex justify-between w-full bg-[#FFFFFF] text-black">
                    <div className="hidden md:block font-bold text-[20px]">
                        <ul className="flex gap-x-[50px]">
                            <li><a href="#About">About</a></li>
                            <li><a href="#Roadmap">Roadmap</a></li>
                            <li><a href="#Tokenomics">Tokenomics</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Social />
                    </div>
                    <div className="md:hidden flex flex-col justify-center">
                        <Image src={burger} alt="menu" />
                    </div>
                </div>

                <div className="w-auto h-auto">
                    <video autoPlay muted playsInline poster="/img/01Header/poster.webp" className="block mx-auto w-full h-full">
                        <source src="/img/01Header/main.mp4" type="video/mp4"/>
                    </video>
                    {/* {showButton && */}
                        <div className="absolute w-full flex justify-center bottom-[10%] md:bottom-[5%] opacity-50 transition-opacity duration-5000">
                            <a className="block mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] uppercase rounded-[100px] bg-[#FFFFFF] text-[16px] md:text-[18px] text-[#303030]">Buy</a>
                        </div>
                    {/* } */}

                </div>
            </div>
        </section>
    )
}