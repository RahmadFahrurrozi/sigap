import Link from 'next/link'
import { AppHeader } from '@/components/common/app-header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome & Overview Header */}
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Internship OS
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                Phase 1 Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-heading">
              Sistem Informasi & Pengelolaan Magang (SIGAP)
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Pusat kendali aktivitas harian, logbook terintegrasi, dokumentasi kegiatan, dan pelaporan Lampiran 4.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/tasks"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-foreground text-background text-xs font-medium transition-colors hover:bg-foreground/90"
            >
              Kelola Task
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-border text-foreground text-xs font-medium transition-colors hover:bg-muted"
            >
              Lihat Kalender
            </Link>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-lg border border-border bg-card">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Task Hari Ini
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight font-heading">0</span>
              <span className="text-xs text-muted-foreground">kegiatan</span>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Status: Siap diisi di Phase 2
            </div>
          </div>

          <div className="p-5 rounded-lg border border-border bg-card">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Logbook Bulan Ini
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight font-heading">0</span>
              <span className="text-xs text-muted-foreground">entri</span>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Target Lampiran 4
            </div>
          </div>

          <div className="p-5 rounded-lg border border-border bg-card">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Sesi Pembimbingan
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight font-heading">0</span>
              <span className="text-xs text-muted-foreground">pertemuan</span>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Bimbingan Dosen
            </div>
          </div>

          <div className="p-5 rounded-lg border border-border bg-card">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Laporan Bulanan
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight font-heading">Draft</span>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Otomatis dari Logbook
            </div>
          </div>
        </section>

        {/* Foundation Status & Architecture Info */}
        <section className="p-6 rounded-lg border border-border bg-card/50 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground">
              Status Fondasi Arsitektur
            </h2>
            <span className="text-xs font-mono text-muted-foreground">
              Stack: Next.js + Supabase + TanStack
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded border border-border/60 bg-background space-y-1">
              <div className="font-semibold text-foreground">Supabase PostgreSQL & SSR</div>
              <p className="text-muted-foreground">
                Helper client, server session, dan middleware session refresher sudah terintegrasi via @supabase/ssr.
              </p>
            </div>

            <div className="p-4 rounded border border-border/60 bg-background space-y-1">
              <div className="font-semibold text-foreground">TanStack Query & Table</div>
              <p className="text-muted-foreground">
                QueryProvider aktif di Root Layout untuk caching dan background data synchronizer.
              </p>
            </div>

            <div className="p-4 rounded border border-border/60 bg-background space-y-1">
              <div className="font-semibold text-foreground">Custom Calendar Engine</div>
              <p className="text-muted-foreground">
                Penanggalan modular berbasis date-fns siap dibangun dengan tampilan clean native Tailwind.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
