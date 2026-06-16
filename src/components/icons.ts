// Inline SVG strings (stroke uses currentColor) for feature cards.
// 24x24 viewBox, 1.6 stroke. Keep lightweight — no icon dependency.

export const icons = {
  sparkles: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M18 14l.9 2.3 2.3.9-2.3.9L18 20.4l-.9-2.3-2.3-.9 2.3-.9L18 14z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,

  donut: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 3a9 9 0 018.5 6.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,

  lock: `<svg viewBox="0 0 24 24" fill="none"><rect x="4.5" y="10.5" width="15" height="9.5" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5V8a4 4 0 018 0v2.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="15" r="1.4" fill="currentColor"/></svg>`,

  doc: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h8l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v4h4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 12.5h7M8.5 16h7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  cloud: `<svg viewBox="0 0 24 24" fill="none"><path d="M7.5 18a4.5 4.5 0 01-.4-9 6 6 0 0111.5 1.6A3.7 3.7 0 0117.5 18h-10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,

  tag: `<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 11.3V5a1.5 1.5 0 011.5-1.5h6.3a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8l-5.6 5.6a2 2 0 01-2.8 0L4.1 12.7a2 2 0 01-.6-1.4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.4" fill="currentColor"/></svg>`,

  upload: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 15V4m0 0L8 8m4-4l4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 15v3a1 1 0 001 1h12a1 1 0 001-1v-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  piggy: `<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 12.5a6.5 5.5 0 016.5-5.5h3a6.5 5.5 0 016.2 4.5l1.3.6v3l-1.6.3a6.6 6.6 0 01-2.4 2.4V21h-3v-1.5h-3V21h-3v-2.2A6.5 5.5 0 013.5 13z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 7c0-1.7 1.6-3 3.5-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7.5" cy="12.5" r="1" fill="currentColor"/><path d="M2.6 12.3c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  target: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5.5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 9.5h16M8 3.5v4M16 3.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M9 14l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  trending: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 16l5-5 4 4 8-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
