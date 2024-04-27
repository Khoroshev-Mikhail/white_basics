import Image from "next/image"
import burger from "../public/img/01Header/burger.svg"
import { useEffect, useRef, useState } from "react";
import Social from "./00Social";

export default function Header(){
    const [showButton, setShowButton] = useState(false);
    // const contentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const video = document.querySelector("video");
        const handleVideoEnd = () => {
            setShowButton(true);
        };
    
        if (video) {
            video.addEventListener("ended", handleVideoEnd);
            return () => {
                video.removeEventListener("ended", handleVideoEnd);
            };
        }
      }, []);
    return(
        <section id="Header" className="_section min-h-screen bg-black">
            <div className="relative w-full h-full min-h-screen flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px]">
                {/* <Image className="block mx-auto" src={main} alt="White Basics" /> */}
                <div id="menu" className="fixed top-0 px-[20px] md:px-[40px] md:py-[20px] py-[15px] flex justify-between w-full bg-[#FFFFFF] text-black">
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
                    <video autoPlay muted playsInline className="block mx-auto w-full h-full">
                        <source src="/img/01Header/main.MP4" type="video/mp4"/>
                    </video>
                    {showButton &&
                        <div className="absolute w-full flex justify-center bottom-[10%] md:bottom-[5%] opacity-100 transition-opacity duration-1000">
                            <a className="block mx-auto px-[62px] py-[20px] uppercase rounded-[100px] bg-[#FFFFFF] text-[18px] text-[#303030]">Buy</a>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}