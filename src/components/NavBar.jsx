import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Outer Transparent Layer */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] lg:w-[80%]">
        {/* Inner Glass Container */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
          {/* Left: Logo */}
          <div className="flex items-center font-sora-semibold text-white text-base sm:text-lg">
            <img src="/images/fevicon.png" alt="Logo" className="w-6 h-6" />
            <span className="pl-2">ping</span>
            <span className="text-white/70">ForPeer</span>
          </div>

          {/* Right: Nav + Launch */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 font-satoshi text-white/80 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Login</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            {/* Launch Button */}
            <div className="hidden sm:block text-xs sm:text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 font-satoshi-medium cursor-pointer">
              Launch
            </div>

            {/* Hamburger for Mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div className={`fixed top-[78px] left-0 min-h-screen w-64 bg-[#95868600] text-white transform transition-transform duration-300 md:hidden z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul className="flex flex-col p-6 gap-6 font-satoshi text-base">
          <li className="cursor-pointer hover:text-violet-400" onClick={() => setIsOpen(false)}>Home</li>
          <li className="cursor-pointer hover:text-violet-400" onClick={() => setIsOpen(false)}>Login</li>
          <li className="cursor-pointer hover:text-violet-400" onClick={() => setIsOpen(false)}>Contact</li>
        </ul>
      </div>
    </>
  );
}
