export default function Problem() {
  return (
    <section className="relative w-full py-20 text-white font-satoshi bg-[#121212] bg-gradient-to-b from-transparent via-transparent to-[#070707] sm:mt-20 overflow-hidden transition-all ease-in-out duration-300">
      
      <div className="relative z-10 px-6 lg:px-[200px] flex flex-col">
        <div className="text-left flex flex-col gap-4 md:text-left mb-20 md:flex-row md:justify-around">
          <div className="mb-5 border-white/20 font-jb-regular text-white/40 text-xs tracking-widest uppercase rounded-full">
            {'•'} Ideation
          </div>
          <h1 className="text-4xl md:text-5xl font-satoshi-bold mb-4 tracking-wide text-white">
            WhatsApp isn't<br /><span className="">always enough</span>
          </h1>
          <p className="text-white/50 md:max-w-xl text-md font-satoshi-medium md:text-xl leading-relaxed">
            WhatsApp is great for chatting—but not for real community building.
            Smart communities need structure, focus, and the right tools. Ditch the noise. Embrace clarity, collaboration, and purpose.

          </p>
        </div>

        {/* Cards section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          {/* Card 1 */}
          <div className="w-full md:flex-1 bg-[#1e1e1e] rounded-xl flex flex-col justify-between mx-auto" style={{ boxShadow: '-15px -15px 40px 2px rgba(0,0,0,0.4)' }}>
            <div className="flex justify-between px-7 py-4 rounded-tr-xl rounded-tl-xl">
              <h1 className="w-fit rounded-full font-jb-regular text-white/40">ISSUE</h1>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-70"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300 opacity-70"></div>
                <div className="w-2 h-2 rounded-full bg-blue-100 opacity-70"></div>
              </div>
            </div>

            <div className=" mx-7">
              <div className="mb-1  pt-5 flex flex-col gap-4">
                <h2 className="text-xl font-bold">Lack of Structure</h2>
              </div>
              <div className="text-white/80 text-[16px] leading-relaxed mb-15">
                <p className="text-lg text-white/50 font-satoshi-regular ">
                  WhatsApp groups are just endless message streams. There's no threading, categorization, or dedicated spaces for <span className="text-violet-300">different topics.</span>
                </p>
              </div>
            </div>
            <div className="md:translate-x-3 md:translate-y-5 bg-[#090909] p-7 ml-5 right-0 rounded-xl rounded-bl-none rounded-tr-none text-sm border border-white/10" style={{ boxShadow: '-8px -8px 20px rgba(0,0,0,0.3)' }}>
              <p>Imagine a group of 100 students trying to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-white/90">
                <li>Conversations mix everything — serious, silly, and spam.</li>
                <li>No way to organize documents, doubts, or decisions.</li>
                <li>Messages pile up — you either read them all or miss everything.</li>
                <li>No categories, no threads, no topics — just noise.</li>
                <li>Search is clumsy. You end up asking again.</li>
                <li>Important info is as temporary as the last meme.</li>
              </ul>
              <p className="mt-2 text-white/70">All of this happens in one chat thread. It’s chaos.</p>
            </div>
          </div>

          {/* Card 2 - Text Updated ONLY */}
          <div className="w-full md:flex-1 bg-[#1e1e1e] rounded-xl flex flex-col justify-between mx-auto" style={{ boxShadow: '-15px -15px 40px 2px rgba(0,0,0,0.4)' }}>
            <div className="flex justify-between px-7 py-4 rounded-tr-xl rounded-tl-xl">
              <h1 className="w-fit rounded-full font-jb-regular text-white/40">ISSUE</h1>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-70"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300 opacity-70"></div>
                <div className="w-2 h-2 rounded-full bg-blue-100 opacity-70"></div>
              </div>
            </div>
            <div className="mb-1 pl-7 pt-5 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Low Signal-to-Noise Ratio</h2>
            </div>
            <div className="text-white/80 text-[16px] leading-relaxed mb-15">
              <p className="text-lg text-white/50 font-satoshi-regular px-7">
                In large WhatsApp groups, meaningful discussions are buried under layers of irrelevant banter, memes, and distractions. It’s tough to filter <span className="text-violet-300">what matters.</span>
              </p>
            </div>
            <div className="md:translate-x-3 md:translate-y-5 bg-[#090909] p-7 ml-5 right-0 rounded-xl rounded-bl-none rounded-tr-none text-sm border border-white/10" style={{ boxShadow: '-8px -8px 20px rgba(0,0,0,0.3)' }}>
              <p>Think of a team or class trying to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-white/90">
                <li>Extract key updates from dozens of random comments.</li>
                <li>Find an old resource amidst jokes and GIFs.</li>
                <li>Revisit important topics lost in a sea of chat.</li>
                <li>Decide something without losing the conversation thread.</li>
                <li>Search and still not find what you need.</li>
                <li>Spotlight key ideas that deserve attention.</li>
              </ul>
              <p className="mt-2 text-white/70">It makes collaboration noisy and unreliable.</p>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}
