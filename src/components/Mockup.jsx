import { useState } from "react";

const CHANNELS = [
  { key: "doubts", label: "Doubts" },
  { key: "chat", label: "Chat" },
  { key: "team", label: "Team" },
  { key: "polls", label: "Polls" },
  { key: "share", label: "Share" },
  { key: "legacy", label: "Legacy" },
  { key: "emails", label: "Emails" },    
  { key: "updates", label: "Updates" },
  { key: "settings", label: "Settings" },
  { key: "connections", label: "Connections" },
  { key: "developer", label: "Developer" }
];

const SUB_GROUPS = [
  "Web Dev Circle",
  "AI Researchers",
  "IITM Robotics",
  "Open Source Club",
  "Product Design",
  "Green Campus",
  "Music Society",
  "Coding Ninjas",
  "Mathletes"
];

export default function Mockup() {
  const [active, setActive] = useState("share");
  const [sortType, setSortType] = useState("Notes");

  function renderContent() {
    switch (active) {
      case "doubts":
        return (
          <section className="space-y-10 ">
            <div>
              <div className="font-mont-bold text-2xl text-white mb-1">Doubts</div>
              <div className="text-zinc-400 font-mont-regular mb-5">
                Post academic questions and share solutions collaboratively.
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 mb-4">
                <div className="font-mont-medium text-white text-lg mb-2">
                  If a matrix has more columns than rows, does that always mean the null space is non-trivial?
                </div>
                <div className="text-zinc-400 text-sm mb-3">
                  <span>by Priya · Just now</span>
                </div>
                <button className="bg-zinc-800 px-4 py-1.5 rounded-md text-white font-mont-semibold text-sm hover:bg-zinc-700 transition">
                  Answer
                </button>
              </div>
              <div className="bg-zinc-900 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 font-mont-bold text-white flex items-center justify-center">A</div>
                  <div>
                    <div className="text-white font-mont-medium">Arjun</div>
                    <div className="text-zinc-400 font-mont-regular text-xs mt-0.5">Replying to Priya</div>
                  </div>
                </div>
                <div className="ml-12 font-mont-regular text-zinc-300 text-sm mt-2">
                  Yes, always.
                  By the Rank-Nullity Theorem:

                  Rank + Nullity = no. of Columns
                  If columns {'>'} rows, rank is limited, so nullity {'>'} 0.
                  So, null space has non-trivial solutions ✅


                </div>
              </div>
              <div className="flex gap-2 mt-7">
                <input
                  type="text"
                  placeholder="Ask a follow-up..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 font-mont-regular text-white placeholder:text-zinc-500"
                />
                <button className="font-mont-semibold px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition">
                  Post
                </button>
              </div>
            </div>
          </section>
        );
      case "chat":
        return (
          <section className="space-y-10">
            <div className="font-mont-bold text-2xl text-white mb-1">Chat</div>
            <div className="text-zinc-400 font-mont-regular mb-6">
              Group chat for quick discussions and announcements.
            </div>
            <div className="space-y-4 max-w-lg">
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-700 font-mont-bold text-white flex items-center justify-center">M</div>
                <div>
                  <div className="bg-zinc-900 rounded-lg px-4 py-2 text-white font-mont-regular">
                   I still don’t get op-amps. This is actually painful.




                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-mont-regular">Manit · 2m ago</div>
                </div>
              </div>
              <div className="flex items-end gap-2 justify-end">
                <div>
                  <div className="bg-zinc-800 rounded-lg px-4 py-2 text-white font-mont-regular">
                    Same here. I did MOSFETs last week but I forgot everything overnight. I don’t know how I’m going to write this paper.
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 text-right font-mont-regular">You · 1m ago</div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-900 font-mont-bold text-white flex items-center justify-center">M</div>
                <div>
                  <div className="bg-zinc-900 rounded-lg px-4 py-2 text-white font-mont-regular">
                   Can we call later? I’m drowning in diff amps.
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-mont-regular">Mridul · now</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-5">
              <input
                type="text"
                placeholder="Type a message…"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mont-regular placeholder:text-zinc-500"
              />
              <button className="bg-zinc-800 px-5 py-2 rounded-lg text-white font-mont-semibold hover:bg-zinc-700 transition">
                Send
              </button>
            </div>
          </section>
        );
      case "team":
        return (
          <section className="space-y-8">
            <div className="font-mont-bold text-2xl text-white mb-2">Team</div>
            <div className="text-zinc-400 font-mont-regular mb-4">
              Connect, join, or form new teams for events & hackathons.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-zinc-900 rounded-lg p-5">
                <div className="font-mont-semibold text-white">ML Project Hackers</div>
                <div className="text-zinc-400 text-sm mb-1">Looking for: Frontend, Backend</div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">Remote</span>
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">4 Members</span>
                </div>
                <button className="bg-zinc-800 px-4 py-1.5 rounded-md text-white font-mont-semibold text-sm hover:bg-zinc-700 transition">
                  Request to Join
                </button>
              </div>
              <div className="bg-zinc-900 rounded-lg p-5">
                <div className="font-mont-semibold text-white">IoT Enthusiasts</div>
                <div className="text-zinc-400 text-sm mb-1">Building a smart greenhouse</div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">On-Campus</span>
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">3 Members</span>
                </div>
                <button className="bg-zinc-800 px-4 py-1.5 rounded-md text-white font-mont-semibold text-sm hover:bg-zinc-700 transition">
                  Message Leader
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-mont-semibold text-zinc-300 mb-1">Or Start a New Team</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Team name…"
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mont-regular placeholder:text-zinc-500"
                />
                <button className="bg-zinc-800 px-5 py-2 rounded-lg text-white font-mont-semibold hover:bg-zinc-700 transition">
                  Create Team
                </button>
              </div>
            </div>
          </section>
        );
      case "polls":
        return (
          <section className="space-y-10">
            <div className="font-mont-bold text-2xl text-white mb-1">Polls</div>
            <div className="text-zinc-400 font-mont-regular mb-5">
              Vote on important topics and see instant results.
            </div>
            <div className="bg-zinc-900 rounded-xl p-5">
              <div className="font-mont-semibold text-white mb-2"> Should we request syllabus reduction for midsem?</div>
              <div className="flex gap-3 mb-3">
                <button className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg font-mont-medium hover:bg-zinc-700 transition">
                  Yes (161)
                </button>
                <button className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg font-mont-medium hover:bg-zinc-700 transition">
                  No (0)
                </button>
                <button className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg font-mont-medium hover:bg-zinc-700 transition">
                  No preference (5)
                </button>
              </div>
              <div className="mt-3 text-xs text-zinc-400 font-mont-regular">Poll closes in 2h 30m</div>
            </div>
            <div>
              <div className="font-mont-medium text-zinc-400 mb-2">Past Polls</div>
              <div className="space-y-2">
                <div className="bg-zinc-900 rounded-lg px-4 py-2 text-zinc-200 font-mont-regular flex justify-between">
                  Should we email the prof to extend the deadline?
                  <span className="text-zinc-500 font-mont-medium">Yes: 324, No: 51</span>
                </div>
                <div className="bg-zinc-900 rounded-lg px-4 py-2 text-zinc-200 font-mont-regular flex justify-between">
                   Should we host a film screening this weekend?
                  <span className="text-zinc-500 font-mont-medium">Yes: 89, No: 7</span>
                </div>
              </div>
            </div>
          </section>
        );
      case "share":
        return (
          <section className="space-y-8 relative">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-mont-bold text-2xl text-white">Share</div>
                <button
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-2 rounded-lg font-mont-medium hover:bg-zinc-800 transition focus:outline-none"
                >
                  <span className="text-2xl leading-none">+</span>
                  <span className="font-mont-semibold text-base">Auto sort</span>
                </button>
              </div>
              <div className="mt-4">
                <div className="font-mont-semibold text-zinc-400 text-sm mb-2">Sort as</div>
                <div className="flex gap-3 flex-wrap">
                  {["Notes", "Document", "Announcement", "Info"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSortType(type)}
                      className={`
                        px-4 py-1.5 rounded-lg text-sm transition
                        ${
                          sortType === type
                            ? "bg-zinc-800 text-white font-mont-semibold"
                            : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white font-mont-regular"
                        }
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="font-mont-regular text-zinc-400 mb-4 mt-6">
                Share documents, notes, and info. Organize instantly.
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                <div className="font-mont-medium text-white mb-1">
                  All-in-one platform for class notes & tests
                </div>
                <div className="text-zinc-500 text-xs font-mont-semibold mb-2">by Ayush · 3d ago</div>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-0.5 rounded-full text-xs bg-zinc-800 text-white font-mont-regular">PDF</span>
                  <span className="px-3 py-0.5 rounded-full text-xs bg-zinc-800 text-white font-mont-regular">
                    Sorted as <span className="font-mont-semibold">{sortType}</span>
                  </span>
                </div>
                <button className="px-5 py-1.5 bg-zinc-800 text-sm rounded-lg text-white font-mont-semibold hover:bg-zinc-700 transition">View PDF</button>
              </div>
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mont-regular outline-none placeholder:text-zinc-500"
                  placeholder="Share a new idea, note, or doc…"
                />
                <button className="font-mont-semibold px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition">
                  Post
                </button>
              </div>
            </div>
            <div>
              <div className="font-mont-semibold text-zinc-300 mb-1">Recent</div>
              <div className="space-y-2">
                <div className="bg-zinc-900 rounded-lg p-4 text-white font-mont-regular flex justify-between items-center">
                  <div>
                    Assignment 2 Solutions
                    <span className="ml-3 text-xs font-mont-medium text-zinc-400">Notes</span>
                  </div>
                  <button className="px-4 py-1.5 text-xs rounded-full bg-zinc-800 text-white font-mont-medium">Download</button>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 text-white font-mont-regular flex justify-between items-center">
                  <div>
                    Final Exam Schedule
                    <span className="ml-3 text-xs font-mont-medium text-zinc-400">Info</span>
                  </div>
                  <button className="px-4 py-1.5 text-xs rounded-full bg-zinc-800 text-white font-mont-medium">Add to Calendar</button>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 text-white font-mont-regular flex justify-between items-center">
                  <div>
                    Reference Book.pdf
                    <span className="ml-3 text-xs font-mont-medium text-zinc-400">Document</span>
                  </div>
                  <button className="px-4 py-1.5 text-xs rounded-full bg-zinc-800 text-white font-mont-medium">Open</button>
                </div>
              </div>
            </div>
          </section>
        );
      case "ideas":
        return (
          <section className="space-y-10">
            <div>
              <h2 className="font-mont-bold text-2xl text-white mb-1">Ideas</h2>
              <p className="text-sm text-zinc-400 font-mont-regular">
                Explore innovations shared by learners. React, comment, or connect.
              </p>
            </div>
            {/* Idea Card 1 */}
            <div className="bg-zinc-900 rounded-xl p-5">
              <img
                src="https://via.placeholder.com/600x240/1a1a1a/ffffff?text=Smart+Desk+Scheduler"
                alt="Smart Desk"
                className="rounded-lg mb-4"
              />
              <h3 className="text-white font-mont-semibold text-lg">Smart Desk Scheduler</h3>
              <p className="text-zinc-400 text-sm font-mont-regular mt-1">
                AI-powered personal workspace manager that plans your breaks based on focus data.
              </p>
              <div className="flex gap-4 mt-4 text-zinc-300 text-sm">
                <span className="cursor-pointer hover:text-white">👍 42</span>
                <span className="cursor-pointer hover:text-white">❤️ 17</span>
                <span className="cursor-pointer hover:text-white">🔁 9</span>
              </div>
              <div className="mt-5 border-t border-zinc-700 pt-4 space-y-3">
                <div className="text-sm font-mont-medium text-zinc-400">Comments</div>
                <div className="text-sm text-zinc-200 font-mont-regular">
                   <b className="text-white font-mont-medium">Manit:</b> This is brilliant! I’d love to collab on backend.
                </div>
                <div className="text-sm text-zinc-200 font-mont-regular">
                   <b className="text-white font-mont-medium">Mridul:</b> Love the UX parallels with Notion, neat!
                </div>
              </div>
            </div>
            {/* Idea Card 2 */}
            <div className="bg-zinc-900 rounded-xl p-5">
              <img
                src="https://via.placeholder.com/600x240/1a1a1a/ffffff?text=GreenCampus+App"
                alt="Green Campus"
                className="rounded-lg mb-4"
              />
              <h3 className="text-white font-mont-semibold text-lg">GreenCampus App</h3>
              <p className="text-zinc-400 text-sm font-mont-regular mt-1">
                A unified app that tracks your hostel’s energy and water usage, shared campus-wide.
              </p>
              <div className="flex gap-4 mt-4 text-zinc-300 text-sm">
                <span className="cursor-pointer hover:text-white">👍 61</span>
                <span className="cursor-pointer hover:text-white">❤️ 34</span>
                <span className="cursor-pointer hover:text-white">🔁 22</span>
              </div>
              <div className="mt-5 border-t border-zinc-700 pt-4 space-y-3">
                <div className="text-sm font-mont-medium text-zinc-400">Comments</div>
                <div className="text-sm text-zinc-200 font-mont-regular">
                   <b className="text-white font-mont-medium">Baivab:</b> We could easily submit this to Greentech!
                </div>
                <div className="text-sm text-zinc-200 font-mont-regular">
                   <b className="text-white font-mont-medium">Aryan:</b> I’d love to collab on the sensors API.
                </div>
              </div>
            </div>
          </section>
        );
      case "legacy":
        return (
          <section className="space-y-10">
            <div className="font-mont-bold text-2xl text-white mb-1">Legacy</div>
            <div className="text-zinc-400 font-mont-regular mb-3">
              Old notes, past year PDFs, YouTube links and reference docs from previous batches for juniors and freshers.
            </div>
            <div className="space-y-5">
              <div className="bg-zinc-900 p-5 rounded-xl">
                <div className="font-mont-medium text-white text-lg mb-1">[PDF] CS201 Final Exam Solutions (2022)</div>
                <div className="text-xs text-zinc-400 mb-2">Uploaded by Manu · 2 years ago</div>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-mont-semibold text-sm rounded px-4 py-1.5">
                  Download PDF
                </button>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl">
                <div className="font-mont-medium text-white text-lg mb-1">[Video] Linear Algebra Crash Course</div>
                <div className="text-xs text-zinc-400 mb-2">by IITM Math Club · 2021</div>
                <a
                  href="https://www.youtube.com/watch?v=example"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl">
                <div className="font-mont-medium text-white text-lg mb-1">Digital Systems Notes (Batch 2020)</div>
                <div className="text-xs text-zinc-400 mb-2">Contributed by Alumni</div>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-mont-semibold text-sm rounded px-4 py-1.5">
                  View Notes
                </button>
              </div>
            </div>
          </section>
        );
      case "emails":
        return (
          <section className="space-y-6">
            <div className="font-mont-bold text-2xl text-white mb-1">Emails</div>
            <div className="text-zinc-400 font-mont-regular mb-6">
              View and reply to university messages and notifications.
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mont-semibold text-white">Prof A</div>
                    <div className="text-sm text-zinc-400 font-mont-regular">Don't forget tomorrow's quiz deadline by 11:59PM.</div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mont-regular">1h ago</span>
                </div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mont-semibold text-white">Hostel Affairs Sec</div>
                    <div className="text-sm text-zinc-400 font-mont-regular">Please submit the mess prefernce form for the next semester.</div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mont-regular">6h ago</span>
                </div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mont-semibold text-white">IT Services</div>
                    <div className="text-sm text-zinc-400 font-mont-regular">Server downtime Sunday 2–4 AM.</div>
                  </div>
                  <span className="text-xs text-zinc-500 font-mont-regular">1d ago</span>
                </div>
              </div>
            </div>
          </section>
        );
      case "updates":
        return (
          <section className="space-y-8">
            <div className="font-mont-bold text-2xl text-white mb-2">Updates</div>
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="font-mont-semibold text-white mb-2">v1.4 Now Live!</div>
              <ul className="text-zinc-300 text-sm font-mont-regular list-disc ml-6 space-y-1">
                <li>Improved idea reactions and detailed profiles</li>
                <li>Auto-save chat drafts</li>
                <li>Backend upgraded to Node 20</li>
              </ul>
              <div className="mt-4 text-zinc-500 text-xs font-mont-medium">
                <span className="text-white">Tip:</span> Try the new "ideas" feed for innovation!
              </div>
              
              
            </div>
            <div className="font-mont-regular text-zinc-400">
              See full changelog on GitHub or subscribe to #announcements for instant push updates.
            </div>

            <div className="mt-3 bg-zinc-900 rounded-xl text-white p-6">

              Our app is now live on the Play Store!
              You can finally download and start using it on your Android device.
            </div>
              
            
          </section>
        );
      case "settings":
        return (
          <section className="space-y-8">
            <div className="font-mont-bold text-2xl text-white mb-2">Settings</div>
            <div className="bg-zinc-900 rounded-xl p-6 flex flex-col gap-5 max-w-lg">
              <div className="flex justify-between items-center">
                <span className="font-mont-medium text-white">Theme</span>
                <span className="px-4 py-1 rounded-full bg-zinc-800 text-white font-mont-regular text-sm">Dark</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mont-medium text-white">Notifications</span>
                <button className="px-4 py-1 rounded-full border bg-zinc-800 border-zinc-700 text-white font-mont-semibold text-sm hover:bg-zinc-700">Enabled</button>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mont-medium text-white">Beta features</span>
                <button className="px-4 py-1 rounded-full bg-zinc-800 text-white font-mont-semibold text-sm hover:bg-zinc-700">Join beta</button>
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-mont-regular">
              Privacy, integrations, and notification settings are managed here.
            </div>
          </section>
        );
      case "connections":
        return (
          <section className="space-y-8">
            <div className="font-mont-bold text-2xl text-white mb-2">Connections</div>
            <div className="text-zinc-400 font-mont-regular mb-5">
              Your active network for collaboration and messaging.
            </div>
            <div className="space-y-3">
              {[["Ayushi", "Web Dev"], ["Manit", "IoT Specialist"], ["Mridul", "ML Enthusiast"]].map(
                ([name, desc]) => (
                  <div key={name} className="bg-zinc-900 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <div className="font-mont-semibold text-white">{name}</div>
                      <div className="text-xs text-zinc-400 font-mont-regular">{desc}</div>
                    </div>
                    <button className="px-3 py-1 font-mont-medium bg-zinc-800 text-white rounded-full text-sm hover:bg-zinc-700">
                      Chat
                    </button>
                  </div>
                )
              )}
            </div>
            <div className="pt-2">
              <button className="font-mont-medium text-xs text-zinc-400 hover:text-white underline underline-offset-2">
                Find more connections
              </button>
            </div>
          </section>
        );
      case "developer":
        return (
          <section className="space-y-8">
            <div className="font-mont-bold text-2xl text-white mb-2">Developer</div>
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="font-mont-semibold text-white mb-2">Get Involved</div>
              <div className="mb-2 font-mont-regular text-zinc-200 text-sm">Contribute on GitHub:</div>
              <code className="px-2 py-1 font-mono rounded bg-zinc-800/80 text-sm text-zinc-200 mb-4 block">git clone https://github.com/p4p/community-os</code>
              <ul className="font-mont-regular text-zinc-300 text-sm list-disc ml-6 space-y-1">
                <li>Chat filters</li>
                <li>Poll dashboard</li>
                <li>Admin tools</li>
              </ul>
              <div className="pt-4">
                <button className="px-7 py-2 font-mont-semibold bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition">
                  Join dev channel
                </button>
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-mont-regular">
              Open source community, MIT license.
            </div>
          </section>
        );
      default:
        return null;
    }
  }

  // ---- Main Render ----
 return (
  <div className="mt-20 flex flex-col gap-5 md:h-[1000px] px-2 sm:px-6 py-6 sm:py-10 items-center justify-center">
    {/* Main Section Heading */}
    <div className="relative flex flex-col items-center justify-center mb-5 gap-4">
  {/* Fixed typewriter block */}
   <p className="relative font-jb-regular text-xs text-white/40 tracking-widest uppercase">{'• '}A student-first community platform </p>
  <div className="relative h-[60px] w-[300px] md:w-[400px] flex items-center justify-center">
   
    <h1 className="typewriter py-1 absolute left-0 right-0 mx-auto text-4xl md:text-5xl font-satoshi-bold tracking-wide text-white whitespace-nowrap overflow-hidden">
      <span className="text-violet-400">ping</span>ForPeer
    </h1>
  </div>

  {/* Paragraph stays stable below */}
  <p className="text-white/50 max-w-2xl text-md font-satoshi-medium leading-relaxed text-center md:text-xl">
    Built for communities that do more. pingForPeer streamlines how you connect, share, and collaborate—so everything has its place and purpose.


  </p>
</div>


    {/* Vision Tag */}
    <div className="w-full flex justify-center mb-10">
      <div className="px-4 py-1 border-[3px] border-white/20 bg-white/5 text-violet-300 text-xs sm:text-sm tracking-widest uppercase font-satoshi-medium rounded-full w-fit">
        VISION
      </div>
    </div>

    {/* Main Container Box */}
    <div
      className="w-full max-w-7xl h-[90vh] sm:h-[90vh] max-h-[100vh] overflow-hidden rounded-[2.5rem] bg-black border border-zinc-800 flex flex-col"
      style={{
        boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.9)",
      }}
    >
      {/* Top bar */}
      <div className="h-8 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-4 sm:px-8">
        <span className="text-white/60 font-mont-medium text-sm select-none">iit_mandi</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden flex-col sm:flex-row">
        {/* Sidebar */}
        <nav className="hidden sm:flex w-64 bg-zinc-950 border-r border-zinc-900 px-6 py-6 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
          <div className="flex items-center mb-4">
            <div className="font-mont-semibold text-xs text-zinc-500 uppercase tracking-widest flex-1">Channels</div>
            <button className="ml-2 bg-zinc-900 border border-zinc-700 rounded px-3 py-1 text-xs text-white font-mont-medium hover:bg-zinc-800 transition">
              Email
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {CHANNELS.map((ch) => (
              <button
                key={ch.key}
                onClick={() => setActive(ch.key)}
                className={`w-full text-left px-4 py-2 mb-1 rounded-lg font-mont-medium text-sm transition ${
                  active === ch.key
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>

          {/* Sub-Groups */}
          <div className="mt-8">
            <div className="font-mont-semibold text-xs uppercase text-zinc-500 tracking-wider mb-2">Sub-Groups</div>
            <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-700">
              {SUB_GROUPS.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-mont-regular px-3 py-2 rounded-md"
                >
                  {group}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-10 py-6 sm:py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-black">
          {renderContent()}
        </main>
      </div>

      {/* Bottom Navigation Bar (mobile) */}
      <div className="sm:hidden bg-zinc-950 border-t border-zinc-800 px-2 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="flex gap-2 min-w-full">
          {CHANNELS.map((ch) => (
            <button
              key={ch.key}
              onClick={() => setActive(ch.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-mont-medium transition ${
                active === ch.key
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rounded bottom bar */}
      <div className="h-6 bg-zinc-900 rounded-b-[2.5rem]" />
    </div>
  </div>
);

}
