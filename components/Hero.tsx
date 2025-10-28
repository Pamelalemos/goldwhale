// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import BuyBox from './BuyBox';

const Hero = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">

        
        <div className="text-center md:text-left">
          
          
          <h2 className="text-[clamp(1.5rem,4vw,5.5rem)] font-bold uppercase drop-shadow-lg text-brand-white text-shadow-pixel-lg">
            Old rules, new game.
          </h2>
          <p className="mt-4 text-xl text-brand-white text-shadow-pixel">
            Greed, glory, and digital gold. This is Golden Whale.
          </p>

        
  
          <div className="mt-8 relative w-full" style={{ paddingTop: '100%' }}> 
            <Image
              src="/wallstreethabano.png"
              alt="Wall Street Habano"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

        </div>
        
        <div>
          <BuyBox />
        </div>

      </div>
    </section>
  );
};

export default Hero;