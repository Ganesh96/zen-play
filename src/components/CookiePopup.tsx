'use client';

import { motion, AnimatePresence } from 'framer-motion';

type CookiePopupProps = {
  visible: boolean;
  allowCookies: boolean;
  onToggle: () => void;
};

export default function CookiePopup({
  visible,
  allowCookies,
  onToggle,
}: CookiePopupProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl w-60 shadow-lg text-sm"
        >
          <div className="flex justify-between items-center">
            <span>Allow Cookies</span>
            <button
              onClick={onToggle}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-all ${
                allowCookies ? 'bg-green-500' : 'bg-gray-500'
              }`}
            >
              <div
                className={`h-3 w-3 bg-white rounded-full transition ${
                  allowCookies ? 'translate-x-5' : ''
                }`}
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
