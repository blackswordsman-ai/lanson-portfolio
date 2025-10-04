import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
      <div id="hero" className="relative flex flex-col w-full overflow-hidden ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
           autoPlay
           muted
           loop
           playsInline
           preload='auto'
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/earth.webm" type="video/webm" />
        </video>

        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-purple-900/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-6 md:pt-0">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
