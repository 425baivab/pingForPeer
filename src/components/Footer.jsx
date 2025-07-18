export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/20  px-6 sm:px-10 lg:px-[200px] py-12 text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        {/* Left side — Branding */}
        <div className="text-sm font-satoshi-medium text-white/60">
          © {new Date().getFullYear()} pingForPeer. All rights reserved.
        </div>

        {/* Right side — Links */}
        <div className="flex gap-6 text-sm font-satoshi-medium text-white/50">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
