import { useParallax } from 'react-scroll-parallax';
import bg from '../public/img/02About/bg.webp'
import bg_mobile from '../public/img/02About/bg_mobile.webp'
import Image from 'next/image';

export default function About(){
    const { ref: text  } = useParallax<HTMLDivElement>({ 
        // opacity: [1, 0],
        // easing: [1, 0, 0.8, 1],
    });

    return(
        <section id="About" className="relative z-30 py-[5%] _section flex flex-col justify-center bg-white">
            {/* <div className='absolute top-0 left-0 z-20 w-full h-full px-2 p-b'>
                <Image fetchPriority="high" className="hidden md:block w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat" src={bg} alt=''/>
                <Image fetchPriority="high" className="md:hidden w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat" src={bg_mobile} alt=''/>
            </div> */}
            {/* <div className='absolute -top-4 left-0 z-20 w-full h-2 px-2  flex justify-between'>
                <div className='w-2 h-2 bg-white'>
                    <div className='w-2 h-full bg-black rounded-bl-[10px]'>
                    </div>
                </div>
                <div className='w-2 h-2 bg-white'>
                    <div className='w-2 h-full bg-black rounded-br-[10px]'>
                    </div>
                </div>
            </div> */}
            
            <div ref={text} className="_wrapper relative z-30 h-full w-full">
                <div className='flex flex-col md:flex-row justify-between h-full w-full md:gap-x-10 gap-y-5'>

                    <div className="w-full md:w-1/2 bg-[#F5F5F5] flex flex-col justify-around px-2 md:px-5 lg:px-[5%] py-5 md:py-[60px] rounded-[10px] mx-auto [&>div]:text-center tracking-tight leading-tight">
                        <h2 className="_h2 text-center">
                            About
                        </h2>
                        <div className="_text_14_18 mt-[20px] md:mt-0 leading-normal flex flex-col justify-center">
                            <div className=''>White Basics is a unique opportunity to have multiple coins in your crypto wallet by having only one coin.<br/>
                                Use our white sheet of paper to visualize your favorite pet, artist, politician, or draw your own logo on it.<br/>
                                It is your figment of imagination that completes the White Basics’ concept.</div>
                            </div>
                        <div className="_text_18_30 font-medium mt-[12.5%] xs:mt-[10%] md:mt-[7%]">
                            This way we are uniting each and every coin that has ever been or will be created.
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 bg-[#F5F5F5] order-last flex flex-col justify-center h-auto rounded-[10px]'>
                        <div className='rounded-[10px] flex flex-col justify-center'>
                            <iframe width={'100%'} height={'auto'} className='aspect-video' src="https://www.youtube.com/embed/8VvfMv9mLjo?si=oXLQyZoiE-j8o-LC" allowFullScreen />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}