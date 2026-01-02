type HeaderProps = {
  username: string;
  isSignedIn: boolean;
  onCookieClick: () => void;
  onAvatarClick: () => void;
};

export default function Header({
  username,
  isSignedIn,
  onCookieClick,
  onAvatarClick,
}: HeaderProps) {
  return (
    <header className="w-full px-6 py-4 bg-white/5 backdrop-blur-md rounded-b-2xl shadow-md flex items-center justify-between z-10">
      <div className="text-xl font-semibold tracking-tight">Zen-Play</div>
      <div className="flex gap-4 items-center">
        <button
          onClick={onCookieClick}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
        >
          Cookies
        </button>
        <button
          onClick={onAvatarClick}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
        >
          {isSignedIn ? `@${username}` : 'Create Avatar'}
        </button>
      </div>
    </header>
  );
}
