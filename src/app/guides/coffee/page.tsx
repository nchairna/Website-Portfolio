'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CoffeeGuide = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <button 
        onClick={() => router.back()} 
        className="mb-6 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
      >
        ← Back
      </button>
      
      <h1 className="text-4xl font-bold mb-6">Coffee Guide</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">My Coffee Journey</h2>
          <p className="text-neutral-300">
            Share your coffee expertise and experiences here...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended Equipment</h2>
          <ul className="list-disc list-inside text-neutral-300">
            <li>Coffee Grinder: [Your recommendation]</li>
            <li>Coffee Maker: [Your recommendation]</li>
            <li>Scale: [Your recommendation]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Brewing Tips</h2>
          <div className="text-neutral-300">
            <p>Share your brewing methods and tips here...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoffeeGuide;
