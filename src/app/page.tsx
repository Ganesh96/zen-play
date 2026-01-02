'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CookiePopup from '@/components/CookiePopup';
import AvatarPopup from '@/components/AvatarPopup';
import UrlBar from '@/components/UrlBar';
import { extractYouTubeId } from '@/lib/utils';

export default function HomePage() {
  const [youtubeURL, setYoutubeURL] = useState('');
  const [showCookies, setShowCookies] = useState(false);
  const [allowCookies, setAllowCookies] = useState(true);
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [lockPhrase, setLockPhrase] = useState('');
  const [confirmPhrase, setConfirmPhrase] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [showChoiceScreen, setShowChoiceScreen] = useState(false);
  const [embedView, setEmbedView] = useState(false);
  const [dummyText, setDummyText] = useState('');
  const [maskedUrl, setMaskedUrl] = useState('');


  const isSignedIn = Boolean(username);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#111111] via-[#1b1b1b] to-[#0e0e0e] text-white font-sans relative overflow-hidden">
      <Header
        username={username}
        isSignedIn={isSignedIn}
        onCookieClick={() => setShowCookies(!showCookies)}
        onAvatarClick={() => setShowAvatarPopup(true)}
      />

      <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] px-4">
        <UrlBar
          youtubeURL={youtubeURL}
          setYoutubeURL={setYoutubeURL}
          dummyText={dummyText}
          setDummyText={setDummyText}
          onPlay={() => {
            const id = extractYouTubeId(youtubeURL);
            if (id) {
              setVideoId(id);
              setShowChoiceScreen(true);
            } else {
              alert('Invalid YouTube URL');
            }
          }}
          onMask={() => {
            const id = extractYouTubeId(youtubeURL);
            if (id && dummyText.trim()) {
              const slug = `${dummyText.trim().replace(/\s+/g, '-')}-${id}`;
              const url = `${window.location.origin}/m/${slug}`;
              setMaskedUrl(url);
              navigator.clipboard.writeText(url);
              alert('Masked URL copied to clipboard:\n' + url);
            } else {
              alert('Enter valid URL and dummy text');
            }
          }}
        />

        {embedView && videoId && (
          <div className="w-full max-w-4xl mt-10 flex flex-col gap-6 items-center">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="bg-white/10 p-6 rounded-xl w-full text-white text-sm">
              <p className="text-lg font-medium mb-2">🔍 Video Summary (Placeholder)</p>
              <p className="text-white/80">Summary will appear here...</p>
            </div>
          </div>
        )}
      </div>

      {showChoiceScreen && !embedView && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="w-1/2 bg-red-600 flex items-center justify-center cursor-pointer hover:opacity-90 transition"
            onClick={() => {
              window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            }}
          >
            <span className="text-white text-xl font-semibold">Open on YouTube</span>
          </div>
          <div
            className="w-1/2 bg-blue-600 flex items-center justify-center cursor-pointer hover:opacity-90 transition"
            onClick={() => {
              setEmbedView(true);
              setShowChoiceScreen(false);
            }}
          >
            <span className="text-white text-xl font-semibold">View in My Website</span>
          </div>
        </div>
      )}

      <CookiePopup
        visible={showCookies}
        allowCookies={allowCookies}
        onToggle={() => setAllowCookies(!allowCookies)}
      />

      <AvatarPopup
        visible={showAvatarPopup}
        lockPhrase={lockPhrase}
        confirmPhrase={confirmPhrase}
        setLockPhrase={setLockPhrase}
        setConfirmPhrase={setConfirmPhrase}
        onCreate={() => {
          setUsername(lockPhrase.trim().split(' ')[0] || 'user');
          setShowAvatarPopup(false);
        }}
        onClose={() => setShowAvatarPopup(false)}
      />
    </main>
  );
}
