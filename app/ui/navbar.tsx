"use client"

import React, { useState } from 'react';

interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (option: string) => void;
  }

const Dropdown: React.FC<DropdownProps> =  ({ isOpen, onClose, onSelect }) => {
    const handleSelect = (option:string) => {
      onSelect(option);
      onClose();
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'block' : 'hidden '} bg-gunMetal border border-indianRed absolute mt-2 p-2 right-12`}>
        <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Home</div>
        <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Dashboard</div>
        <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">Sign In</div>
      </div>
    );
  };

export default function Navbar(){
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


    const navIconClasses = `icon nav-icon-1 ${isNavIconActive ? 'open' : ''}`;
    
    return(
        <div className="flex w-full justify-between items-center bg-gunMetal text-navbar font-light text-indianRed h-[54px] px-16">
        <span>First-Folio.io</span>
        <div className="nav-container">
          <div className={`icon nav-icon-1 ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
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
          <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown} onSelect={setSelectedOption} />
        </div>
      </div>
    )
}
