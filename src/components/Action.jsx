export default function ActionSection() {
  return (
    <section className="w-full mt-20  border-white/10 px-4 sm:px-8 lg:px-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
       
        <div className="py-10 lg:p-20 flex flex-col justify-center items-start border-white/10">
          <h2 className="text-4xl lg:text-5xl font-satoshi font-semibold text-white tracking-tight leading-tight mb-4">
            One tap to build your entire hub
          </h2>
          <p className="text-white/50 md:max-w-xl text-md font-satoshi-medium md:text-xl leading-relaxed">
          Just hit create, give your space a name, and it's ready to go. Whether it’s for college, office, or side projects—each hub comes thoughtfully structured and pre-optimized with the right tools and layout. No setup, no hassle—just plug in and start working.


          </p>

          <button className="mt-8 px-5 py-2 rounded-full border border-white/20 text-md font-jb-regular tracking-wide text-white hover:bg-white/10 transition">
            Create →
          </button>
        </div>

        {/* Right Column: Mockup UI */}
        <div className="p-10 lg:p-20 flex justify-center items-center bg-zinc-300/80 rounded-xl ">
          <div className="w-full max-w-sm rounded-2xl border border-zinc-800  p-6 font-jb text-zinc-200 bg-[#070707] "  style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.7)' }}>
            {/* Mockup Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-semibold text-zinc-300">Choose what to create</h3>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-4">
              <button className="w-full px-6 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition text-left">
                <p className="text-sm font-medium tracking-wide">For College</p>
                <p className="text-xs text-zinc-400 mt-1">Clubs, assignments, doubts, projects</p>
              </button>

              <button className="w-full px-6 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition text-left">
                <p className="text-sm font-medium tracking-wide">Office</p>
                <p className="text-xs text-zinc-400 mt-1">Teams, workspaces, ideas, announcements</p>
              </button>

              <button className="w-full px-6 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition text-left">
                <p className="text-sm font-medium tracking-wide">Startup</p>
                <p className="text-xs text-zinc-400 mt-1">Build your early-stage team & vision</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Column Section */}
      <div className="w-full mt-12  sm:px-12 md:px-24 py-5 text-white font-satoshi  border-white/10">
  <div className="flex flex-col md:flex-row justify-around gap-8 w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
  
    <div className="max-w-sm flex-1 pb-5 md:px-5 md:pb-0">
      <img src="/images/structureicon.png" alt="struct"className="mb-2" />
      <h3 className="text-xl font-semibold mb-2">Pre-built environments</h3>
      <p className="text-zinc-400 text-md font-satoshi-medium">
        Unlike Discord, where building a community means setting up endless channels and roles from scratch,<span className="font-bold text-white"> pingForPeer</span> gives you a head start. Everything’s structured out of the box—whether it’s doubts, discussions, or project spaces. You can still add, rename, or tweak channels to fit your needs, but the essentials are already in place. Less time managing, more time engaging.
      </p>
    </div>

    <div className="max-w-sm flex-1 md:px-5 pb-5 md:pb-0">
      <img src="/images/insideicon.png" alt="inside" className="mb-2" />
      <h3 className="text-xl font-semibold mb-2">Focused by design</h3>
      <p className="text-zinc-400 text-md font-satoshi-medium">
       Each server becomes your entire app experience. Unlike platforms where you juggle multiple communities at once, PingForPeer keeps you immersed in one space at a time. You remain a member of all your servers, but to access a new one, you simply close the current—just like switching home screens on a mobile launcher. This intentional design reduces distractions and helps you stay present, purposeful, and fully engaged with the community you’re in.


      </p>
    </div>

    <div className="max-w-sm flex-1 md:px-2 ">
      <img src="/images/joinicon.png" alt="join" className="mb-3" />
      <h3 className="text-xl font-semibold mb-2">Spaces within spaces</h3>
      <p className="text-zinc-400 font-satoshi-medium text-md">
        Inside each server, you’re not limited to one giant feed. You can explore and join smaller, focused sub-communities—like clubs, batches, teams, or departments—each with its own set of channels, tools, and interactions. It’s like having multiple meaningful circles under one roof, without the clutter of hopping between different platforms. Whether you’re managing a side project, organizing events, or following campus clubs, everything stays organized and easy to reach.
      </p>
    </div>


  </div>

  
</div>

<div className="mt-20 p-5 flex justify-center">
    <p className="text-white/60 font-jb-regular tracking-wide text-center">
      Discord + Reddit + MS Teams<br/> with extra features

    </p>
  </div>




      
    </section>
  );
}
