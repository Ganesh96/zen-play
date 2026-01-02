type UrlBarProps = {
  youtubeURL: string;
  setYoutubeURL: (v: string) => void;
  dummyText: string;
  setDummyText: (v: string) => void;
  onPlay: () => void;
  onMask: () => void;
};

export default function UrlBar({
  youtubeURL,
  setYoutubeURL,
  dummyText,
  setDummyText,
  onPlay,
  onMask,
}: UrlBarProps) {
  return (
    <div className="w-full max-w-3xl flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={youtubeURL}
          onChange={(e) => setYoutubeURL(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />
        <button
          onClick={onPlay}
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium shadow"
        >
          ▶ Play
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Enter dummy text for masking"
          value={dummyText}
          onChange={(e) => setDummyText(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />
        <button
          onClick={onMask}
          className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-sm font-medium shadow"
        >
          🔗 Mask
        </button>
      </div>
    </div>
  );
}
