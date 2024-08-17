import React from 'react';
import Head from 'next/head';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="text-black hover:underline">
    {children}
  </a>
);

const EventsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events - Socials</title>
        <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-yellow-200 min-h-screen font-sans flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <NavLink href="#">Artists</NavLink>
            <NavLink href="#">Graffiti Workshop</NavLink>
          </div>
          <div className="text-black">The Line * Gallery</div>
          <div className="flex space-x-4">
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
            <NavLink href="#">Magazine</NavLink>
          </div>
        </nav>

        <main className="flex-grow flex flex-col items-center px-4 relative overflow-hidden">
          {/* Top Centered Title and Content */}
          <div className="max-w-3xl text-center z-10 mt-16">
            <h1 className="text-7xl mb-4 font-normal" style={{ fontFamily: "'MedievalSharp', cursive" }}>Events</h1>
            <p className="text-xl mb-8">
              Explore and manage your upcoming events
            </p>
          </div>
          
          {/* Placeholder for events content */}
          <div className="text-2xl">
            Events content will go here
          </div>
        </main>
      </div>
    </>
  );
};

export default EventsPage;