import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">MindEase</a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#mood" className="hover:text-gray-900">Mood Tracker</a>
          <a href="#companion" className="hover:text-gray-900">AI Companion</a>
          <a href="#growth" className="hover:text-gray-900">Challenges</a>
          <a href="#library" className="hover:text-gray-900">Library</a>
          <a href="#analytics" className="hover:text-gray-900">Analytics</a>
        </div>
        <a href="#mood" className="rounded-md bg-gray-900 px-3 py-1.5 text-white text-sm shadow hover:bg-black">Get Started</a>
      </nav>
    </header>
  );
};

export default Navbar;
