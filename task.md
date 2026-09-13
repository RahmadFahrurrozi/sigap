# SIGAP (Internship OS) — Task & Roadmap Checklist

Dokumen pelacak progres instalasi, konfigurasi fondasi, dan tahapan pengembangan fitur berdasarkan [PRD.md](./PRD.md).

---

## Status Terkini: Phase 1 — Foundation & Project Setup

Status: Selesai (Completed)

Catatan Desain: Tidak menggunakan icon bawaan/icon library apapun dalam UI. Seluruh navigasi, tombol, dan status disajikan dengan tipografi, layout, badge teks, dan visual hierarchy yang jelas.

---

## 1. Tech Stack Installation Checklist

Paket utama yang telah diinstall ke dalam `package.json`:

- [x] **Framework & Core:**
  - [x] `next` (v16.3.5)
  - [x] `react` & `react-dom` (v19.2.8)
  - [x] `typescript` (v5)
- [x] **Styling & UI Primitives:**
  - [x] `tailwindcss` (v4) & `@tailwindcss/postcss`
  - [x] `tw-animate-css`
  - [x] `@base-ui/react` & `shadcn`
  - [x] `class-variance-authority` (cva)
  - [x] `clsx` & `tailwind-merge`
  - [x] `sonner` (Toast notification system)
- [x] **State & Data Management:**
  - [x] `@tanstack/react-query` & `@tanstack/react-query-devtools`
  - [x] `@tanstack/react-table` & `@tanstack/react-table-devtools`
- [x] **Form & Validation:**
  - [x] `react-hook-form`
  - [x] `zod`
  - [x] `@hookform/resolvers`
- [x] **Backend, Auth & Storage:**
  - [x] `@supabase/supabase-js`
  - [x] `@supabase/ssr`
- [x] **Date Utilities & Custom Calendar Engine:**
  - [x] `date-fns` (Engine penanggalan untuk custom calendar 100% Tailwind & modular)
- [x] **DOCX Engine (Laporan Magang / Lampiran 4):**
  - [x] `docxtemplater`
  - [x] `pizzip` & `@types/pizzip`
  - [x] `file-saver` & `@types/file-saver`

---

## 2. Phase 1 Execution Checklist (Foundation Setup)

Semua langkah fondasi arsitektur telah selesai diimplementasikan dan diverifikasi via build:

### Step 1: Rapikan Utilitas `lib/utils.ts`
- [x] Menggunakan implementasi standar industri `clsx` + `twMerge` (`lib/utils.ts` & `src/lib/utils.ts`).

### Step 2: Setup Konfigurasi Lingkungan (Environment Variables)
- [x] `.env.example` sebagai referensi konfigurasi Supabase.
- [x] `.env.local` untuk development lokal.

### Step 3: Setup Helper Supabase Client & Middleware
- [x] `src/lib/supabase/client.ts` (Browser client via `createBrowserClient` dari `@supabase/ssr`).
- [x] `src/lib/supabase/server.ts` (Server client via `createServerClient` dengan cookie handling Next.js 16).
- [x] `src/lib/supabase/middleware.ts` & root `middleware.ts` (Session update & auth token protection).

### Step 4: Setup TanStack Query Provider & Root Layout
- [x] `src/lib/query/provider.tsx` (`QueryClientProvider` dengan default options optimal).
- [x] `src/app/layout.tsx` (Bungkus aplikasi dengan QueryProvider dan Toaster sonner).

### Step 5: Setup Struktur Folder Modular (Feature-Based)
- [x] Modul fitur dibuat di `src/features/`:
  - `tasks/`
  - `calendar/`
  - `logbook/`
  - `evidence/`
  - `mentoring/`
  - `monthly-reports/`
  - `docx-export/`
- [x] Komponen navigasi umum dibuat di `src/components/common/` (`app-header.tsx` berbasis teks tanpa icon).

### Step 6: TypeScript Database Types & Schema
- [x] `src/types/database.types.ts` mendefinisikan interface untuk 12 tabel Supabase sesuai Section 7 PRD.
- [x] `supabase/schema.sql` skrip DDL lengkap dengan primary keys, foreign keys, timestamps, dan RLS policies.

---

## 3. Roadmap Pengembangan Fase Selanjutnya

- [ ] **Phase 2: Task & Custom Calendar**
  - CRUD Task (Form validation Zod, status Todo/In Progress/Done, prioritas, kategori)
  - Custom Calendar View (Month view grid, date range indicator, klik tanggal tambah task)
  - List View & Filter / Search
- [ ] **Phase 3: Logbook & Evidence**
  - Logbook CRUD dengan Date Range (multi-day spanning)
  - Convert Task to Logbook (alur Task selesai jadi draft logbook)
  - Upload bukti kegiatan ke Supabase Storage & Galeri Evidence
- [ ] **Phase 4: Mentoring (Pembimbingan)**
  - Catatan bimbingan dosen & tindak lanjut (follow-up task)
- [ ] **Phase 5: Monthly Report**
  - Agregasi otomatis task & logbook bulanan
  - Form narasi kendala, capaian, dan rencana bulan depan
- [ ] **Phase 6: DOCX Generator (Lampiran 4)**
  - Integrasi docxtemplater + PizZip
  - Export Word otomatis sesuai template kampus
- [ ] **Phase 7: Final Polish**
  - Layout responsif, dark mode, error boundaries, deployment ke Vercel
