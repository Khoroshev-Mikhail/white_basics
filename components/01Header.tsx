import { useEffect, useState } from "react";

export default function Header(){


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

    const [ height, setHeight ] = useState<any>('')
    useEffect(()=>{
        setHeight(document.getElementById('Header')?.offsetHeight)
    }, [])


    return(
        <>
            <section id="Header" className="_section fixed top-0 z-20 min-h-svh  bg-black overflow-hidden ">
                <div className="relative z-20 w-full h-full min-h-svh flex flex-col justify-center pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                    
                    <div className="z-0 absolute w-full h-full bg-white top-0 left-0 p-2 pt-[44px] xs:pt-[51px] md:pt-[70px] overflow-hidden">
                        <div className="bg-black rounded-[10px] w-full h-full">

                        </div>
                    </div>
                
                    <div className={`relative z-20 w-full md:w-[2/3] h-full px-2 overflow-hidden flex flex-col justify-center rounded-[10px]`}>
                        <video autoPlay muted playsInline className="block object-cover w-full md:w-2/3 md:mx-auto md:h-full  max-w-full rounded-[10px]" >
                            <source src="/img/01Header/main.MP4" type="video/mp4" media="(min-width: 768px)"/>
                            <source src="/img/01Header/main_mobile.MP4" type="video/mp4"/>
                        </video>
                        {showButton &&
                            <div className="absolute w-full flex justify-center left-0 bottom-[15%] md:bottom-[5%] _opacity_animation">
                                <a className="block mx-auto px-[34px] py-[15px] md:px-[62px] md:py-[20px] cursor-pointer uppercase rounded-[100px] bg-[#FFFFFF] hover:bg-[#F1F1F1] hover:shadow-inner text-[16px] md:text-[18px] text-[#303030]">Buy</a>
                            </div>
                        }
                    </div>
                </div>
            </section>

            <div className={`pt-[${height}px] relative z-50 min-h-screen`}>

            </div>
        </>
    )
}