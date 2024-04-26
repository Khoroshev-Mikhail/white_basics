import Image from 'next/image'
import tg from '../public/img/00Social/tg.svg'
import x from '../public/img/00Social/x.svg'

export default function Social({ className }: { className?: string }){
    return(
        <div className={"flex gap-x-5 md:gap-x-10 relative z-30" + " " + className}>
            <a href=''>
                <Image src={ tg } alt="Telegram" className="block w-[18px] xs:w-[27px]"/>
            </a>
            <a href=''>
                <Image src={ x } alt="Twitter" className="block w-[18px] xs:w-[27px]"/>
            </a>
        </div>
    )
}