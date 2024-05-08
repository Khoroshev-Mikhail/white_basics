import phase1_poster from '../public/img/03Roadmap/phase1_poster.webp'
import phase1 from '../public/img/03Roadmap/phase1.mp4'
import phase2_poster from '../public/img/03Roadmap/phase2_poster.webp'
import phase2 from '../public/img/03Roadmap/phase2.MP4'
import phase3_poster from '../public/img/03Roadmap/phase3_poster.webp'
import phase3 from '../public/img/03Roadmap/phase3.mp4'
import phase4_poster from '../public/img/03Roadmap/phase4_poster.webp'
import phase4 from '../public/img/03Roadmap/phase4.mp4'

export default function Roadmap(){

    return(
        <section id="Roadmap" className="_section py-[30px] md:py-[60px] bg-white  relative z-30">

            <div className="_wrapper">
                <h2 className="_h2">
                    Roadmap
                </h2>
                <div className="mt-[30px] lg:mt-[10px] grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[10px]">
                    <div className="lg:order-1">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 1
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            Pinksale Fairlaunch <b>21k SOL</b>
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            Collect 21000 SOL on Pinksale Fairlaunch to provide stable growth after DEX launch.
                        </div>
                    </div>
                    <div className="lg:order-3 lg:aspect-[730/430] bg-[#000] rounded-[10px]">
                        <video className="w-full h-full rounded-[10px] object-cover" loop autoPlay muted playsInline poster={phase1_poster.src}>
                            <source src={phase1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="lg:order-2">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 2
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                        Connect <b>all Memecoin communities</b>
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px] _text_14_18">
                            By allowing our investors to visualize multiple coins on our white sheet of paper we are bringing all Memecoin communities together. 
                        </div>
                    </div>
                    <div className="lg:order-4 aspect-[730/430] bg-black rounded-[10px]">
                        <video className="w-full h-full rounded-[10px]" loop autoPlay muted playsInline poster={phase2_poster.src}>
                            <source src={phase2} type="video/mp4" />
                        </video>
                    </div>

                    <div className="lg:order-5">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 3
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            WB coin <b>1$</b>
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            Within 6 months White Basics coin reaches 1$, and our team starts to develop the safest, fastest, and cheapest Blockchain. White Basics Chain is sure to take over the Blockchain World.
                        </div>
                    </div>
                    <div className="relative lg:order-7 lg:aspect-[730/430] bg-black rounded-[10px]">
                        {/* <div className="absolute w-full h-full border-l-[2px] border-r-[2px] border-white z-50 box-border rounded-[10px]"></div> */}
                        <video className="w-full h-full rounded-[10px]" loop autoPlay muted playsInline poster={phase3_poster.src}>
                            <source src={phase3} type="video/mp4" />
                        </video>
                    </div>

                    <div className="lg:order-6">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 4
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            <b>TOP 2</b> COINMARKETCAP
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            White Basics reaches the TOP 2 Coinmarketcap <br className="hidden lg:inline" />with a 441 Billion Marketcap. 
                        </div>
                    </div>
                    <div className="lg:order-8 lg:aspect-[730/430] bg-[#F4F4F4] rounded-[10px]">
                        <video className="w-full h-full rounded-[10px]  object-cover" loop autoPlay muted playsInline poster={phase4_poster.src}>
                            <source src={phase4} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}