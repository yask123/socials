import Head from 'next/head';
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

const LogoSVG: React.FC = () => (
  <svg className="w-16 h-16 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M100 40
           C 80 20, 40 10, 20 40
           C 0 70, 20 100, 60 90
           L 100 130
           L 140 90
           C 180 100, 200 70, 180 40
           C 160 10, 120 20, 100 40
           Z" fill="none" stroke="#000000" stroke-width="2"/>
  
  <path d="M30 50 L 90 110 M40 40 L 95 100 M50 35 L 98 90
           M170 50 L 110 110 M160 40 L 105 100 M150 35 L 102 90" 
        stroke="#000000" stroke-width="1" fill="none"/>
  
  <path d="M100 40 L 100 130" stroke="#000000" stroke-width="4" fill="none"/>
  
  <path d="M95 42 Q 85 20, 80 10 M105 42 Q 115 20, 120 10" fill="none" stroke="#000000" stroke-width="1"/>
</svg>
)

const IPhoneSVG: React.FC = () => (
    <svg className="w-64 h-auto mx-auto mt-8" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="280" height="580" rx="40" stroke="black" strokeWidth="2"/>
      <rect x="20" y="20" width="260" height="560" rx="35" stroke="black" strokeWidth="1"/>
      {/* Header */}
      <text x="30" y="60" fontSize="18" fill="black" fontWeight="bold">Upcoming</text>
      {/* Content area */}
      <rect x="20" y="75" width="260" height="505" rx="20" stroke="black" strokeWidth="1" fill="none"/>
      {/* Today */}
      <g className="fade-in" opacity="0">
        <text x="40" y="110" fontSize="18" fill="black" fontWeight="bold">29th</text>
        <text x="40" y="130" fontSize="12" fill="black">MAR</text>
        <text x="100" y="120" fontSize="16" fill="black" fontWeight="bold">Today</text>
        {/* Create new activity */}
        <rect x="40" y="150" width="220" height="40" rx="10" stroke="black" strokeWidth="1" strokeDasharray="5,5" fill="none"/>
        <text x="70" y="175" fontSize="12" fill="black">Create new activity</text>
      </g>
      {/* Saturday */}
      <g className="fade-in" opacity="0" style={{animationDelay: "0.5s"}}>
        <text x="40" y="230" fontSize="18" fill="black" fontWeight="bold">30th</text>
        <text x="40" y="250" fontSize="12" fill="black">MAR</text>
        <text x="100" y="240" fontSize="16" fill="black" fontWeight="bold">Saturday</text>
        {/* Catan event */}
        <rect className="event-box" x="40" y="270" width="220" height="60" rx="10" stroke="black" strokeWidth="1" fill="none"/>
        <circle cx="70" cy="300" r="15" stroke="black" strokeWidth="1" fill="none"/>
        <text x="100" y="295" fontSize="14" fill="black" fontWeight="bold">Brunch</text>
        <text x="100" y="315" fontSize="12" fill="black">10:00 PM</text>
        <rect x="200" y="285" width="50" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
        <text x="210" y="300" fontSize="10" fill="black">David</text> 
      </g>
      {/* Sunday */}
      <g className="fade-in" opacity="0" style={{animationDelay: "1s"}}>
        <text x="40" y="370" fontSize="18" fill="black" fontWeight="bold">31st</text>
        <text x="40" y="390" fontSize="12" fill="black">MAR</text>
        <text x="100" y="380" fontSize="16" fill="black" fontWeight="bold">Sunday</text>
        {/* Dinner event */}
        <rect className="event-box" x="40" y="410" width="220" height="60" rx="10" stroke="black" strokeWidth="1" fill="none"/>
        <circle cx="70" cy="440" r="15" stroke="black" strokeWidth="1" fill="none"/>
        <text x="100" y="435" fontSize="14" fill="black" fontWeight="bold">Dinner</text>
        <text x="100" y="455" fontSize="12" fill="black">6:00 PM</text>
        {/* Attendee indicators */}
        <rect x="170" y="430" width="36" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
        <text x="176" y="444" fontSize="10" fill="black">Anna</text>
        <rect x="215" y="430" width="36" height="20" rx="10" stroke="black" strokeWidth="1" fill="none"/>
        <text x="221" y="444" fontSize="10" fill="black">Chris</text>
      </g>
      {/* Add button */}
      <g className="">
        <circle cx="250" cy="540" r="25" stroke="black" strokeWidth="2" fill="none"/>
        <text x="242" y="548" fontSize="30" fill="black">+</text>
      </g>
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
    <>
          <Head>
        <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet" />
      </Head>
    <div className="bg-yellow-200 min-h-screen font-sans flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <NavLink href="#">Socials</NavLink>
          <NavLink href="/events">Events</NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink href="#">About</NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 relative overflow-hidden">
      {/* Top Centered Title and Content */}
      <div className="max-w-3xl text-center z-10 mt-20">
        <div className="flex items-center justify-center mb-4">
          <LogoSVG  /> {/* Adjust size as needed */}
          <h1 className="text-7xl font-normal" style={{ fontFamily: "'MedievalSharp', cursive" }}>Socialify</h1>
        </div>
        <br></br>
        <p className="text-base font-light mb-6">
          Create and manage gatherings effortlessly using your phone&apos;s contacts.
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
    </>
  );
};

export default LandingPage;