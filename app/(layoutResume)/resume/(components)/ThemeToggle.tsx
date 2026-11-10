'use client'

import { useState } from 'react'

type ResumeTheme = 'dark' | 'light'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ResumeTheme>('dark')

  function applyTheme(next: ResumeTheme) {
    setTheme(next)
    document.documentElement.classList.toggle('resume-light', next === 'light')
  }

  return (
    <div className="resume-theme-toggle" role="group" aria-label="Resume theme">
      <button
        type="button"
        className="resume-theme-toggle__option"
        aria-pressed={theme === 'dark'}
        onClick={() => applyTheme('dark')}
      >
        Dark
      </button>
      <button
        type="button"
        className="resume-theme-toggle__option"
        aria-pressed={theme === 'light'}
        onClick={() => applyTheme('light')}
      >
        Light
      </button>
    </div>
  )
}
