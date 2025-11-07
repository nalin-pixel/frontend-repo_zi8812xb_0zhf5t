import React from 'react';
import { Heart, LineChart, Library, MessageCircle, Smile, Target } from 'lucide-react';

const features = [
  {
    id: 'mood',
    title: 'MindMirror — Mood Tracker',
    desc: 'Log emotions in seconds with color-coded tags, notes, and triggers.',
    icon: Smile,
  },
  {
    id: 'companion',
    title: 'EmpathyBot — AI Companion',
    desc: 'A gentle, mood-aware chat that listens first and suggests next steps.',
    icon: MessageCircle,
  },
  {
    id: 'growth',
    title: 'Bloom — Daily Challenges',
    desc: 'Tiny evidence-based practices that build habits of care and resilience.',
    icon: Target,
  },
  {
    id: 'library',
    title: 'Wellness Library',
    desc: 'Bite-sized guides on sleep, stress, mindfulness, and more.',
    icon: Library,
  },
  {
    id: 'analytics',
    title: 'Progress Analytics',
    desc: 'See patterns, correlations, and gentle trends across time.',
    icon: LineChart,
  },
  {
    id: 'care',
    title: 'Designed with Care',
    desc: 'Private by default, no judgments, only kindness and clarity.',
    icon: Heart,
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need for gentle growth</h2>
          <p className="mt-3 text-gray-600">Homepage • Mood Tracker • AI Companion • Growth Challenges • Wellness Library • Progress Analytics</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, title, desc, icon: Icon }) => (
            <a key={id} href={`#${id}`} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gray-100 p-3 text-gray-900">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
