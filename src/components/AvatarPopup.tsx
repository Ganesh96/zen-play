'use client';

import { motion, AnimatePresence } from 'framer-motion';

type AvatarPopupProps = {
  visible: boolean;
  lockPhrase: string;
  confirmPhrase: string;
  setLockPhrase: (v: string) => void;
  setConfirmPhrase: (v: string) => void;
  onCreate: () => void;
  onClose: () => void;
};

export default function AvatarPopup({
  visible,
  lockPhrase,
  confirmPhrase,
  setLockPhrase,
  setConfirmPhrase,
  onCreate,
  onClose,
}: AvatarPopupProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute top-28 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl w-72 shadow-lg text-sm flex flex-col gap-4"
        >
          <div>
            <label className="block mb-1">Lock Phrase</label>
            <input
              type="password"
              value={lockPhrase}
              onChange={(e) => setLockPhrase(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/30 text-white placeholder-white/50 focus:outline-none"
              placeholder="Enter a secret phrase"
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Phrase</label>
            <input
              type="password"
              value={confirmPhrase}
              onChange={(e) => setConfirmPhrase(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/30 text-white placeholder-white/50 focus:outline-none"
              placeholder="Re-enter phrase"
            />
          </div>
          <button
            disabled={!lockPhrase || lockPhrase !== confirmPhrase}
            onClick={onCreate}
            className="bg-blue-600 hover:bg-blue-500 transition rounded px-4 py-2 text-white font-medium disabled:opacity-50"
          >
            Create Avatar
          </button>
          <button
            onClick={onClose}
            className="text-xs text-right text-white/70 hover:text-white mt-2"
          >
            Cancel
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
