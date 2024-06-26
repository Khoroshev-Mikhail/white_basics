import Image from 'next/image'
import tg from '../public/img/00Social/tg.svg'
import x from '../public/img/00Social/x.svg'
import email from '../public/img/00Social/email.svg'

export default function Social({ className }: { className?: string }){
    return(
        <div className={"flex gap-x-5 md:gap-x-10 relative z-30" + " " + className}>
            <a href='https://t.me/whitebasics'>
                <Image fetchPriority="high" src={ tg } alt="Telegram" className="block w-[18px] xs:w-[27px]"/>
            </a>
            <a href='https://twitter.com/whitebasicscoin'>
                <Image fetchPriority="high" src={ x } alt="Twitter" className="block w-[18px] xs:w-[27px]"/>
            </a>
            <a href='mailto:nfo@whitebasics.org'>
                <Image fetchPriority="high" src={ email } alt="Email" className="block w-[18px] xs:w-[27px]"/>
            </a>
        </div>
    )
}