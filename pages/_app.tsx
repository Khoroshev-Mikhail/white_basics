import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { helvetica } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    AOS.init({
        once: true
    })
}, [])
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}
