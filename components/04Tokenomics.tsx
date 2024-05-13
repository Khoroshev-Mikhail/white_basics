import Image from 'next/image'
import copy from "../public/img/04Tokenomics/copy.svg"
import dynamic from 'next/dynamic';

const Pie = dynamic(() => import('./00Pie'), { ssr: false });

export default function Tokenomics(){
    return(
        <section className="relative z-30 bg-white _section  pt-[10px]">
            
            <div data-aos="zoom-in" data-aos-duration="2000" className="absolute -z-10 top-0 left-[20px] 2xl:left-[calc((100%-1440px)/2)] w-[calc(100%-40px)] max-w-[1440px] h-full bg-[#F5F5F5] rounded-[10px]"></div>
            
            <div id="Tokenomics" className="_wrapper">
                <div className="py-[30px] md:py-[60px]">
                    <h2 className="_h2 text-center">Tokenomics</h2>
                    <div className=' px-5'>
                        <Pie />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className='w-full overflow-hidden mt-[5%] px-5 text-center font-medium cursor-pointer '>
                        Total Supply:<br/>
                        <span className='text-[12px]'>21,000,000,000 WB</span>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className='w-full overflow-hidden mt-[5%] px-5 text-center font-medium cursor-pointer ' onClick={()=>navigator.clipboard.writeText('29kUdSqYnpo1sqC6TfnkLxT7FunSm4DRBHxb3i57WnLr')}>
                        Token SOL: <Image fetchPriority="high" className='md:hidden inline w-5 h-5 pb-1' src={copy} alt='copy'/><br/>
                        <span className='hidden md:inline decoration-dashed border-dashed border-b-[1px] border-black px-2 hover:border-b-[0px]'>29kUdSqYnpo1sqC6TfnkLxT7FunSm4DRBHxb3i57WnLr</span> <Image className='hidden md:inline w-5 h-5 pb-1' src={copy} alt='copy'/>
                        <span className='md:hidden text-[12px] decoration-dashed border-dashed border-b-[1px] border-black hover:border-b-[0px]'>...SqYnpo1sqC6TfnkLxT7FunSm4DRBHxb3i5....</span>
                    </div>
                </div>
  
            </div>

        </section>
    )
}