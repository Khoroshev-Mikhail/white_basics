import Image from "next/image"
import main from "../public/img/01Header/main.gif"
import { useEffect, useState } from "react";

export default function Header(){
    const [showButton, setShowButton] = useState(false);
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
            <div className="w-full h-full min-h-screen flex flex-col justify-center">
                {/* <Image className="block mx-auto" src={main} alt="White Basics" /> */}
                <div className="relative w-auto h-auto">
                    <video autoPlay muted playsInline className="block mx-auto w-full h-full">
                        <source src="/img/01Header/main.MP4" type="video/mp4"/>
                    </video>
                    {showButton &&
                        <div className="absolute w-full flex justify-center bottom-12 opacity-100 transition-opacity duration-1000">
                            <a className="block mx-auto px-[62px] py-[20px] uppercase rounded-[100px] bg-[#FFFFFF] text-[18px] text-[#303030]">Buy</a>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}