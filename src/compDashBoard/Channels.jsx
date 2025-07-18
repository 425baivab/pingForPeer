import { useState } from 'react';
import ServerName from './ServerName';

export default function Channels({
  channels,
  setChannels,
  activeChannelIndex,
  setActiveChannelIndex,
}) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedName(channels[index].name);
  };

  const handleSave = (index) => {
    const updated = [...channels];
    updated[index].name = editedName || `Channel ${index + 1}`;
    setChannels(updated);
    setEditingIndex(null);
  };

  const handleAddChannel = () => {
    const newChannel = {
      name: `Channel ${channels.length + 1}`,
      icon: '#',
    };
    setChannels([...channels, newChannel]);
    setActiveChannelIndex(channels.length);
  };

  return (
    <div className="overflow-auto no-scrollbar relative w-[280px] flex flex-col h-screen p-3 gap-2 text-white font-satoshi-semibold bg-black border-r-[0.5px] border-white/14">
      
      {/* Banner - fixed height */}
      <div className="relative w-full h-[100px] border border-white/20 rounded-lg overflow-hidden mb-2 flex-shrink-0">
        <img
          src="/images/chargawx2.png"
          alt="Server Banner"
          className="absolute w-full h-full object-cover scale-105"
        />
        <div className="absolute top-2 left-3 flex flex-col gap-1">
          <div className="text-2xl">
            <ServerName />
          </div>
          <p className="text-xs text-white/80">Welcome to your domain.</p>
        </div>
      </div>

      {/* Sidebar Hero - fixed height */}
      <div className="p-2 flex-shrink-0">
        <ul className="flex flex-col gap-1 text-white/50 text-[14px]">
          <li className="hover:bg-violet-700/10 border border-white/10 hover:border-t-2 hover:border-t-white/40 hover:text-white rounded cursor-pointer p-1 "># Menu</li>
          <li className="hover:bg-violet-700/10 border border-white/10 hover:border-t-2 hover:border-t-white/40 hover:text-white rounded cursor-pointer p-1"># SubPorts</li>
          <li className="hover:bg-violet-700/10 border border-white/10 hover:border-t-2 hover:border-t-white/40 hover:text-white rounded cursor-pointer p-1"># Updates</li>
        </ul>
      </div>

      {/* Channel List Box - flex-grow to fill remaining space */}
      <div className="flex flex-col gap-0 border-[0.7px] border-white/10 rounded-lg flex-grow min-h-[350px]">
        
        {/* Header */}
        <div className="flex items-center justify-between bg-pink-600/ px-3 py-2 rounded-t-lg border-b-[0.5px] border-white/10 text-xs text-white/70 flex-shrink-0">
          <span>Channels</span>
          <span className="text-white/40 text-sm">⧉</span>
        </div>

        {/* Scrollable Channel List */}
        <div className="no-scrollbar flex flex-col gap-2 bg-white/10 text-[13px] p-2 overflow-y-auto flex-grow min-h-0">
          {channels.map((ch, index) => (
            <div
              key={index}
              onClick={() => setActiveChannelIndex(index)}
              className={`p-2 rounded-lg cursor-pointer flex items-center justify-between group ${
                activeChannelIndex === index
                  ? 'bg-violet-700 font-bold'
                  : 'hover:bg-white/10'
              }`}
            >
              {editingIndex === index ? (
                <input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  onBlur={() => handleSave(index)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave(index)}
                  autoFocus
                  className="bg-transparent outline-none text-white text-sm w-full"
                />
              ) : (
                <span
                  onDoubleClick={() => handleEdit(index)}
                  className="flex gap-2 items-center"
                >
                  <span>{ch.icon}</span>
                  <span>| ~ {ch.name}</span>
                </span>
              )}
              {editingIndex !== index && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(index);
                  }}
                  className="text-white/30 hover:text-white/70 text-xs ml-2 hidden group-hover:inline-block"
                >
                  ✎
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Add Channel Button */}
        <button
          onClick={handleAddChannel}
          className="text-violet-500 text-[15px] border-[1px] font-satoshi-semibold p-1 rounded-b-lg  hover:bg-violet-700 hover:text-white cursor-pointer flex-shrink-0"
        >
          + Add new
        </button>
      </div>

      {/* Bottom Navigation - fixed height */}
      <div className="text-white/50 font-satoshi-semibold mt-2 text-[14px] px-2 flex-shrink-0">
        <ul className="flex flex-col gap-1">
          <li className="cursor-pointer hover:text-white border border-white/10 p-1 rounded"># Settings</li>
          <li className="cursor-pointer hover:text-white border border-white/10 p-1 rounded"># Updates</li>
          <li className="cursor-pointer hover:text-white border border-white/10 p-1 rounded"># Connections</li>
          <li className="cursor-pointer hover:text-white border border-white/10 p-1 rounded"># Inbox</li>
        </ul>
      </div>
    </div>
  );
}
