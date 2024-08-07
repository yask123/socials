import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-black hover:underline">
    {children}
  </a>
);

const IPhoneSVG: React.FC = () => (
    <svg className="w-64 h-auto mx-auto mt-8" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="580" rx="40" stroke="black" strokeWidth="2"/>
  <rect x="20" y="20" width="260" height="560" rx="35" stroke="black" strokeWidth="1"/>
  {/* Header */}
  <text x="30" y="60" fontSize="18" fill="black" fontWeight="bold">Upcoming</text>
  {/* Content area */}
  <rect x="20" y="75" width="260" height="505" rx="20" stroke="black" strokeWidth="1" fill="none"/>
  {/* Today */}
  <text x="40" y="110" fontSize="18" fill="black" fontWeight="bold">29th</text>
  <text x="40" y="130" fontSize="12" fill="black">MAR</text>
  <text x="100" y="120" fontSize="16" fill="black" fontWeight="bold">Today</text>
  {/* Create new activity */}
  <rect x="40" y="150" width="220" height="40" rx="10" stroke="black" strokeWidth="1" strokeDasharray="5,5" fill="none"/>
  <text x="70" y="175" fontSize="12" fill="black">Create new activity</text>
  {/* Saturday */}
  <text x="40" y="230" fontSize="18" fill="black" fontWeight="bold">30th</text>
  <text x="40" y="250" fontSize="12" fill="black">MAR</text>
  <text x="100" y="240" fontSize="16" fill="black" fontWeight="bold">Saturday</text>
  {/* Catan event */}
  <rect x="40" y="270" width="220" height="60" rx="10" stroke="black" strokeWidth="1" fill="none"/>
  <circle cx="70" cy="300" r="15" stroke="black" strokeWidth="1" fill="none"/>
  <text x="100" y="295" fontSize="14" fill="black" fontWeight="bold">Brunch</text>
  <text x="100" y="315" fontSize="12" fill="black">10:00 PM</text>
  <rect x="200" y="285" width="50" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
  <text x="210" y="300" fontSize="10" fill="black">Noam</text>
  {/* Sunday */}
  <text x="40" y="370" fontSize="18" fill="black" fontWeight="bold">31st</text>
  <text x="40" y="390" fontSize="12" fill="black">MAR</text>
  <text x="100" y="380" fontSize="16" fill="black" fontWeight="bold">Sunday</text>
  {/* Dinner event */}
  <rect x="40" y="410" width="220" height="60" rx="10" stroke="black" strokeWidth="1" fill="none"/>
  <circle cx="70" cy="440" r="15" stroke="black" strokeWidth="1" fill="none"/>
  <text x="100" y="435" fontSize="14" fill="black" fontWeight="bold">Dinner</text>
  <text x="100" y="455" fontSize="12" fill="black">6:00 PM</text>
  {/* Attendee indicators */}
  <rect x="170" y="430" width="40" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
  <text x="176" y="444" fontSize="10" fill="black">Anna</text>
  <rect x="215" y="430" width="40" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
  <text x="221" y="444" fontSize="10" fill="black">Chris</text>
  {/* Add button */}
  <circle cx="250" cy="540" r="25" stroke="black" strokeWidth="2" fill="none"/>
  <text x="242" y="548" fontSize="30" fill="black">+</text>
    </svg>
  );
 
  const DownloadButton: React.FC = () => (
    <button className="mt-8 px-6 py-3 border border-black rounded-xl bg-transparent text-black text-base font-light hover:bg-black hover:text-yellow-200 transition-all duration-300 hover:border-transparent">
      Download Now
    </button>
  );
  
  

interface LandingPageProps {
  // You can add props here if needed in the future
}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="bg-yellow-200 min-h-screen font-sans flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <NavLink href="#">Socials</NavLink>
          <NavLink href="#">Events</NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink href="#">About</NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 relative overflow-hidden">
        {/* Top Centered Title and Content */}
        <div className="max-w-3xl text-center z-10 mt-20">
          <h1 className="text-6xl font-bold mb-4">Socials</h1>
          <p className="text-lg font-light mb-2">
      Where Friendships and Plans Align.
    </p>
    <p className="text-base font-light mb-6">
      Create and manage gatherings effortlessly using your phone's contacts.
    </p>
        </div>

        {/* iPhone SVG below the text */}
        <IPhoneSVG />

        <DownloadButton />

        {/* Statue Image */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <div className="w-full h-full bg-[url('/api/placeholder/400/600')] bg-no-repeat bg-right-top bg-contain"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;