import Image from 'next/image'
import partner_1 from "../public/img/05Partners/1.webp"
import partner_2 from "../public/img/05Partners/2.webp"
import partner_3 from "../public/img/05Partners/3.webp"
import partner_4 from "../public/img/05Partners/4.webp"
import partner_5 from "../public/img/05Partners/5.webp"
import partner_6 from "../public/img/05Partners/6.webp"
import Social from './00Social'

export default function Partners(){
    return(
        <section id="Partners" className="_section pt-[30px] md:pt-[60px] bg-white relative z-30">
            <div className="_wrapper">
                <div className='flex justify-between'>
                    <h2 className='_h2 block w-full md:w-2/3 leading-none'>Partners</h2>
                    <div className='hidden md:flex md:flex-col md:justify-center w-1/3'>
                        <a className="block ml-auto px-[62px] py-[20px] uppercase rounded-[100px] bg-[#303030] text-[18px] text-white cursor-pointer hover:bg-[#F1F1F1] hover:shadow-xl hover:text-black">Buy</a>
                    </div>
                </div>
                <div className="mt-5 md:mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5">
                    <div data-aos="fade-up" data-aos-duration="1000" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_1} alt="Raydium"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_2} alt="PinkSale"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_3} alt="InterFi"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_4} alt="Solana"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_5} alt="CoinMarketCap"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image fetchPriority="high" className='w-2/3 mx-auto' src={partner_6} alt="CoinGeko"/>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className='mt-[30px] md:hidden flex flex-col justify-center w-full'>
                    <a className="block mx-auto px-[35px] py-[15px] uppercase rounded-[100px] bg-[#303030] text-[16px] text-white ">Buy</a>
                </div>
                <div className='mt-[50px] md:hidden flex justify-center'>
                    <Social />
                </div>
            </div>
        </section>
    )
}