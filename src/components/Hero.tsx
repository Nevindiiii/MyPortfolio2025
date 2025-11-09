import { ArrowRight } from "lucide-react";
import NevindiImage from "../assets/Nevindi.webp";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6 py-20 bg-white"
    >
      <div className="grid items-center w-full gap-12 mx-auto max-w-7xl md:grid-cols-2">
        <div className="order-2 space-y-6 md:order-1">
          <h1 className="text-5xl italic font-bold leading-tight text-black md:text-6xl lg:text-7xl">
            Nevindi Sadeera Lokuliyanage
          </h1>
          <p className="text-xl font-light text-gray-700 md:text-2xl">
            Full Stack Developer | MERN Stack | JavaScript Enthusiast
          </p>
          <button
            onClick={scrollToProjects}
            className="btn-primary flex items-center gap-2 mt-8 w-fit group"
          >
            View Projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img
              src={NevindiImage}
              alt="Nevindi Sadeera Lokuliyanage"
              className="hero-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
