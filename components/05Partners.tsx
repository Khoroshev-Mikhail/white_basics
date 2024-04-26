import Image from 'next/image'
import partner_1 from "../public/img/05Partners/1.png"
import partner_2 from "../public/img/05Partners/2.png"
import partner_3 from "../public/img/05Partners/3.png"
import partner_4 from "../public/img/05Partners/4.png"
import partner_5 from "../public/img/05Partners/5.png"
import partner_6 from "../public/img/05Partners/6.png"
import Social from './00Social'

export default function Partners(){
    return(
        <section id="Partners" className="_section mt-[30px] md:mt-[60px]">
            <div className="_wrapper">
                <div className='flex justify-between'>
                    <h2 className='_h2 block w-full md:w-2/3 leading-none'>Partners</h2>
                    <div className='hidden md:flex md:flex-col md:justify-center  w-1/3'>
                        <a className="block ml-auto px-[62px] py-[20px] uppercase rounded-[100px] bg-[#303030] text-[18px] text-white">Buy</a>
                    </div>
                </div>
                <div className="mt-5 md:mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5">
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_1} alt=""/>
                    </div>
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_2} alt=""/>
                    </div>
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_3} alt=""/>
                    </div>
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_4} alt=""/>
                    </div>
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_5} alt=""/>
                    </div>
                    <div className='p-5 md:p-10 col-span-1 flex flex-col justify-center rounded-[10px] bg-gradient-to-b from-[#F4F4F4] via-[#F9F9F9] to-[#F4F4F4]'>
                        <Image className='w-2/3 mx-auto' src={partner_6} alt=""/>
                    </div>
                </div>

                <div className='mt-[30px] md:hidden flex flex-col justify-center w-full'>
                    <a className="block mx-auto px-[35px] py-[15px] uppercase rounded-[100px] bg-[#303030] text-[16px] text-white">Buy</a>
                </div>
                <div className='mt-[50px] md:hidden flex justify-center'>
                    <Social />
                </div>
            </div>
        </section>
    )
}