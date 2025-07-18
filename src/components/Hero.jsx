import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row-reverse justify-center items-center w-full min-h-screen pt-10 sm:pt-10 px-4 gap-10 pb-0 mb-0 transition-all duration-500 ease-in-out overflow-hidden">

      <div className="hidden md:block absolute bottom-0 left-0 z-[-900] pointer-events-none translate-y-[160px]">
        <h1
          className="text-[clamp(80px,30vw,800px)] font-satoshi-bold select-none opacity-5 lg:opacity-2 mix-blend-difference whitespace-nowrap bottom-0"
          style={{
            WebkitTextStroke: '5px white',
            color: 'transparent',
          }}
        >
          425
        </h1>
      </div>
      <div className="hidden lg:block absolute inset-0 z-[-10] bg-gradient-to-b from-purple-600 to-55% to-transparent" />
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-0
         custom-gradient-origin "
      />
      <div
        className="absolute inset-0 pointer-events-none z-[-100]
         custom-gradient-origin-2 md:hidden"
      />

      {/* Image & glow container */}
      <div className="relative z-[10] w-full max-w-full md:w-[600px] flex items-center justify-center mt-8 sm:mt-10 lg:mt-0 transition-all duration-700 ease-in-out">
        {/* Inner ellipse glow for mobile */}
        <div
          className="md:hidden absolute z-[0] bottom-[10%] left-1/2 -translate-x-1/2 rounded-full mix-blend-normal pointer-events-none transition-all duration-200"
          style={{
            width: "clamp(160px, 40vw, 370px)",
            height: "clamp(140px, 35vw, 280px)",
            backgroundColor: "#070707",
            filter: "blur(50px)",
            opacity: 0.2,
          }}
        />

        {/* Mascot Image */}
        <div className="relative z-10 group">
          <img
            src="/images/bhbt.png"
            alt="Floating"
            className="w-full md:w-full max-w-full object-contain animate-smooth-float cursor-pointer transition-all duration-700 ease-in-out"
          />
          {/* Tooltip */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-[20] bg-white font-sora-semibold px-3 py-2 text-[10px] text-violet-600 opacity-0 group-hover:opacity-100 rounded-[15px] text-sm transition duration-300 whitespace-pre-line">
            Hello! I am the mascot.
            <br />
            Welcome to our App!
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-4 relative z-[10] sm:gap-5 lg:gap-7 text-center md:text-left max-w-xl w-full transition-all duration-700 ease-in-out px-2 lg:ml-45 sm:px-0 md:mt-18">
        <h1 className="text-[clamp(2.4rem,8vw,4.3rem)] font-satoshi-semibold leading-[0.9] lg:leading-[0.9] text-white transition-all duration-500 ease-in-out">
          Connect. <br /> Build. Belong.
        </h1>

        <p className="text-[clamp(1.1rem,3vw,1.5rem)] leading-snug text-gray-400 md:text-white mt-3 sm:mt-4 md:mt-5 font-satoshi-medium transition-all duration-300 ease-in-out text-center md:text-left">
          Meet peers, share ideas, and collaborate on what matters most.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 transition-all duration-700">
          <div
            to="/dashboard"
            className="text-sm sm:text-lg lg:text-xl font-satoshi px-5 py-3 sm:px-6 sm:py-4 bg-white text-black rounded-xl font-semibold text-center hover:bg-violet-200/90 transition-all duration-100"
          >
            Get Started
          </div>

          <div
            to="/dashboard"
            className="text-sm sm:text-lg lg:text-xl text-white/80 font-satoshi px-5 py-3 sm:px-6 sm:py-4 border border-white/20 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </div>
        </div>
      </div>
    </section>
  );
}
