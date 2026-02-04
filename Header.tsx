
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors ${
      isActive ? 'text-white' : 'text-white/80 hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
   `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive ? 'bg-blue-700 text-white' : 'text-white/80 hover:bg-blue-700 hover:text-white'
    }`;

  const links = [
    { to: "/about", label: "The Club" },
    { to: "/tours", label: "Tours" },
    { to: "/team", label: "Team" },
    { to: "/board", label: "Board" },
    { to: "/join", label: "Join Us" },
    { to: "/", label: "Home" },
  ];

  return (
    <nav className="bg-[#007bff] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="hidden md:flex items-baseline space-x-4">
            {links.map(link => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>{link.label}</NavLink>
            ))}
          </div>

          <div className="md:hidden flex-grow">
             <NavLink to="/" className="text-white text-lg font-bold">FLYING HOPPERS</NavLink>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <NavLink key={link.to} to={link.to} className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
