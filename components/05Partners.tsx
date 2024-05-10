import Image from 'next/image'
import partner_1 from "../public/img/05Partners/1.webp"
import partner_2 from "../public/img/05Partners/2.webp"
import partner_3 from "../public/img/05Partners/3.webp"
import partner_4 from "../public/img/05Partners/4.webp"
import partner_5 from "../public/img/05Partners/5.webp"
import partner_6 from "../public/img/05Partners/6.webp"
import Social from './00Social'
import { useEffect, useState } from 'react'

export default function Partners(){
    const [isFixed, setIsFixed] = useState<boolean>(false) //toggle для переключения класса позиционирования кнопки fixed/static
    const [isEndScrolling, setIsEndScrolling] = useState<boolean>(false) //проскроллил ли юзер до конца сайта или до видимости кнопки
    const [buttonPosition, setButtonPosition] = useState<number>(100) //расстояние от низа сайта до нижнего края кнопки при первом ренедеринге
    const [buttonHeight, setButtonHeight] = useState<number>(54)
    const [viewportPosition, setViewportPosition] = useState<number>(0) //расстоние от низа сайта до низа вьюпорта + расстояние от низ вьюпорта до низа кнопки при фикс боттом-10%
    const [scrollPosition, setScrollPosition] = useState(0);

    //Получаем позицию низа экрана от низа документа
    useEffect(()=>{
        const changeIsEnding = () => {
            const siteHeight = document.body.offsetHeight
            const vieportPosition = window.scrollY
            const viewportHeight = window.innerHeight
            const vieportBottomPosition = siteHeight - vieportPosition - viewportHeight
            setViewportPosition(vieportBottomPosition)
            if(vieportBottomPosition <= 1){
                setIsEndScrolling(true)
            }
        }
        window.addEventListener('scroll', changeIsEnding);
        return () => {
            window.removeEventListener('scroll', changeIsEnding);
        };
    }, [])

    useEffect(()=>{

        const siteHeight = document.body.offsetHeight
        const vieportPosition = window.scrollY
        const viewportHeight = window.innerHeight
        const vieportBottomPosition = siteHeight - vieportPosition - viewportHeight
        if(isEndScrolling && (vieportBottomPosition >= buttonPosition)){
            setIsFixed(true)
        } else{
            setIsFixed(false)
        }
 
        setScrollPosition(window.scrollY)

    }, [isEndScrolling, viewportPosition])

    //Получаем расстояние от низа сайта до кнопки
    useEffect(()=>{
        const button = document.getElementById('bottom_button')
        if(button){
            const buttonPosition = document.body.offsetHeight - button.getBoundingClientRect().y - button.offsetHeight - (window.innerHeight * 0.1)
            setButtonPosition(buttonPosition)
            setButtonHeight(button.offsetHeight)
        }
    }, [])


    return(
        <section id="Partners" className="_section pt-[30px] md:pt-[60px] bg-white relative z-30">
            <div className="_wrapper">
                <div className='flex justify-between'>
                    <h2 className='_h2 block w-full md:w-2/3 leading-none'>Partners</h2>
                    <div className='hidden md:flex-col md:justify-center w-1/3'>
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
                {/* поставить на это место заглушку при isFixed = true  */}
                <div className={` mt-[30px] md:hidden flex justify-center w-full`}>
                    <a id="bottom_button" className={`${isFixed ? 'fixed bottom-[10%] left-1/2 translate-x-[-50%]' : ''} block mx-auto px-[35px] py-[15px] uppercase rounded-[100px] bg-[#303030] text-[16px] text-white`}>Buy</a>
                    <div style={{height: buttonHeight + 'px'}} className={`w-[1px] !h-[${buttonHeight}px]`}></div>
                </div>

                <div className='mt-[50px] md:hidden flex justify-center'>
                    <Social />
                </div>
            </div>
        </section>
    )
}
//Как только экран пользователя касается низа сайта, кнопка может перемещаться наверх и становится фиксированной
//Но фиксация на боттом-10%
//А при при первом появлении кнопки она на произвольном расстоянии от низа (в зависимости от верстки).
// var buttonStartingPosition Поэтому нужно найти расстояние от низа сайта до нижнего края кнопки.
// var viewportPosition И разрешать ей перемешаться только когда расстоние от низа сайта до низа вьюпорта + расстояние от низ вьюпорта до низа кнопки при фикс боттом-10% больше чем 
// тоесть когда viewportPosition > buttonStartingPosition, если меньше тогда у нее обычная позиция. 