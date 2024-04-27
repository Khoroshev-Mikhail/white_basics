import Image from "next/image";
import clock from "../public/img/03Roadmap/clock.gif"
import dollar from "../public/img/03Roadmap/dollar.gif"
import dollar_placeholder from "../public/img/03Roadmap/placeholder-dollar.gif"
import top from "../public/img/03Roadmap/top.gif"

export default function Roadmap(){
    return(
        <section id="Roadmap" className="_section">
            <div className="_wrapper">
                <h2 className="_h2 mt-[30px] md:mt-[60px]">
                    Roadmap
                </h2>
                <div className="mt-[30px] lg:mt-[10px] grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[10px]">
                    <div className="lg:order-1">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 1
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            PinkSale assembly <b>21k SOL for START</b>
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            Collect 21000 SOL on Pinksale Fairlaunch to provide stable growth after DEX launch.  
                        </div>
                    </div>
                    <div className="lg:order-3 lg:aspect-[730/430] bg-[#F4F4F4] rounded-[10px]">
                        <Image className="w-full h-full rounded-[10px]" src={clock} alt=""/>
                    </div>
                    <div className="lg:order-2">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 2
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            Collect all <b>MEMCOIN COMMUNITY</b> together
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            By allowing our investors to visualize multiple coins on our white sheet of paper we are bringing all Memecoin communities together. 
                        </div>
                    </div>
                    <div className="lg:order-4 aspect-[730/430] bg-black rounded-[10px]">

                    </div>

                    <div className="lg:order-5">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 3
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            WB coin <b>1$</b>
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            Within 6 months White Basics coin reaches 1$, and our team starts to develop the safest, fastest, and cheapest Blockchain. White Basics Chain will take over the Blockchain World. 
                        </div>
                    </div>
                    <div className="lg:order-7 lg:aspect-[730/430] bg-[#F4F4F4] rounded-[10px]">
                        <Image placeholder="blur" blurDataURL={dollar_placeholder.src} className="w-full h-full rounded-[10px] " src={dollar} alt=""/>
                    </div>
                    {/* object-contain */}
                    <div className="lg:order-6">
                        <div className="mt-[30px] lg:mt-[40px] inline-block px-[13px] lg:px-[23px] py-[8px] lg:py-[18.5px] rounded-[100px] text-[#9C9C9C] uppercase _text_12_20 bg-[#F1F1F1]">
                            Phase 4
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] _text_20_30">
                            <b>TOP 2</b> COINMARKETCAP
                        </div>
                        <div className="mt-[15px] lg:mt-[20px] mb-[15px] md:pb-[20px]  _text_14_18">
                            White Basics reaches the TOP 2 Coinmarketcap <br className="hidden lg:inline" />with $441 Billion Marketcap.   
                        </div>
                    </div>
                    <div className="lg:order-8 lg:aspect-[730/430] bg-[#F4F4F4] rounded-[10px]">
                        <Image placeholder="blur" blurDataURL={dollar_placeholder.src} className="w-full h-full rounded-[10px]" src={top} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}