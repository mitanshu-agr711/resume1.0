import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LampDemo() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",    // Animation starts when top of h1 hits 80% of viewport
          end: "top 20%",      // Animation ends when top of h1 hits 20% of viewport
          scrub: true,
          markers: true,       // Show markers for debugging
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <LampContainer>
      <h1
        ref={textRef}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 min-h-[40vh] py-8
        bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </h1>
      {/* Add extra content below to ensure the page is scrollable */}
      <div style={{ height: "120vh" }} />
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <section
      className={
        "relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 min-h-[60vh] py-8 " +
        (className || "")
      }
    >
      {/* Lamp effect layers */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <div
          className="absolute inset-auto right-1/2 h-40 overflow-visible w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #06b6d4 10%, transparent 90%)`,
          }}
        >
          <div className="absolute w-full left-0 bg-slate-950 h-24 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-24 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          className="absolute inset-auto left-1/2 h-40 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 70%, #06b6d4 100%)`,
          }}
        >
          <div className="absolute w-24 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-24 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-24 w-full translate-y-6 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-20 w-[16rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <div className="absolute inset-auto z-30 h-20 w-40 -translate-y-[3rem] rounded-full bg-cyan-400 blur-2xl"></div>
        <div className="absolute inset-auto z-50 h-0.5 w-[18rem] -translate-y-[3.5rem] bg-cyan-400"></div>
        <div className="absolute inset-auto z-40 h-24 w-full -translate-y-[6rem] bg-slate-950"></div>
      </div>
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </section>
  );
};
