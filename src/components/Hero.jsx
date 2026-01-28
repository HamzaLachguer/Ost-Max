import logoMobile from "../assets/logo-mobile.svg"
import logoDesktop from "../assets/logo-desktop.svg"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const productRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    const floating = gsap.to(productRef.current, {
      y: 25,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    });

    gsap.to(productRef.current, {
      y: -50,
      scale: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onEnter: () => floating.pause(),
        onLeaveBack: () => floating.play(),
      }
    })
  }, { scope: productRef })

  return (
    <section className="h-screen px-4 md:px-10 lg:px-20 pt-18 pb-5 flex flex-col justify-between">
      <div className="relative ">
        <div
          ref={logoRef}
          className="w-full h-fit">
          <img 
            className="h-fit w-4/5 object-center object-cover md:hidden"
            src={logoMobile} alt="Ost brand logo"
          />
          <img 
            className="w-full object-center object-cover hidden md:block"
            src={logoDesktop} alt="Ost brand logo" 
          />
        </div>

        <div className="w-full absolute left-0 top-1/4 md:top-1/8 flex-center">
          <img 
            ref={productRef}
            className="h-full max-h-[500px] md:max-h-[550px] will-change-transform"
            src="https://cdn.shopify.com/s/files/1/0376/5420/0459/files/0000s_0021_Headphone1-white.png?v=1753434394" 
            alt="Ost Max headphones" 
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-5 justify-between lg:flex-row lg:items-end"
      >
        <div className="flex flex-col gap-5 max-w-100 text-sm font-medium">
          <p className="text-xs text-[#CCCCCC]">Introducing Ost Max</p>
          <p className="">Experience studio-grade audio with industry-leading noise cancellation and stunning minimalist design.</p>

          <button
            type="button"
            className="border px-5 py-2.5 w-fit rounded-full transition-300 hover:bg-black hover:text-white"
          >Watch Demo</button>
        </div>

        <p className="text-sm font-medium text-dark-gray">
          Ships Starting <span className="text-black">July 15 ·</span> Limited Quantities Available</p>
      </div>
    </section>
  )
}

export default Hero;