import { useParallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import poster from '../public/img/02About/poster.webp'

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
});

export default function About(){
    const { ref: text  } = useParallax<HTMLDivElement>({ 
        // opacity: [1, 0],
        // easing: [1, 0, 0.8, 1],
    });

    return(
        <section id="About" className="relative z-30 pt-[60px] md:pt-[90px] _section flex flex-col justify-center bg-white ">
            
            <div ref={text} className="_wrapper relative z-30 h-full w-full ">
                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-full w-full md:gap-x-10 gap-y-5'>

                    <div className="w-full h-full bg-[#F5F5F5] flex flex-col justify-around px-10 md:px-5 lg:px-[5%] py-[60px] rounded-[10px] mx-auto [&>div]:text-center tracking-tight leading-tight">
                        <h2 className="_h2 text-center">
                            About
                        </h2>
                        <div className="_text_14_18 mt-[12.5%] leading-normal flex flex-col justify-center">
                            <div className=''>White Basics is a unique opportunity to have multiple coins in your crypto wallet by having only one coin.<br/>
                                Use our white sheet of paper to visualize your favorite pet, artist, politician, or draw your own logo on it.<br/>
                                It is your figment of imagination that completes the White Basics’ concept.</div>
                            </div>
                        <div className="_text_18_30 font-medium mt-[12.5%]">
                            This way we are uniting each and every coin that has ever been or will be created.
                        </div>
                    </div>

                    <div className='w-full bg-[#F5F5F5] order-last flex flex-col justify-center h-auto rounded-[10px]'>
                        <div className='rounded-[10px] flex flex-col justify-center'>
                            <div className='aspect-video w-full'>
                                <ReactPlayer width={'100%'} light={poster.src} url='https://www.youtube.com/embed/8VvfMv9mLjo?si=oXLQyZoiE-j8o-LC' />
                            </div>
                            
                            {/* <iframe width={'100%'} height={'auto'} className='aspect-video' src="" allowFullScreen /> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}