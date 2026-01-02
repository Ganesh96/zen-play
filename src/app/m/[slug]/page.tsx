'use client';

import { useEffect, useState } from 'react';

export default function MaskedVideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [viewEmbed, setViewEmbed] = useState(false);

  useEffect(() => {
    const parts = params.slug.split('-');
    const lastPart = parts[parts.length - 1];
    if (lastPart && lastPart.length === 11) {
      setVideoId(lastPart);
    }
  }, [params.slug]);

  if (!videoId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Invalid or missing video ID.
      </div>
    );
  }

  if (!viewEmbed) {
    return (
      <div className="min-h-screen flex">
        <div
          className="w-1/2 bg-red-600 flex items-center justify-center cursor-pointer"
          onClick={() =>
            window.open(
              `https://www.youtube.com/watch?v=${videoId}`,
              '_blank'
            )
          }
        >
          <span className="text-white text-xl font-semibold">
            Open on YouTube
          </span>
        </div>

        <div
          className="w-1/2 bg-blue-600 flex items-center justify-center cursor-pointer"
          onClick={() => setViewEmbed(true)}
        >
          <span className="text-white text-xl font-semibold">
            View in My Website
          </span>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <div className="bg-white/10 p-6 rounded-xl w-full max-w-4xl text-sm">
        <p className="text-lg font-medium mb-2">Summary</p>
        <p className="text-white/80">
          Automatic summary will be added later.
        </p>
      </div>
    </main>
  );
}
