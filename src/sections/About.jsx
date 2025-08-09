import { Card } from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import FrameWorks from "../components/FrameWorks.jsx";

export const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1 ">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md-inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ajnas</p>
            <p className="subtext">
              I'm a full stack hobbyist developer, with an incline toward
              computational biophysics{" "}
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
          </div>
        </div>
        <div className="grid-black-color grid-2 ">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Code is Craft
            </p>
            <Card
              containerRef={grid2Container}
              text={"SRP"}
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
            />
            <Card
              containerRef={grid2Container}
              text={"SOLID"}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
            />
            <Card
              containerRef={grid2Container}
              text={"GRASP"}
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
            />
            <Card
              containerRef={grid2Container}
              text={"DESIGN"}
              style={{ rotate: "-20deg", bottom: "30%", left: "30%" }}
            />
            <Card
              containerRef={grid2Container}
              image={"assets/logos/csharp-pink.png"}
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
            />
            <Card
              containerRef={grid2Container}
              image={"assets/logos/dotnet-pink.png"}
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
            />
            <Card
              containerRef={grid2Container}
              image={"assets/logos/blazor-pink.png"}
              style={{ rotate: "30deg", top: "5%", left: "10%" }}
            />
          </div>
        </div>
        <div className="grid-default-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time zone</p>
            <p>I'm Based in the India, open to remote work worldwide</p>
            <figure className="absolute left-[20%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        <div className="grid-special-color grid-4">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <p className="text">Let's connect and create something amazing!</p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
