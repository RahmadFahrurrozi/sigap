import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/', label: 'Overview' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/logbook', label: 'Logbook' },
  { href: '/evidence', label: 'Evidence' },
  { href: '/mentoring', label: 'Mentoring' },
  { href: '/monthly-reports', label: 'Reports' },
  { href: '/settings', label: 'Settings' },
]

export function AppHeader() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold tracking-wider uppercase text-foreground">
            SIGAP [OS]
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-border text-muted-foreground uppercase tracking-wider">
            Internship BPS
          </span>
        </div>
      </div>
    </header>
  )
}
