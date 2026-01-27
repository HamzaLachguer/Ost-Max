import { Link } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP)

import logo from "../assets/logo.svg";

const NavBar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, {
      scrollTrigger: {
        start: 52,
        toggleClass: {
          targets: navRef.current,
          className: "scrolled"
        }
      }
    })
  })

  return (
    <nav 
      ref={navRef}
      className="grid grid-cols-2 md:grid-cols-3 items-center p-4 md:px-10 md:py-5 lg:px-20 fixed w-full z-50 top-0 transition-300"
      aria-label="Navigation menu"
      >
      <Link to="/">
        <img 
          className="h-4 md:h-6"
          src={logo} 
          alt="Ost Max Home page" />
      </Link>

      <ul className="flex justify-end md:justify-center gap-4 md:gap-5 text-[13px] md:text-sm leading-5 font-medium">
        <li className="group h-5 overflow-hidden">
          <Link to={"/Contact"}>
            <div
              className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5"
            >
              <span>Contact</span>
              <span>Contact</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/Blog"}>Blog</Link>
        </li>
        <li>
          <button
            type="button"
            className="md:hidden"
          >Cart ( 0 )</button>
        </li>
      </ul>

      <button
        type="button"
        className="hidden text-sm font-medium md:flex justify-end"
      >Cart ( 0 )</button>
    </nav>
  )
}

export default NavBar