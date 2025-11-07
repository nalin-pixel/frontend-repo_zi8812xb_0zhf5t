import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import SuiteSections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesGrid />
        <SuiteSections />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} MindEase — MindMirror • EmpathyBot • Bloom • Wellness Library • Analytics</p>
          <a href="#home" className="text-gray-700 hover:text-gray-900">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
