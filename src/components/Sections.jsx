import React from 'react';
import { CalendarCheck, MessageCircleHeart, Target, BookOpen, BarChart3 } from 'lucide-react';

export const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export const MoodTracker = () => (
  <Section id="mood" title="MindMirror — Mood Tracker" subtitle="Capture how you feel in a few taps and discover patterns over time.">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {['Joyful', 'Calm', 'Stressed', 'Anxious', 'Grateful', 'Tired'].map((mood) => (
        <button key={mood} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
          <span className="font-medium">{mood}</span>
          <CalendarCheck className="h-5 w-5 text-gray-500" />
        </button>
      ))}
    </div>
  </Section>
);

export const Companion = () => (
  <Section id="companion" title="EmpathyBot — AI Companion" subtitle="A supportive chat that reflects your mood and offers gentle prompts.">
    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-gray-900 p-2 text-white"><MessageCircleHeart className="h-5 w-5" /></div>
        <div className="flex-1">
          <p className="text-sm text-gray-700">"I'm here for you. What feels heavy or light today?"</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {['Share a win', 'Name a worry', 'Reframe a thought', 'Plan a tiny step'].map((p) => (
              <button key={p} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm hover:bg-gray-100 text-gray-800 text-left">{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export const Challenges = () => (
  <Section id="growth" title="Bloom — Daily Self-Growth Challenges" subtitle="Small, backed-by-science challenges that compound into big change.">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { t: '2-minute breath', i: Target },
        { t: 'Gratitude note', i: Target },
        { t: 'Micro-walk', i: Target },
        { t: 'Kindness text', i: Target },
        { t: 'Screen-free pause', i: Target },
        { t: 'Journal 3 lines', i: Target },
      ].map(({ t, i: Icon }) => (
        <div key={t} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2"><Icon className="h-5 w-5 text-gray-900" /></div>
            <p className="font-medium">{t}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export const Library = () => (
  <Section id="library" title="Wellness Library" subtitle="Short reads you can finish in a minute — sleep, stress, focus, boundaries.">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {['Breathing Basics', 'Sleep Hygiene', 'Thought Defusion', 'Self-Compassion', 'Focus Rituals', 'Setting Boundaries'].map((t) => (
        <article key={t} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <BookOpen className="h-5 w-5 text-gray-500" />
          <h4 className="mt-2 font-semibold">{t}</h4>
          <p className="mt-1 text-sm text-gray-600">One-minute guide with simple steps you can try today.</p>
        </article>
      ))}
    </div>
  </Section>
);

export const Analytics = () => (
  <Section id="analytics" title="Progress Analytics" subtitle="Notice correlations between sleep, habits, and mood — no judgment, just clarity.">
    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 p-4">
          <BarChart3 className="h-5 w-5 text-purple-600" />
          <p className="mt-2 text-sm text-gray-700">Weekly mood trend holding steady with a gentle upward slope.</p>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
          <BarChart3 className="h-5 w-5 text-emerald-600" />
          <p className="mt-2 text-sm text-gray-700">Evening walks correlate with improved sleep and calmer mornings.</p>
        </div>
      </div>
    </div>
  </Section>
);

// Default export that bundles the suite sections so App only imports 1 component for the body
const SuiteSections = () => (
  <>
    <MoodTracker />
    <Companion />
    <Challenges />
    <Library />
    <Analytics />
  </>
);

export default SuiteSections;
