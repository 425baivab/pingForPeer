export default function Innovate() {
  return (
    <section className="">
      {/* Header row */}
      <div className="w-full  py-[120px] border-t border-b border-white/20">
        <div className="flex flex-col lg:flex-row justify-around items-center text-center lg:text-left gap-6 lg:gap-14 px-4 sm:px-6 lg:px-12">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-satoshi-medium text-white">
            Innovate.
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-md font-mont-regular">
            Spark ideas, invite input, and build alongside others.
          </p>
        </div>
      </div>

      {/* Horizontal Feature List */}
      <div className="px-6 sm:px-10 lg:px-[200px] mt-16">
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/20 text-left">
          
          {/* Feature 1 */}
          <div className="flex-1 px-6 py-10 flex flex-col gap-4">
            <p className="text-white font-satoshi-bold text-lg sm:text-xl tracking-tight">
              Post your ideas
            </p>
            <p className="text-white/70 text-sm font-satoshi-regular">
              Share what you’ve been thinking — a new project, a concept, or just a curious question.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 px-6 py-10 flex flex-col gap-4">
            <p className="text-white font-satoshi-bold text-lg sm:text-xl tracking-tight">
              Get reactions & advice
            </p>
            <p className="text-white/70 text-sm font-satoshi-regular">
              Let peers engage — with suggestions, upvotes, reactions, or improvements.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 px-6 py-10 flex flex-col gap-4">
            <p className="text-white font-satoshi-bold text-lg sm:text-xl tracking-tight">
              Collaborate with like mindeds
            </p>
            <p className="text-white/70 text-sm font-satoshi-regular">
              Find people with matching energy and turn solo sparks into group fire.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
