// app/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [youtubeURL, setYoutubeURL] = useState('');

    return (
      <>
      <Header />
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-semibold mb-10 tracking-tight">
        Zen Play
      </h1>

      <input
        type="text"
        placeholder="Paste YouTube link..."
        value={youtubeURL}
        onChange={(e) => setYoutubeURL(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-full bg-white text-black placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-6 flex gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white flex items-center justify-center font-semibold shadow-xl"
        >
          ▶
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full bg-gray-800 hover:bg-gray-700 transition text-white flex items-center justify-center font-semibold shadow-xl"
        >
          🔗
        </motion.button>
      </div>
    </main>
    </>
  );
}
