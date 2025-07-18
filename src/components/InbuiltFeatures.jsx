function InbuiltFeatures() {
  const features = [
    {
      title: "In-App Emails",
      desc: "Each group is assigned a unique email. Whatever you send — docs, OTPs, messages — lands straight in the vault.",
      button: "Open Inbox",
    },
    {
      title: "Auto Sorting",
      desc: "Received and shared files are tagged and categorized automatically for fast lookup and zero clutter.",
      button: "View Files",
    },
    {
      title: "Legacy",
      desc: "Notes, books, and resources from previous batches are archived and passed down for upcoming groups.",
      button: "Access Vault",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-end relative overflow-hidden">
      {/* Bottom Fade */}
     


      {/* Heading */}
      <div className="flex flex-col"></div>
      <div className="absolute top-20 w-full px-6 sm:px-12 lg:px-32 text-center z-50 border-t border-b border-white/10 py-30 lg:flex lg:justify-around">
        <h1 className="text-white text-4xl sm:text-5xl font-satoshi-bold mb-4">
          Inbuilt support.
        </h1>
        <p className="text-white/70 text-lg font-mont-regular">The p-Vault</p>
      </div>

      {/* Stacked Layout */}
      <div className="relative w-[90%] max-w-[800px] h-auto z-30 mt-130">
        {/* Bottom Layer */}
        <div
          className="absolute w-full h-full rounded-tr-lg rounded-l-lg bg-[#070707] border-2 border-b-0 border-white/20 z-10"
          style={{ top: -40, left: 40 }}
        ></div>

        {/* Middle Layer */}
        <div
          className="absolute w-full h-full bg-[#070707] rounded-tr-lg rounded-tl-lg border-2 border-b-0 border-white/20 z-20"
          style={{ top: -20, left: 20 }}
        >
          
        </div>
        

        {/* Top Layer with Features */}
        <div className="relative w-full rounded-tr-lg rounded-tl-lg bg-[#070707] border-t-2 border-l-2 border-r-2 border-white/20 z-30 px-6 sm:px-10 py-10 flex flex-col divide-y-2 divide-white/20">
          {features.map(({ title, desc, button }, index) => (
            <div
              key={index}
              className={`py-6 flex flex-col sm:flex-row justify-between gap-6 sm:items-center`}
            >
              <h3 className="text-white font-satoshi-bold text-lg sm:text-xl uppercase tracking-tight min-w-[140px]">
                {title}
              </h3>
              <div className="flex flex-col gap-2 text-left max-w-xl">
                <p className="text-white/70 text-sm font-satoshi-regular">{desc}</p>
                <button className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-satoshi-medium border border-white/10 hover:border-white rounded-full px-4 py-1 w-fit transition">
                  {button}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-[100%] h-[25%]  bg-gradient-to-b from-transparent via-[#070707]/100 to-[#070707] z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent via-[#070707] to-[#070707] translate-x-5 z-21 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent via-[#070707] to-[#070707] z-11 translate-x-10 pointer-events-none" />





      </div>
    </div>
  );
}

export default InbuiltFeatures;
