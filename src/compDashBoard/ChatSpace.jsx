import ChatInput from "./ChatInput";
import { useState } from "react";

export default function ChatSpace({ channel }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen w-full flex bg-[#000000] text-white relative overflow-hidden">

      {/* Sidebar */}
      <div
        className="flex-shrink-0 w-64 h-full bg-violet-700/10 border-r border-white/5 shadow-md overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out"
        style={{
          width: isOpen ? "14rem" : "0",
          minWidth: isOpen ? "14rem" : "0",
        }}
      >
        {/* Top section */}
        <div className="w-full bg-violet-500 text-white px-4 py-2 font-satoshi-medium text-[14px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="truncate text-gray-300">ACTIVE</span>
          </div>
          <div className="flex justify-end bg-white/10 px-3 py-1 rounded text-sm hover:bg-white/20 transition truncate">
            ➕
          </div>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 gap-1 overflow-y-auto"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toggle Button */}
        <div className="flex justify-start bg-[#000000] border-b border-white/10 z-30">
          <button
            onClick={toggleSidebar}
            className="rounded-r bg-violet-400 w-[40px] hover:bg-violet-600 transition"
          >
            {isOpen ? "<<" : ">>"}
          </button>
        </div>

        {/* Channel Info */}
        <div
          key={channel.name}
          className="px-5 py-4 border-b border-white/10 bg-[#050505] animate-slideDown space-y-2"
        >
          <div className="flex items-center justify-between gap-4">
            {/* Left side: Title */}
            <h1 className="text-[25px] font-satoshi-bold">
              #{channel.name}
            </h1>

            {/* Search bar */}
            <input
              type="text"
              placeholder="Search..."
              className=" translate-y-8 bg-[#111] border border-white/20 text-sm text-white px-3 py-1 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-400 w-[180px]"
            />
          </div>

          {/* Descriptions BELOW title/search */}
          {channel.type === "text" && (
            <p className="text-[15px] text-gray-500 font-satoshi">
              This is a text-based chat channel.
            </p>
          )}
          {channel.type === "log" && (
            <p className="text-[15px] text-gray-500 font-satoshi">
              🛠️ Log progress and updates here.
            </p>
          )}
          {channel.type === "code" && (
            <p className="text-[15px] text-gray-500 font-satoshi">
              💻 Share your code and snippets here.
            </p>
          )}
          {channel.type === "fun" && (
            <p className="text-[15px] text-gray-500 font-satoshi">
              🎲 Random off-topic fun channel.
            </p>
          )}
        </div>

        {/* Messages */}
        <div className="px-5 py-4 space-y-3 overflow-y-auto flex-1 no-scrollbar">
          <p className="text-white">hello</p>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-[#050505]">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
