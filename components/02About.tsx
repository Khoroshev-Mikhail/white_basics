export default function About(){
    return(
        <section id="About" className="_section py-[28%] xs:py-[25%] sm:py-[20%] md:py-[14%] bg-cover bg-center bg-no-repeat bg-[url('/img/02About/bg_mobile.png')] md:bg-[url('/img/02About/bg.png')] bg-[#F9F9F9]">
            <div className="_wrapper">
                <div className="flex flex-col mx-auto md:w-2/3 lg:w-1/2 [&>div]:text-center tracking-tight leading-tight">
                    <h2 className="_h2 text-center">
                        About
                    </h2>
                    <div className=" mt-5 md:mt-7.5 _text_14_18">
                        White Basics is a unique opportunity to have multiple coins in your crypto wallet by having only one coin. Use our white sheet of paper to visualize your favorite pet, artist, politician, or draw your own logo on it. 
                        <br />
                        <br />
                        It is your figment of imagination that completes White Basics’ concept.
                    </div>
                    <div className="_text_18_30 mt-[12.5%] xs:mt-[10%] md:mt-[7%]">
                        This way we are uniting each and every coin that has ever been or will be created.
                    </div>
                </div>
            </div>
        </section>
    )
}