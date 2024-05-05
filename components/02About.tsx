import { useParallax } from 'react-scroll-parallax';

export default function About(){
    const { ref: bg } = useParallax<HTMLDivElement>({ 
        // scaleX: [1, 1.02]
        // easing: [0, 0, 1, 0.1],
    });
    const { ref: text  } = useParallax<HTMLDivElement>({ 
        opacity: [1, 0], // Начальное значение прозрачности: 0 (полностью прозрачный), конечное значение: 1 (полностью непрозрачный)
        easing: [1, 0, 0.8, 1],
    });
    return(
        
        <section  ref={bg} id="About" className="relative z-30 min-h-screen  _section py-[28%] xs:py-[25%] sm:py-[20%] md:py-[14%] flex flex-col justify-center bg-white">
            <div className='absolute top-0 left-0 z-20 w-full h-full px-2 p-b'>
                <div  className="w-full h-full rounded-[10px] bg-cover bg-center bg-no-repeat bg-[url('/img/02About/bg_mobile.webp')] md:bg-[url('/img/02About/bg.webp')] "></div>
            </div>
            
            
            <div ref={text} className="_wrapper relative z-30">
                <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/2 [&>div]:text-center tracking-tight leading-tight">
                    <h2 className="_h2 text-center">
                        About
                    </h2>
                    <div className=" mt-5 md:mt-7.5 _text_14_18">
                        White Basics is a unique opportunity to have multiple coins in your crypto wallet by having only one coin.
                        <br/>Use our white sheet of paper to visualize your favorite pet, artist, politician, or draw your own logo on it.
                        <br />
                        It is your figment of imagination that completes the White Basics’ concept.
                    </div>
                    <div className="_text_18_30 font-medium mt-[12.5%] xs:mt-[10%] md:mt-[7%]">
                        This way we are uniting each and every coin that has ever been or will be created.
                    </div>
                </div>
            </div>
        </section>
    )
}