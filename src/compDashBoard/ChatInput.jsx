export default function ChatInput() {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 bg-[#2a2a2a] rounded-full px-4 py-3 text-white">
        {/* Icons */}
        <button className="text-xl hover:opacity-80">＋</button>
        <button className="hover:opacity-80">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 12h16M4 6h16M4 18h16" />
          </svg>
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Ask anything"
          className="flex-1 bg-transparent outline-none text-white placeholder-white/50 text-sm"
        />

        {/* Mic & Send */}
        <button className="hover:opacity-80">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 1v22m11-11H1" />
          </svg>
        </button>

        <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
