export default function Features() {
  return (
    <section className="pt-0 px-4 text-white font-jb-regular">
      <div className="max-w-7xl mx-auto">

        {/* Feature Cards Grid */}
        <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 border border-white/10 overflow-hidden">

          {/* FEATURE 1 */}
          <div className="border-r border-b border-white/10 h-[550px] p-6 relative">
            <h2 className="font-satoshi-semibold text-xl lg:text-2xl">Real-time Query Collaboration</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-violet-500 to-white/10 rounded-full mt-2" />
            <p className="mt-4 text-white/60 text-sm lg:text-base">
              Instantly connect for doubt help or quick problem-solving.
            </p>

            <div className="absolute bg-white/2 bottom-0 left-0 w-[96%] h-[380px] border-r border-t border-white/10 rounded-tr-xl rounded-bl-xl p-6 flex flex-col justify-between shadow-inner">
              <h1 className="mb-4 text-xl text-white/40 font-mono tracking-widest">{"</>"}</h1>
              <span className="bg-violet-400/10 text-violet-300 text-sm border border-white/10 rounded-md px-4 py-1 w-fit font-satoshi-semibold">
                Quick Query Room
              </span>
              <p className="mt-4 bg-white/5 text-white/80 rounded-xl px-4 py-3 text-sm leading-relaxed">
                Student A is stuck on a calculus problem before a test. They post a screenshot in the room. Peers instantly pitch in with step-by-step suggestions in real-time.
              </p>
              <button className="mt-6 px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition w-fit">
                Join a Room →
              </button>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="border-b border-white/10 h-[550px] p-6 relative">
            <h2 className="font-satoshi-semibold text-xl lg:text-2xl">Homework Help & Exchange</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-white/10 rounded-full mt-2" />
            <p className="mt-4 text-white/60 text-sm lg:text-base">
              Get hints or swap homework with your circle.
            </p>

            <div className="absolute bg-white/2 bottom-0 left-0 w-[96%] h-[380px] border-r border-t border-white/10 rounded-tr-xl rounded-bl-xl p-6 flex flex-col justify-between shadow-inner">
              <h1 className="mb-4 text-xl text-white/40 font-mono tracking-widest">{"</>"}</h1>
              <span className="bg-blue-400/10 text-blue-300 text-sm border border-white/10 rounded-md px-4 py-1 w-fit font-satoshi-semibold">
                Homework Board
              </span>
              <p className="mt-4 bg-white/5 text-white/80 rounded-xl px-4 py-3 text-sm leading-relaxed">
                A student uploads a tricky circuit design problem. Within an hour, 3 peers provide hints, one even uploads a simplified simulation file to explain the concept.
              </p>
              <button className="mt-6 px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition w-fit">
                Ask for Help →
              </button>
            </div>
          </div>

          {/* FEATURE 3 */}
          <div className="border-r border-white/10 h-[550px] p-6 relative">
            <h2 className="font-satoshi-semibold text-xl lg:text-2xl">Project & Assignment Teamups</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-violet-500 to-white/10 rounded-full mt-2" />
            <p className="mt-4 text-white/60 text-sm lg:text-base">
              Find teammates for your next class task or hackathon.
            </p>

            <div className="absolute bg-white/2 bottom-0 left-0 w-[96%] h-[380px] border-r border-t border-white/10 rounded-tr-xl rounded-bl-xl p-6 flex flex-col justify-between shadow-inner">
              <h1 className="mb-4 text-xl text-white/40 font-mono tracking-widest">{"</>"}</h1>
              <span className="bg-violet-500/10 text-violet-400 text-sm border border-white/10 rounded-md px-4 py-1 w-fit font-satoshi-semibold">
                Team Up Board
              </span>
              <p className="mt-4 bg-white/5 text-white/80 rounded-xl px-4 py-3 text-sm leading-relaxed">
                Before the deadline of a robotics mini-project, 4 users post their skills and availability. The app auto-matches them into a team with roles and deadlines.
              </p>
              <button className="mt-6 px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition w-fit">
                Find Teammates →
              </button>
            </div>
          </div>

          {/* FEATURE 4 */}
          <div className="h-[550px] p-6 relative">
            <h2 className="font-satoshi-semibold text-xl lg:text-2xl">Lost & Found Alerts</h2>
            <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-white/10 rounded-full mt-2" />
            <p className="mt-4 text-white/60 text-sm lg:text-base">
              Tag lost or found items and alert nearby students.
            </p>

            <div className="absolute bg-white/2 bottom-0 left-0 w-[96%] h-[380px] border-r border-t border-white/10 rounded-tr-xl rounded-bl-xl p-6 flex flex-col justify-between shadow-inner">
              <h1 className="mb-4 text-xl text-white/40 font-mono tracking-widest">{"</>"}</h1>
              <span className="bg-blue-500/10 text-blue-300 text-sm border border-white/10 rounded-md px-4 py-1 w-fit font-satoshi-semibold">
                Campus Radar
              </span>
              <p className="mt-4 bg-white/5 text-white/80 rounded-xl px-4 py-3 text-sm leading-relaxed">
                Someone finds a wallet near the cafeteria. They create a post and tag the location. Notifications are sent to nearby users, and the owner retrieves it within 15 minutes.
              </p>
              <button className="mt-6 px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition w-fit">
                Report Item →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
