// components/Tokenomics.tsx
import React from 'react';


const TokenomicCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className=" bg-brand-light border-4 border-brand-dark p-6 text-center">
     
      <h3 className="text-[clamp(1.5rem,2vw,2.5rem)] uppercase text-brand-red">{title}</h3>
      
      
      <p className="text-[clamp(0.9rem,2vw,4.5rem)] md:text-sm mt-2">{value}</p> 
    </div>
  );
};

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="bg-brand-red py-16 px-4 border-t-4 border-b-4 border-brand-dark">
            
            <div className="container mx-auto text-center">
                <h2 data-aos="fade-in"className="text-[clamp(1.0rem,4vw,7.5rem)] uppercase text-white mb-10">
                    THE PROJECT
                </h2>

                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <TokenomicCard title="Total Supply" value="1,000,000,000"/>
                    <TokenomicCard title="Network" value="Built on BNB Smart Chain." />
                    <TokenomicCard title="Symbol" value="$GWT, the golden wave begins." />
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;