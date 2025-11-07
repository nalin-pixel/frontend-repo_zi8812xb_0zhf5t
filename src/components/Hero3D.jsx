import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative w-full bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:pt-12 sm:pb-24 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-purple-600" />
            <span>MindEase Suite</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            MindEase — Simple, Human, Powerful
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A single space for gentle self-care: track your mood (MindMirror), chat with an empathic AI (EmpathyBot), grow daily (Bloom), and understand your journey with clear insights.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#features" className="rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:bg-black transition">
              Explore Features
            </a>
            <a href="#mood" className="rounded-lg bg-gray-100 px-5 py-3 text-gray-900 shadow hover:bg-gray-200 transition">
              Try the Demo
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-[50vh] sm:h-[60vh] lg:h-[65vh] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
          <Spline
            scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
