import Image from 'next/image'
import tokenomics from "../public/img/04Tokenomics/diagram.png"
import tokenomics_mobile from "../public/img/04Tokenomics/diagram_mobile.png"

export default function Tokenomics(){
    return(
        <section id="Tokenomics" className="_section bg-[#F5F5F5] mt-[30px] md:mt-[60px]">
            <div className="_wrapper">
                <div className="py-[30px] md:py-[60px]">
                    <h2 className="_h2 text-center">Tokenomics</h2>
                    <div className='mt-[40px] md:mt-[60px] px-5'>
                        <Image className='hidden md:block w-3/4 mx-auto h-auto' src={tokenomics} alt="Tokenomics"/>
                        <Image className='md:hidden w-full mx-auto h-auto' src={tokenomics_mobile} alt="Tokenomics"/>
                    </div>
                </div>
            </div>
        </section>
    )
}