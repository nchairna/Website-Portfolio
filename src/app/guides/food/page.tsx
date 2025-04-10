'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const FoodGuide = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <button 
        onClick={() => router.back()} 
        className="mb-6 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
      >
        ← Back
      </button>
      
      <h1 className="text-4xl font-bold mb-6">Food Guide</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Favorite Recipes</h2>
          <p className="text-neutral-300">
            Share your favorite recipes and cooking tips...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Essential Kitchen Tools</h2>
          <ul className="list-disc list-inside text-neutral-300">
            <li>Chef's Knife: [Your recommendation]</li>
            <li>Cookware: [Your recommendation]</li>
            <li>Kitchen Gadgets: [Your recommendation]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cooking Tips</h2>
          <div className="text-neutral-300">
            <p>Share your cooking techniques and tips here...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodGuide;
