import { useEffect, useState } from "react";

export default function UnderDevelopment() {
  const [hasClicked, setHasClicked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clickedBefore = localStorage.getItem("wasHere");
    if (clickedBefore === "true") {
      setHasClicked(true);
      setCount(1);
    }
  }, []);

  const handleClick = () => {
    const clickedBefore = localStorage.getItem("wasHere") === "true";

    if (!clickedBefore) {
      localStorage.setItem("wasHere", "true");
      setHasClicked(true);
      setCount(1);
    } else {
      localStorage.removeItem("wasHere");
      setHasClicked(false);
      setCount(0);
    }
  };

  return (
    <section className="mt-24 py-[50px] px-6 sm:px-10 lg:px-[200px] font-satoshi bg-gradient-to-t from-[#303030] to-[#070707]">
      <div className="bg-[#0d0d0d] border border-white/10 text-white rounded-xl overflow-hidden" style={{boxShadow: '-18px 18px 25px rgba(0,0,0,0.5)'}}>
        <div className="px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            {/* Left Section */}
            <div className="flex flex-col gap-2">
              
              <p className="text-md sm:text-xl font-satoshi-semibold text-white/90 uppercase tracking-widest mb-1">
                {''}Under Development
              </p>
              <p className="text-base sm:text-lg text-white/60">
                Will be live soon!
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:items-end gap-2">
              <button
                onClick={handleClick}
                className={`px-5 py-2 rounded-md text-md font-medium transition-all duration-200 ${
                  hasClicked
                    ? "bg-white/10 text-white/70 hover:bg-white/20"
                    : "bg-violet-600/20  text-violet-400 hover:bg-violet-600/50"
                }`}
              >
                {hasClicked ? "Thanks for showing up! :)" : "I was here"}
              </button>
              <p className="text-xs text-white/40">People clicked: {count}</p>
            </div>
          </div>

          {/* Divider */}
         
        </div>

        {/* Go to Top Full Width Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-full bg-black border border-t-white/20 border-b-0 border-r-0 border-l-0 text-white/50 hover:text-white text-center py-4 text-sm transition rounded-b-xl"
        >
          Go to Top ▲
        </button>
      </div>
    </section>
  );
}
