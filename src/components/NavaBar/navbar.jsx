import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import logo from '/assets/cv.png';
// If you use react-icons, install with: npm i react-icons
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar({ toggleColorMode, colorMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Home", to: "/" },
    
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-4xl
      flex justify-center items-center rounded-full bg-gradient-to-r from-white/60 to-transparent
      backdrop-blur-md shadow-md p-2">
      <div className="flex flex-row w-full items-center justify-between px-4">
     
        <ReachLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow" />
          <span className="font-bold text-xl text-slate-700 dark:text-white">ResumeBuilder</span>
        </ReachLink>

        <ul className="hidden md:flex flex-row space-x-6 text-lg font-semibold ml-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <ReachLink
                to={link.to}
                className="transition-all duration-300 hover:rounded-full hover:border border-blue-400 px-3 py-2"
              >
                {link.name}
              </ReachLink>
            </li>
          ))}
          <li>
            <button
              onClick={toggleColorMode}
              className="ml-2 p-2 rounded-full bg-sky-200/30 dark:bg-sky-800/30 hover:bg-sky-400/50 transition-colors text-xl"
              title="Toggle color mode"
            >
              {colorMode === 'light' ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden ml-auto text-2xl p-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 transition"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl py-6 px-8 animate-fade-in z-50">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            {navLinks.map(link => (
              <li key={link.name}>
                <ReachLink
                  to={link.to}
                  className="block px-4 py-2 rounded-full hover:bg-sky-400/70 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </ReachLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleColorMode();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 justify-center px-4 py-2 rounded-full bg-sky-200/30 dark:bg-sky-800/30 hover:bg-sky-400/50 transition-colors text-xl font-semibold w-full"
                title="Toggle color mode"
              >
                {colorMode === 'light' ? <><FiMoon /> <span>Dark Mode</span></> : <><FiSun /> <span>Light Mode</span></>}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
