export default function Roadmap(){
    return(
        <section id="Roadmap" className="_section pt-[30px] md:pt-[60px]">

            
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
                        <video className="w-full h-full rounded-[10px] object-cover" loop autoPlay muted playsInline poster="/img/03Roadmap/clock_poster.webp">
                            <source src="/img/03Roadmap/clock.mp4" type="video/mp4" />
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
                        <video className="w-full h-full rounded-[10px]" loop autoPlay muted playsInline poster="/img/03Roadmap/phase2_poster.webp">
                            <source src="/img/03Roadmap/phase2.MP4" type="video/mp4" />
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
                    <div className="lg:order-7 lg:aspect-[730/430] bg-[#F4F4F4] rounded-[10px]">
                        {/* <Image placeholder="blur" blurDataURL={dollar_placeholder.src} className="w-full h-full rounded-[10px] " src={dollar} alt=""/> */}
                        <video className="w-full h-full rounded-[10px]" loop autoPlay muted playsInline poster="/img/03Roadmap/dollar_poster.webp">
                            <source src="/img/03Roadmap/dollar.mp4" type="video/mp4" />
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
                        <video className="w-full h-full rounded-[10px]  object-cover" loop autoPlay muted playsInline poster="/img/03Roadmap/top_poster.webp">
                            <source src="/img/03Roadmap/top.MP4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}