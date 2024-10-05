
import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import logo from '/assets/cv.png'; 

export default function Navbar( toggleColorMode, colorMode ) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`px-4 ${colorMode === 'light' ? 'bg-gray-100' : 'bg-gray-900'} w-full`}>
            <div className="flex h-16 items-center justify-between">
                <ReachLink to='/'>
                    <img className="h-11 logo" src={logo} alt="logo" />
                </ReachLink>
                <div className="hidden md:flex items-center space-x-8">
                <ReachLink 
                        className={`px-2 py-1 rounded-md hover:bg-sky-500 ${colorMode === 'light' ? 'text-black' : 'text-white'}`} 
                        to='/'>
                        Home
                    </ReachLink>
                    <ReachLink 
                        className={`px-2 py-1 rounded-md  hover:bg-sky-500  ${colorMode === 'light' ? 'text-black' : 'text-white'}`} 
                        to='/about'>
                        About
                    </ReachLink>
                    <button onClick={toggleColorMode} className="p-2 rounded-md">
                        {colorMode === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
                <button onClick={toggleMenu} className={`md:hidden p-2 text-xl ${colorMode === 'light' ? 'text-black' : 'text-white'}`}>
                    {isOpen ? '✖️' : '☰'}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden pb-4">
                    <div className="flex flex-col space-y-4">
                    <ReachLink 
                        className={`px-2 py-1 rounded-md  hover:bg-sky-500  ${colorMode === 'light' ? 'text-black' : 'text-white'}`} 
                        to='/'>
                        Home
                    </ReachLink>
                    <ReachLink 
                        className={`px-2 py-1 rounded-md  hover:bg-sky-500  ${colorMode === 'light' ? 'text-black' : 'text-white'}`} 
                        to='/about'>
                        About
                    </ReachLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
