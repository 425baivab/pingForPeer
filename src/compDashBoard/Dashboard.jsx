import { useState } from 'react';
import Channel from './Channels';
import ChatSpace from './ChatSpace';
import PeopleOnline from './PeopleOnline';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [channels, setChannels] = useState([
    { name: 'General Chat', type: 'text', icon: '💬' },
    { name: 'Media Dump', type: 'media', icon: '🖼️' },
    { name: 'Build Logs', type: 'log', icon: '🛠️' },
    { name: 'Code Share', type: 'code', icon: '💻' },
    { name: 'Chill Zone', type: 'fun', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
    { name: 'Channel6', type: 'bongo', icon: '🎲' },
  ]);
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);

  return (
    <div className="flex h-screen bg-black">
      <Sidebar/>
      <Channel
        channels={channels}
        setChannels={setChannels}
        activeChannelIndex={activeChannelIndex}
        setActiveChannelIndex={setActiveChannelIndex}
      />
      
      <ChatSpace channel={channels[activeChannelIndex]} />
    </div>
    
  );
}
