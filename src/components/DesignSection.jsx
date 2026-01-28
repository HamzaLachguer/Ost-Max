
import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"

import { design } from "../../constants"

const DesignSection = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const [isMoreShown, setIsMoreShown] = useState(false);

  const designSlides = useMemo(() => {
    if (!design.length) return [];

    return [
      design[design.length - 1], 
      ...design, 
      design[0]
    ]
  }, [])

  const slideRef = useRef(null)

  const nextSlide = () => {
    setIsAnimating(true);
    setSlideIndex((prev) => prev + 1);
  }

  const previousSlide = () => {
    setIsAnimating(true)
    setSlideIndex((prev) => prev - 1);
  }

  useEffect(() => {
    const slider = slideRef.current;
    if (!slider) return;

    const onEnd = () => {
      setIsAnimating(false);

      if (slideIndex === designSlides.length - 1) {
        setSlideIndex(1);
      }

      if (slideIndex === 0) {
        setSlideIndex(designSlides.length - 2)
      }
    }

    slider.addEventListener('transitionend', onEnd);
    return () => slider.removeEventListener('transitionend', onEnd);
  }, [slideIndex, designSlides.length])

  const realIndex = slideIndex === 0
          ? design.length - 1
          : slideIndex === designSlides.length - 1
            ? 0
            : slideIndex - 1;

  const slide = design[realIndex];

  return (
    <section 
      className="flex flex-col gap-8"
    >
      {/* <div className="flex flex-col gap-2 px-4 md:px-10 lg:px-20">
        <p className="text-xs md:text-sm leading-5 text-[#CCCDC7]">Design (1)</p>
        <h2 className="text-3xl md:text-5xl font-medium">A radically original <br /> composition </h2>
      </div> */}

      <div className="h-screen w-full relative">
        <div 
          className="overflow-hidden"
        >
          <ul 
            ref={slideRef}
            className={clsx(
              "flex gap-0",
              isAnimating ? "transition-transform duration-500 ease-in-out" : ""
            )}
            style={{transform: `translateX(-${slideIndex * 100}%)`}}
          >
            {designSlides.map((item, index) => (
              <li
                key={`${item.id} - ${index}`}
                className="flex-none h-screen w-full overflow-hidden"
              >
                <img 
                  className="h-full w-full object-center object-cover"
                  src={item.mediaSrc} 
                  alt={item.title} 
                />
              </li>
            ))}
          </ul>
        </div>

        <div
          className="absolute z-20 bottom-0 left-0 w-full flex flex-col items-center gap-4 p-4 md:pb-8"
        >
          <div
            className={clsx(
              "w-full md:max-w-125 p-2 md:p-5 rounded-2xl md:rounded-3xl bg-[#E5E7EB] flex flex-col justify-end gap-8",
              isMoreShown && "h-[calc(100vh-108px)] md:h-[calc(100vh-136px)] transition-300 grid grid-rows-2"
            )}
          >
            <div className={clsx(
              isMoreShown && "flex-center"
              )}>
              <h3 className="text-lg md:text-[26px] md:leading-8 leading-6 tracking-tight font-medium">{slide.title}</h3>
            </div>

            <div className="flex flex-col justify-end gap-4">
              <p className={clsx(
                  "text-xs md:text-sm font-normal",
                  isMoreShown ? "" : "line-clamp-2",
                )}>{slide.desc}</p>

              <button
                type="button"
                className="text-xs md:text-sm leading-4 md:leading-5 font-medium w-fit px-3 py-1 md:py-1.5 bg-white rounded-full"
                onClick={() => setIsMoreShown(!isMoreShown)}
              >{isMoreShown ? "Less" : "More"}</button>
            </div>
          </div>

          <ul 
            className="flex gap-2 w-fit"
          >
            {design.map((item, index) => (
              <li 
                key={item.id}
                role="button"
                className={clsx(
                  "h-2 rounded-full cursor-pointer transition-300",
                  index === realIndex ? "bg-[#585a5a] w-6" : "bg-[#d8d9d9] w-2"
                )}
                onClick={() => {
                  setIsAnimating(true);
                  setSlideIndex(index + 1);
                }}
              ></li>
            ))}
          </ul>
        </div>

        <div className="absolute top-0 z-10 h-full w-full grid grid-cols-2">
          <div
            role="button"
            aria-label="previous slide"
            className="h-full w-full"
            onClick={() => previousSlide()}
          ></div>
          <div
            role="button"
            aria-label="next slide"
            className="h-full w-full"
            onClick={() => nextSlide()}
          ></div>
        </div>
      </div>

    </section>
  )
}

export default DesignSection