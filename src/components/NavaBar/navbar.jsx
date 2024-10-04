
import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import logo from '/assets/cv.png'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [colorMode, setColorMode] = useState('light');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleColorMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
    };

    return (
        <>
        
            <nav className={`${colorMode === 'light' ? 'bg-gray-100' : 'bg-gray-900'} px-4`}>
                <div className="flex h-16 items-center justify-between">
               
                    <ReachLink to='/'>
                        <img className="h-2 logo" src={logo} alt="logo" />
                    </ReachLink>

                    <div className='bg-black w-14 h-32'>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <ReachLink className="px-2 py-1 rounded-md hover:bg-gray-200" to='/'>Home</ReachLink>
                        <ReachLink className="px-2 py-1 rounded-md hover:bg-gray-200" to='/about'>About</ReachLink>
                        <button onClick={toggleColorMode} className="p-2 rounded-md">
                            {colorMode === 'light' ? '🌙' : '☀️'}
                        </button>
                    </div>

                    
                    <button onClick={toggleMenu} className="md:hidden p-2 text-xl">
                        {isOpen ? '✖️' : '☰'}
                    </button>
                </div>

  
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-4">
                            <ReachLink className="px-2 py-1 rounded-md hover:bg-gray-200" to='/'>Home</ReachLink>
                            <ReachLink className="px-2 py-1 rounded-md hover:bg-gray-200" to='/about'>About</ReachLink>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
