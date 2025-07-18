export default function AppIntro() {
  return (
    <section className="relative transition-all ease-in-out duration-500 overflow-hidden min-h-screen ">
      
      {/* Centered pingForPeer block */}
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center ">
        <div className="relative -left-[30%] flex gap-3">

         <div className=" w-6 h-6 bg-pink-500 rounded-lg animate-pixel-jump flex justify-start"></div>
         <div className=" w-6 h-6 bg-pink-500 rounded-lg animate-pixel-jump-2 flex justify-start"></div>
         <div className=" w-6 h-6 bg-pink-500 rounded-lg animate-pixel-jump flex justify-start"></div>
         </div>
        <div className="border-[2px] border-white w-[80%] h-[60%] rounded-[30px] flex justify-center items-center display-grid">
        <div className="border p-10  bg-[#070707] border-gray-600/20 text-white font-sora-semibold text-4xl flex items-center justify-center max-w-screen">
          <span className="typewriter w-full text-center">pingForPeer</span>
        </div>
      </div>
      </div>

      {/* Background image with blur */}
      <div className="absolute top-[50%] md:bottom-0 md:left-0 md:translate-[400px] z-[-1]">
        <img src="/images/spotball.png" alt="" className="opacity-50 blur-xl" />
      </div>

      {/* Top gradient bar with 3 pink bars */}
      

      {/* Bottom gradient bar with 3 boxes */}
      

      <div className="absolute justify-center">

     

      </div>



    </section>
  );
}
