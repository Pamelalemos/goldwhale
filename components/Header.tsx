// components/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import toast from 'react-hot-toast';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function truncateAddress(address: string) {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

const Header = () => {
  const { address, isConnected, status: accountStatus } = useAccount();
  const { connect, connectors, status: connectStatus } = useConnect();
  const { disconnect } = useDisconnect();


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);
  
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isLoading = accountStatus === 'connecting' || accountStatus === 'reconnecting';

  const handleConnectClick = () => {
    const initialConnectStatus = connectStatus;
    connect({ connector: connectors[0] });
   if (connectStatus == 'error') {
     toast.error('MetaMask não encontrada, verifique se possui a extenção instalada');
   }
  };

  const NavLinks = () => (
    <>
      <a href="#tokenomics" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>THE PROJECT</a>
    </>
  );

  return (
    <header className="w-full bg-brand-red border-b-4 border-brand-dark p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl uppercase">$Gold Whale</h1>

       
        <nav className="hidden lg:flex items-center gap-4 text-sm">
          <NavLinks />
        </nav>
      </div>

      
      <div 
        className={`
          lg:hidden fixed top-0 left-0 w-full h-full bg-brand-dark/90 backdrop-blur-sm z-40
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;