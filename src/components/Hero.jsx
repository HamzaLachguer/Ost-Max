import logoMobile from "../assets/logo-mobile.svg"
import logoDesktop from "../assets/logo-desktop.svg"

const Hero = () => {
  return (
    <section className="h-screen px-4 md:px-10 lg:px-20 pt-18 pb-5 flex flex-col justify-between">
      <div className="relative ">
        <div className="w-full h-fit">
          <img 
            className="h-fit w-2/3 object-center object-cover md:hidden"
            src={logoMobile} alt="" />
          <img 
            className="w-full object-center object-cover hidden md:block"
            src={logoDesktop} alt="" />
        </div>

        <div className="w-full absolute left-0 top-1/3 md:top-1/8 flex items-center justify-end md:justify-center">
          <img 
            className="h-full max-h-[500px]"
            src="https://cdn.shopify.com/s/files/1/0376/5420/0459/files/0000s_0021_Headphone1-white.png?v=1753434394" 
            alt="" 
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-5 justify-between lg:flex-row lg:items-end"
      >
        <div className="flex flex-col gap-5 max-w-100 text-sm font-medium">
          <p className="text-xs text-dark-grey-grey">Introducing Ost Max</p>
          <p className="">Experience studio-grade audio with industry-leading noise cancellation and stunning minimalist design.</p>

          <button
            type="button"
            className="border px-5 py-2 w-fit rounded-lg transition-300 hover:bg-black hover:text-white"
          >Watch Demo</button>
        </div>

        <p className="text-sm font-medium text-dark-gray">
          Ships Starting <span className="text-black">July 15 ·</span> Limited Quantities Available</p>
      </div>
    </section>
  )
}

export default Hero;