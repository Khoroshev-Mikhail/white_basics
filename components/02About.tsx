import { useParallax } from 'react-scroll-parallax';
import bg from '../public/img/02About/bg.webp'
import bg_mobile from '../public/img/02About/bg_mobile.webp'
import Image from 'next/image';

export default function About(){
    const { ref: bg_ref } = useParallax<HTMLDivElement>({ 
    });
    const { ref: text  } = useParallax<HTMLDivElement>({ 
        opacity: [1, 0],
        easing: [1, 0, 0.8, 1],
    });

    return(
        <section  ref={bg_ref} id="About" className="relative z-30 min-h-screen _section flex flex-col justify-center bg-white">
            <div className='absolute top-0 left-0 z-20 w-full h-full px-2 p-b'>
                <Image fetchPriority="high" className="hidden md:block w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat" src={bg} alt=''/>
                <Image fetchPriority="high" className="md:hidden w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat" src={bg_mobile} alt=''/>
            </div>
            
            <div ref={text} className="_wrapper relative z-30 h-full w-full p-5">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='order-last md:order-first flex flex-col justify-center'>
                        <div className='bg-black aspect-square rounded-[10px] flex flex-col justify-center'>
                            <iframe width={'100%'} height={'auto'} className='aspect-video' src="https://www.youtube.com/embed/8VvfMv9mLjo?si=oXLQyZoiE-j8o-LC" allowFullScreen />
                        </div>
                    </div>
                    <div className="flex flex-col justify-around w-[80%] py-[60px] mx-auto [&>div]:text-center tracking-tight leading-tight">
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
                </div>
            </div>
        </section>
    )
}