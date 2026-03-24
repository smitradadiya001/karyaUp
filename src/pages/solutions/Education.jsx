import React from "react";
import FinalCTA from "../../components/FinalCTA";

export default function Education() {
  return (
    <div className="bg-white font-sans min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="flex-1 lg:pr-5 w-full max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-5xl lg:text-[4.0rem] font-extrabold text-[#333333] leading-[1.05] mb-6 tracking-tight">
            Simplify education<br />management
          </h1>
          <p className="text-[1.35rem] text-gray-500 mb-10 max-w-xl leading-relaxed">
            Manage academic and administrative resources in one place with
            KaryaUp's time-saving work tools.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
            <button className="bg-[#2A2B2E] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:bg-black hover:scale-105 transition-all flex items-center gap-2">
              Get started <span className="text-xl">→</span>
            </button>
            <div className="text-[15px] text-[#7B68EE] font-medium leading-tight">
              Free Forever.<br />
              No credit card.
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
            <div className="flex text-[#FFD100]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-[18px] h-[18px] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>25,000+ reviews from</span>
            <div className="flex gap-1 items-center">
              {/* Fake logos styled from image */}
              <div className="w-5 h-5 bg-[#FF492C] text-white flex items-center justify-center font-bold text-[10px] rounded-sm">G2</div>
              <div className="w-5 h-5 bg-[#00B289] text-white flex items-center justify-center font-bold text-[10px] rounded-sm">C</div>
              <div className="w-5 h-5 bg-[#FF9A00] text-white flex items-center justify-center font-bold text-[10px] rounded-sm">G</div>
              <div className="w-5 h-5 bg-[#E24329] text-white flex items-center justify-center font-bold text-[10px] rounded-full">P</div>
            </div>
          </div>
        </div>

        {/* Right Column: Chat UI Mockup */}
        <div className="flex-[1.2] w-full mt-10 lg:mt-0">
          <div className="flex bg-white rounded-xl shadow-[0_20px_50px_-5px_rgba(0,0,0,0.1),_0_0_15px_1px_rgba(0,0,0,0.02)] border border-[#EDEDED] overflow-hidden text-sm h-[500px]">
            
            {/* Sidebar */}
            <div className="w-[200px] border-r border-[#EEEEEE] flex flex-col pt-5">
              <div className="flex items-center gap-2 px-5 mb-6">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 85L15 50L50 15V35L30 50L50 65V85Z" fill="#7B61FF" />
                  <path d="M50 85L85 50L50 15V35L70 50L50 65V85Z" fill="#FF007F" />
                </svg>
                <div className="font-bold text-[16px] text-[#333]">KaryaUp</div>
              </div>

              <div className="px-3 space-y-1 mb-6 text-[#797F87] font-medium text-[13px]">
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                  Home
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
                  Notifications
                </div>
                <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                  Goals
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="px-5 py-2 text-[12px] font-bold text-[#333] flex justify-between items-center group cursor-pointer">
                  Spaces
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                <div className="px-3 space-y-1 text-[#4A4E54] font-[500] text-[13px] mb-4">
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-4 h-4 grid grid-cols-2 gap-[2px]"><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /><div className="bg-gray-400 rounded-[2px]" /></div>
                    Everything
                  </div>
                  <div className="flex items-center gap-3 px-2 py-[2px] mt-2 mb-1"></div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#7B68EE] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">D</div>
                    Design 210
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#FFC700] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">M</div>
                    Marketing 102
                  </div>
                  <div className="flex items-center gap-3 px-2 py-1.5 bg-[#FFF0F6] text-[#333] rounded-lg cursor-pointer">
                    <div className="w-5 h-5 bg-[#FF80B5] text-white rounded-[4px] flex items-center justify-center text-[10px] font-bold">H</div>
                    <span className="font-bold">History 201</span>
                  </div>
                </div>

                <div className="border-t border-[#EEEEEE]">
                  <div className="px-5 py-3 text-[12px] text-[#333] flex justify-between items-center group cursor-pointer hover:bg-gray-50">
                    Dashboards
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </div>
                <div className="border-t border-[#EEEEEE]">
                  <div className="px-5 py-3 text-[12px] text-[#333] flex justify-between items-center group cursor-pointer hover:bg-gray-50">
                    Docs
                    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Top Header */}
                <div className="flex items-center px-6 py-4 border-b border-[#EEEEEE] gap-6 text-[#797F87] font-semibold text-[13px] bg-white">
                  <div className="flex items-center gap-2 text-[#333] font-bold text-[15px]">
                    <div className="w-5 h-5 bg-[#FFF0F6] text-[#FF80B5] rounded flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    HIST 201
                  </div>
                  <div className="flex items-center gap-1.5 text-[#5A6CF3] cursor-pointer">
                    <span className="text-[17px] font-normal leading-none mb-0.5">#</span> Chat
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" /></svg>
                    Board
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>
                    Box
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer ml-auto">
                    <span className="text-[16px] leading-none mb-0.5 font-normal">+</span> Add view
                  </div>
                </div>

                {/* Chat Title bar */}
                <div className="flex items-center justify-between px-6 py-5">
                  <h2 className="text-[22px] font-normal text-[#333]">Chat</h2>
                  <div className="flex items-center gap-2 text-[13px] text-gray-500 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded-md">
                    All
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="px-6 space-y-7">
                  {/* Msg 1 */}
                  <div className="flex gap-4 group">
                    <img src="https://i.pravatar.cc/100?img=9" className="w-8 h-8 rounded-full mt-1" alt="Courtney" />
                    <div>
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="font-bold text-[#333] text-[14px]">Courtney</span>
                        <span className="text-[#A6ABB2] text-[11px]">on Mar 15 2021 at 1:47 pm</span>
                      </div>
                      <div className="text-[#363A45] text-[14px] leading-relaxed">
                        <span className="text-[#5A6CF3] cursor-pointer hover:underline">@Julie</span> Hey! Just checking if you're still available to w<br />
                        project toay?
                      </div>
                    </div>
                  </div>

                  {/* Msg 2 */}
                  <div className="flex gap-4 group">
                    <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full mt-1" alt="Julie" />
                    <div>
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="font-bold text-[#333] text-[14px]">Julie</span>
                        <span className="text-[#A6ABB2] text-[11px]">on Mar 15 2021 at 1:49 pm</span>
                      </div>
                      <div className="text-[#363A45] text-[14px] leading-relaxed">
                        <span className="text-[#5A6CF3] cursor-pointer hover:underline">@Courtney</span> Yep! I will be there by 4 pm. I also asked i<br />
                        could bring her notes!
                      </div>
                    </div>
                  </div>

                  {/* Msg 3 */}
                  <div className="flex gap-4 group">
                    <img src="https://i.pravatar.cc/100?img=9" className="w-8 h-8 rounded-full mt-1" alt="Courtney" />
                    <div>
                      <div className="flex items-baseline gap-2 mb-1.5">
                        <span className="font-bold text-[#333] text-[14px]">Courtney</span>
                        <span className="text-[#A6ABB2] text-[11px]">on Mar 15 2021 at 1:47 pm</span>
                      </div>
                      <div className="text-[#363A45] text-[14px] leading-relaxed">
                        Fab! Killing it <span className="text-[#5A6CF3] cursor-pointer hover:underline">@Marci</span> 🙂
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Type Area mock */}
              <div className="px-6 pb-6 pt-4 bg-white z-10 w-full relative">
                <div className="h-12 bg-white border outline-none border-gray-200 rounded-lg w-full shadow-[0_2px_10px_rgba(0,0,0,0.03)]"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto text-center">
        <div className="mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-[#7B68EE] font-extrabold text-[12px] sm:text-[14px] tracking-[0.1em] uppercase mb-4">
            MANAGEMENT
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#333333] leading-[1.1] mb-6 tracking-tight">
            The all-in-one course <br className="hidden sm:block" /> management solution
          </h2>
          <p className="text-[1.10rem] sm:text-[1.3rem] text-gray-500 leading-relaxed max-w-4xl mx-auto px-4 mt-2">
            Replace or supplement your student information system with KaryaUp's simple yet effective work management solutions. Organize coursework, track student information, streamline admin work, and more—all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col group transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-8 w-full h-[200px] lg:h-[220px] bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&w=800&q=80" 
                alt="Forms & Surveys" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <h3 className="text-[1.4rem] lg:text-[1.60rem] font-bold text-[#333333] tracking-tight mb-3">Forms & Surveys</h3>
            <p className="text-[1.0rem] text-[#656F7D] leading-relaxed font-[400]">
              Create customizable forms for admissions requests, coursework submissions, supplies, and more. Organize forms as tasks and link them to your administrative systems to streamline your request intake process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col group transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-8 w-full h-[200px] lg:h-[220px] bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=800&q=80" 
                alt="Spreadsheets" 
                className="w-full h-full object-cover object-left-top" 
              />
            </div>
            <h3 className="text-[1.4rem] lg:text-[1.60rem] font-bold text-[#333333] tracking-tight mb-3">Spreadsheets</h3>
            <p className="text-[1.0rem] text-[#656F7D] leading-relaxed font-[400]">
              Track large datasets, from course lists to student enrollment, by creating a database directly in KaryaUp. Add Custom Fields to track details, and link tasks together to connect related work.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F9FA] rounded-[24px] p-8 flex flex-col group transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-8 w-full h-[200px] lg:h-[220px] bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=800&q=80" 
                alt="Reporting" 
                className="w-full h-full object-cover object-left-top" 
              />
            </div>
            <h3 className="text-[1.4rem] lg:text-[1.60rem] font-bold text-[#333333] tracking-tight mb-3">Reporting</h3>
            <p className="text-[1.0rem] text-[#656F7D] leading-relaxed font-[400]">
              Create high-level overviews to visualize classroom capacity, student performance, inventories, and more. Add charts, docs, and timesheets to bring related resources into one place.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}