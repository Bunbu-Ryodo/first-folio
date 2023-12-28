"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Logout from '@/app/ui/logout';
import StuffLink from '@/app/ui/my-stuff'

interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (option: string) => void;
    session: boolean;
  }

const Dropdown: React.FC<DropdownProps> =  ({ isOpen, onClose, onSelect, session }) => {
    const handleSelect = (option:string) => {
      onSelect(option);
      onClose();
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'block' : 'hidden '} bg-gunMetal border-2 border-indianRed absolute mt-2 p-2 right-12  md:hidden`}>
        <Link href="/"><div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Home</div></Link>
        {!!session ? <Link href="/mystuff"><div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">My Stuff</div></Link> : <></>}
        {!!session ? <Logout></Logout> : <Link href="/login"><div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Sign In</div></Link> }
      </div>
    );
  };

export default function Navbar({session}: { session: boolean}){
    const [isNavIconActive, setNavIconActive] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleNavIconClick = () => {
        setNavIconActive(!isNavIconActive);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    
    const closeDropdown = () => {
        setDropdownOpen(false);
    };


    // const navIconClasses = `icon nav-icon-1 ${isNavIconActive ? 'open' : ''}`;
    
    return(
        <div className="flex flex-row w-full justify-between items-center bg-gunMetal text-navbar font-light text-indianRed h-[54px] px-16">
        <Link href="/">First-Folio.io</Link>
        <div className="nav-container">
          <div className={`inline-block icon nav-icon-1 ${isDropdownOpen ? 'open' : ''} md:hidden`} onClick={toggleDropdown}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
          </div>

          {!!session ? <div className="hidden md:flex">
            <StuffLink></StuffLink>
            <Logout></Logout>
          </div>
          : <div className="hidden md:flex">
            <Link href="/login"><div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Login</div></Link>
            </div>
          }
          
          <Dropdown session={session} isOpen={isDropdownOpen} onClose={closeDropdown} onSelect={setSelectedOption} />
        </div>
      </div>
    )
}
