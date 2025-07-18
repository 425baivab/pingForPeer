export default function NewEcosystem() {
  return (
    <section className="relative mt-20 text-white font-satoshi">

      <div className="relative z-10 px-6 lg:px-[200px] py-16">

        {/* Main Section Heading */}
        <div className="text-left flex flex-col gap-4 md:text-left mb-20 md:flex-row md:justify-around">
           <div className="mb-5 border-white/20 font-jb-regular text-white/40 text-xs tracking-widest uppercase rounded-full">
            {'•'} New Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-satoshi-bold mb-4 tracking-wide text-white">
           Build a structured <br/><span className="text-violet-400">community.</span>
          </h1>
          <p className="text-white/50 md:max-w-xl text-md font-satoshi-medium md:text-xl leading-relaxed">
            Create spaces that drive focus, reduce noise, and empower members to interact meaningfully—with the right tools at the right time.
          </p>
          
         
         
        </div>
        
          <button className="mt-0 px-5 py-2 rounded-full border border-white/20 text-md font-jb-regular tracking-wide text-white hover:bg-white/10 transition">
            Create →
          </button>
        
          

        {/* Section Label */}
        <div className="flex justify-start mb-16">
         
        </div>

              

        {/* 3 Cards Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* CARD 1 */}
          <div className="flex flex-col items-start w-full md:w-1/3">
            {/* Outside Label */}
            <div className="mb-4">
              <div className="px-3 py-1 rounded-full text-white border-2 border-white/20 text-sm w-fit bg-violet-400/50 font-satoshi-medium">
                NOISE
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col border border-white/20 rounded-2xl bg-zinc-900/30 w-full p-6 h-full">
              <img src="/images/noise.png" alt="" className="w-[48px]" />
              <div className="flex justify-between items-center">
                
              <h2 className="text-xl font-satoshi-semibold mb-4">
                Cut the noise
              </h2>
              <div className="flex flex-row gap-1 mb-2 ">
                <div className="bg-white/40 w-2 h-2 rounded-full"></div>
                <div className="bg-white/30 w-2 h-2 rounded-full"></div>
                <div className="bg-white/20 w-2 h-2 rounded-full"></div>
              </div>

              </div>
              
              <div className="flex justify-center items-center p-4 bg-zinc-600/20 bg-gradient-to-t from-black/50 to-transparent rounded-lg mb-4">
              <img src="/images/imagePH.png" alt="" className="w-[100px] mb-2" />

              </div>
              <div className="mt-auto">
                <p className="text-white/50 text-md font-satoshi-medium mb-6">
                  Group chats turn into clutter fast. This space keeps things structured and purpose-driven — no more missed context.
                </p>
                <button className="px-5 py-2.5 rounded-md border border-white/20 text-sm text-white hover:bg-white/10 transition">
                  LEARN MORE →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-start w-full md:w-1/3">
            {/* Outside Label */}
            
            <div className="mb-4">
              <div className="px-3 py-1 rounded-full text-white border-2 border-white/20 text-sm w-fit font-satoshi-medium  bg-violet-400/50 font-satoshi-medium">
                TOGETHER
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col border border-white/20 rounded-2xl bg-zinc-900/30 w-full p-6 h-full">
                
                  <img src="/images/doc.png" alt="" className="w-[48px]" />
             
              <div className="flex justify-between items-center">
              <h2 className="text-xl font-satoshi-semibold mb-4">
                Keep it all organised
              </h2>
              <div className="flex flex-row gap-1 mb-2 ">
                <div className="bg-white/40 w-2 h-2 rounded-full"></div>
                <div className="bg-white/30 w-2 h-2 rounded-full"></div>
                <div className="bg-white/20 w-2 h-2 rounded-full"></div>
              </div>

              </div>
              
              <div className="flex justify-center items-center p-4 bg-zinc-600/20 bg-gradient-to-t from-black/50 to-transparent rounded-lg mb-4">
              <img src="/images/imagePH.png" alt="" 
              className="w-[100px] mb-2" />

              </div>
              <div className="mt-auto">
                <p className="text-white/50 text-md font-satoshi-medium mb-6">
                 Threads, posts, and files stay organized — so you never have to dig through chat again. Everything’s in place, just when you need it.
                </p>
                <button className="px-5 py-2.5 rounded-md border border-white/20 text-sm text-white hover:bg-white/10 transition">
                  LEARN MORE →
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-start w-full md:w-1/3">
            {/* Outside Label */}
            <div className="mb-4">
              <div className="px-3 py-1 rounded-full text-white border-2 border-white/20 text-sm w-fit fit bg-violet-400/50 font-satoshi-medium">
                EXECUTION
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col border border-white/20 rounded-2xl bg-zinc-900/30 w-full p-6 h-full">


              <img src="/images/chaticon.png" alt="" className="w-[48px]" />

              <div className="flex justify-between items-center">
              <h2 className="text-xl font-satoshi-semibold mb-4">
                Do more than chat
              </h2>
              <div className="flex flex-row gap-1 mb-2 ">
                <div className="bg-white/40 w-2 h-2 rounded-full"></div>
                <div className="bg-white/30 w-2 h-2 rounded-full"></div>
                <div className="bg-white/20 w-2 h-2 rounded-full"></div>
              </div>

              </div>
              
              <div className="flex justify-center items-center p-4 bg-zinc-600/20 bg-gradient-to-t from-black/50 to-transparent rounded-lg mb-4">
              <img src="/images/imagePH.png" alt="" className="w-[100px] mb-2" />

              </div>
              <div className="mt-auto">
                <p className="text-white/50 text-md font-satoshi-medium mb-6">
                  Engage, contribute, and connect with purpose. Help others, get support, share progress, and grow together as a productive community.

                </p>
                <button className="px-5 py-2.5 rounded-md border border-white/20 text-sm text-white hover:bg-white/10 transition">
                  LEARN MORE →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
