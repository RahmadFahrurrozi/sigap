# Product Requirements Document (PRD)

## Internship OS — Personal Internship Management & Reporting System

**Document version:** 1.0

**Status:** Draft for development

**Product owner:** Rahmad Fahrurrozi

**Target platform:** Web application

**Primary user:** Mahasiswa magang

**Initial scope:** Personal use selama magang di BPS Kabupaten Banyuwangi

---

# 1. Product Overview

## 1.1 Background

Mahasiswa magang perlu mengelola berbagai aktivitas selama pelaksanaan magang, mulai dari daily task, pekerjaan berdasarkan divisi, dokumentasi kegiatan, hingga pembimbingan dengan dosen pembimbing. Selain itu, mahasiswa juga diwajibkan menyusun logbook dan laporan magang dengan format tertentu dari kampus.

Proses pencatatan yang dilakukan secara manual melalui Microsoft Word, spreadsheet, atau catatan terpisah dapat menyebabkan duplikasi pekerjaan, kesulitan mencari dokumentasi, serta memerlukan waktu tambahan ketika menyusun laporan.

Internship OS dirancang sebagai aplikasi untuk mengelola seluruh aktivitas magang dalam satu sistem. Aplikasi ini menghubungkan task management, calendar, logbook, dokumentasi, pembimbingan, dan monthly report.

## 1.2 Product vision

Membangun personal internship management system yang membantu mahasiswa mengelola pekerjaan harian, menyimpan bukti kegiatan, memantau progres magang, dan menghasilkan laporan sesuai kebutuhan akademik secara lebih cepat, terstruktur, dan fleksibel.

## 1.3 Product goals

1. Memudahkan pencatatan daily task selama magang.
2. Menghubungkan task yang telah selesai dengan logbook tanpa menulis ulang seluruh data.
3. Mengelola kegiatan yang berlangsung selama beberapa hari atau minggu menggunakan date range.
4. Menyimpan dokumentasi kegiatan secara terorganisir.
5. Mencatat riwayat pembimbingan dengan dosen.
6. Menghasilkan monthly report dari data kegiatan yang sudah tersimpan.
7. Menghasilkan dokumen Lampiran 4 dalam format Word sesuai template kampus.
8. Menyediakan fondasi teknis untuk pengembangan multi-user dan subscription di masa depan.

## 1.4 Non-goals

Fitur berikut tidak termasuk dalam MVP:

- Multi-user dan organisasi magang.
- Pembayaran subscription.
- Integrasi Google Calendar.
- AI wajib untuk generate laporan.
- Laporan akhir magang lengkap.
- Sistem penilaian dosen atau absensi resmi.
- Integrasi langsung dengan sistem internal BPS.

---

# 2. Target User & User Stories

## 2.1 Primary user

Mahasiswa magang yang ingin mengelola aktivitas pekerjaan, dokumentasi, pembimbingan, dan laporan akademik secara mandiri.

## 2.2 User stories

### Task management

- Sebagai mahasiswa magang, saya ingin mencatat task harian agar pekerjaan saya tidak terlupakan.
- Sebagai mahasiswa magang, saya ingin melihat task dalam calendar dan list view agar dapat merencanakan aktivitas.
- Sebagai mahasiswa magang, saya ingin mengelompokkan task berdasarkan divisi atau kategori.
- Sebagai mahasiswa magang, saya ingin mengubah task yang sudah selesai menjadi draft logbook.

### Logbook

- Sebagai mahasiswa magang, saya ingin membuat logbook dengan rentang tanggal agar kegiatan yang berlangsung beberapa hari dapat dicatat dalam satu record.
- Sebagai mahasiswa magang, saya ingin mengedit deskripsi dan luaran kegiatan sebelum laporan dibuat.
- Sebagai mahasiswa magang, saya ingin mencari dan memfilter logbook berdasarkan tanggal atau kategori.
- Sebagai mahasiswa magang, saya ingin mengunduh Lampiran 4 dalam format Word sesuai template kampus.

### Dokumentasi

- Sebagai mahasiswa magang, saya ingin menyimpan foto dan bukti kegiatan di satu gallery.
- Sebagai mahasiswa magang, saya ingin menghubungkan bukti kegiatan dengan task dan logbook.
- Sebagai mahasiswa magang, saya ingin memilih bukti tertentu untuk dimasukkan ke laporan.

### Pembimbingan

- Sebagai mahasiswa magang, saya ingin mencatat bimbingan dengan dosen pembimbing.
- Sebagai mahasiswa magang, saya ingin menyimpan hasil diskusi dan tindak lanjut bimbingan.
- Sebagai mahasiswa magang, saya ingin menghubungkan hasil bimbingan dengan task yang harus dikerjakan.

### Monthly report

- Sebagai mahasiswa magang, saya ingin melihat ringkasan kegiatan pada akhir bulan.
- Sebagai mahasiswa magang, saya ingin menambahkan kendala dan rencana kerja bulan berikutnya.
- Sebagai mahasiswa magang, saya ingin mereview laporan bulanan sebelum export.

---

# 3. Product Scope & Feature Roadmap

## 3.1 MVP — Must Have

| Priority | Feature | Description |
| --- | --- | --- |
| P0 | Task management | CRUD task, status, prioritas, kategori, date range |
| P0 | Calendar view | Melihat task dan logbook berdasarkan tanggal |
| P0 | Logbook management | CRUD logbook, periode kegiatan, deskripsi, luaran |
| P0 | Category management | Membuat dan mengelola divisi atau kategori kegiatan |
| P0 | Task to Logbook | Membuat draft logbook dari task yang selesai |
| P0 | Evidence upload | Upload dan simpan bukti kegiatan |
| P0 | Search & filter | Pencarian task dan logbook |
| P0 | DOCX export | Generate Lampiran 4 dari template kampus |

## 3.2 V1 — Important

| Priority | Feature | Description |
| --- | --- | --- |
| P1 | Mentoring | Pencatatan pembimbingan dengan dosen |
| P1 | Monthly report | Ringkasan kegiatan bulanan dan export laporan |
| P1 | Evidence gallery | Gallery dokumentasi dengan caption dan filter |
| P1 | Weekly review | Ringkasan aktivitas dan capaian mingguan |
| P1 | Workstream | Pengelompokan pekerjaan berdasarkan project |
| P1 | Report validation | Pengecekan data sebelum export |

## 3.3 V2 — Future

| Priority | Feature | Description |
| --- | --- | --- |
| P2 | AI assistant | Draft deskripsi, ringkasan, dan narasi laporan |
| P2 | Recurring task | Task berulang untuk rutinitas magang |
| P2 | Advanced analytics | Statistik produktivitas dan waktu kerja |
| P2 | Multi-user | Dukungan teman-teman magang |
| P2 | Subscription | Paket berbayar untuk pengguna lain |
| P2 | Custom templates | Template laporan untuk berbagai kampus |

---

# 4. Functional Requirements

## 4.1 Task Management

### Description

Task management merupakan fitur utama untuk mencatat dan mengelola pekerjaan harian mahasiswa selama magang.

### Required fields

| Field | Type | Required |
| --- | --- | --- |
| Title | String | Yes |
| Description | Text | No |
| Start date | Date | Yes |
| Due date | Date | No |
| Status | Enum | Yes |
| Priority | Enum | Yes |
| Category | Foreign key | Yes |
| Workstream | Foreign key | No |
| Estimated duration | Integer | No |
| Actual duration | Integer | No |
| Created at | Timestamp | Yes |

### Status

- Todo
- In Progress
- Done
- Cancelled

### Priority

- Low
- Medium
- High

### Acceptance criteria

- User dapat membuat task baru.
- User dapat mengedit task.
- User dapat menghapus task.
- User dapat mengubah status task.
- User dapat menentukan tanggal mulai dan deadline.
- User dapat melihat task pada calendar dan list view.
- User dapat memfilter task berdasarkan status, kategori, dan tanggal.

---

## 4.2 Calendar View

### Description

Calendar view digunakan sebagai tampilan utama untuk melihat aktivitas magang berdasarkan tanggal.

### Requirements

- Menampilkan task dan logbook pada calendar.
- Mendukung month, week, dan day view.
- Mendukung date range untuk task dan logbook.
- Klik tanggal dapat membuka form tambah task.
- Klik event dapat membuka detail task atau logbook.
- Calendar menampilkan warna berdasarkan kategori.
- Calendar mendukung navigasi periode sebelumnya dan berikutnya.

### Acceptance criteria

- Task dengan periode 3–6 Februari tampil pada rentang tanggal tersebut.
- User dapat membedakan task dan logbook.
- User dapat membuka detail record dari calendar.

---

## 4.3 Logbook Management

### Description

Logbook management digunakan untuk mencatat kegiatan yang akan digunakan dalam Lampiran 4 laporan kampus.

### Required fields

| Field | Type | Required |
| --- | --- | --- |
| Activity title | String | Yes |
| Start date | Date | Yes |
| End date | Date | Yes |
| Description | Rich text / Text | Yes |
| Output | Rich text / Text | Yes |
| Category | Foreign key | Yes |
| Evidence | Relation | No |
| Source tasks | Relation | No |
| Created at | Timestamp | Yes |

### Business rules

1. End date tidak boleh lebih awal dari start date.
2. Satu kegiatan dapat berlangsung selama beberapa hari atau minggu.
3. Satu logbook dapat memiliki beberapa task sumber.
4. User dapat membuat logbook secara manual atau melalui task.
5. Data logbook dapat diedit sebelum laporan di-generate.
6. Setiap logbook dapat memiliki beberapa bukti kegiatan.
7. Kategori logbook dapat dipilih dari kategori yang tersedia.

### Acceptance criteria

- User dapat membuat logbook untuk tanggal 3–6 Februari.
- User dapat membuat logbook untuk periode lebih dari satu minggu.
- User dapat melihat daftar logbook dalam list view.
- User dapat membuka detail logbook dan melihat task sumber serta bukti.
- User dapat mengedit seluruh field sebelum export.

---

## 4.4 Convert Task to Logbook

### Description

Fitur ini memungkinkan user membuat draft logbook dari task yang telah selesai.

### Flow

1. User membuka task dengan status Done.
2. User memilih aksi "Convert to Logbook".
3. Sistem mengambil judul, deskripsi, periode, kategori, dan bukti task.
4. Sistem membuat draft logbook.
5. User mengedit deskripsi dan luaran.
6. User menyimpan logbook.

### Business rules

- Hanya task dengan status Done yang dapat dikonversi.
- Task yang sudah memiliki logbook dapat ditampilkan sebagai sudah terhubung.
- Satu logbook dapat memiliki banyak task sumber.
- Konversi tidak menghapus task asli.
- User tetap dapat membuat logbook manual.

---

## 4.5 Category / Department Management

### Description

Kategori digunakan untuk mengelompokkan aktivitas berdasarkan divisi, jenis pekerjaan, atau area kegiatan.

### Example categories

- Pengolahan Data
- Statistik
- Produksi Konten
- Dokumentasi
- Pembimbingan
- Lainnya

### Requirements

- User dapat membuat kategori.
- User dapat mengedit kategori.
- User dapat mengarsipkan kategori.
- User dapat memilih warna kategori.
- Kategori dapat digunakan pada task, logbook, dan workstream.
- Kategori yang sudah digunakan tidak boleh dihapus secara destruktif.

### Business rules

Kategori dibuat fleksibel agar dapat menyesuaikan divisi BPS atau kebutuhan pekerjaan lain di masa depan.

---

## 4.6 Evidence Gallery

### Description

Evidence Gallery merupakan tempat penyimpanan seluruh dokumentasi aktivitas magang, seperti foto kegiatan, screenshot aplikasi, dan dokumen pendukung. 

Jadi user tidak perlu upload gambar dua kali. Di detail logbook, user menambahkan dokumentasi. Gallery otomatis mengambil semua attachment gambar dari logbook.

Fitur gallery yang bermanfaat:

- Filter bulan, kategori, dan logbook.
- Klik gambar untuk preview besar.
- Tampilkan caption dan tanggal kegiatan.
- Klik gambar untuk membuka detail logbook.
- Pilih gambar tertentu saat generate laporan.
- Tampilkan album berdasarkan bulan.

### Required fields

| Field | Type |
| --- | --- |
| File | Image / Document |
| Caption | String |
| Date taken | Date |
| Category | Foreign key |
| Task | Foreign key |
| Logbook | Foreign key |
| Storage path | String |
| Created at | Timestamp |

### Requirements

- Upload satu atau beberapa file.
- Preview gambar.
- Tambahkan caption.
- Hubungkan file dengan task atau logbook.
- Filter berdasarkan tanggal dan kategori.
- Search berdasarkan caption.
- Pilih bukti tertentu untuk export laporan.
- Hapus file dengan konfirmasi.

### Business rules

- File disimpan di Supabase Storage.
- Database hanya menyimpan metadata dan path file.
- File yang dihapus harus dihapus dari Storage.
- File yang sudah digunakan dalam laporan tetap dapat dilacak melalui relasinya.

---

## 4.7 Mentoring / Pembimbingan

### Description

Mentoring digunakan untuk mencatat kegiatan bimbingan dengan dosen pembimbing atau pembimbing lapangan.

### Required fields

| Field | Type | Required |
| --- | --- | --- |
| Title | String | Yes |
| Date | Date | Yes |
| Description | Text | Yes |
| Output | Text | Yes |
| Mentor name | String | Yes |
| Meeting type | Enum | Yes |
| Status | Enum | Yes |
| Next action | Text | No |
| Attachment | Relation | No |

### Meeting type

- Online
- Offline
- Chat
- Other

### Status

- Planned
- Completed
- Cancelled

### Requirements

- User dapat menambahkan catatan pembimbingan.
- User dapat mengedit dan menghapus catatan.
- User dapat menyimpan hasil diskusi.
- User dapat mencatat tindak lanjut.
- User dapat menghubungkan pembimbingan dengan task.
- User dapat melihat daftar pembimbingan berdasarkan periode.

### Acceptance criteria

- User dapat mencatat pembimbingan pada tanggal tertentu.
- User dapat mengisi judul, deskripsi, dan output.
- User dapat membuat task tindak lanjut dari hasil bimbingan.
- Data pembimbingan dapat digunakan dalam monthly report.

---

## 4.8 Monthly Report

### Description

Monthly Report digunakan untuk menyusun ringkasan kegiatan magang setiap akhir bulan untuk dosen pembimbing.

### Required fields

| Field | Type | Required |
| --- | --- | --- |
| Title | String | Yes |
| Period start | Date | Yes |
| Period end | Date | Yes |
| Summary | Rich text | Yes |
| Achievements | Rich text | No |
| Challenges | Rich text | No |
| Next plan | Rich text | No |
| Status | Enum | Yes |
| Created at | Timestamp | Yes |

### Status

- Draft
- In Review
- Finalized
- Exported

### Automatic summary

Sistem mengambil data:

- Total task dalam periode.
- Total task selesai.
- Total logbook.
- Total pembimbingan.
- Total dokumentasi.
- Aktivitas berdasarkan kategori.
- Capaian pekerjaan dari output logbook.
- Rencana tindak lanjut dari catatan pembimbingan.

### Requirements

- User dapat memilih bulan atau custom date range.
- Sistem mengambil data aktivitas dalam periode tersebut.
- Sistem menghitung statistik.
- Sistem membuat draft ringkasan.
- User dapat mengedit ringkasan.
- User dapat menambahkan kendala.
- User dapat menambahkan rencana bulan berikutnya.
- User dapat mereview sebelum export.
- User dapat mengunduh laporan bulanan.

### Business rules

- Laporan bulanan dapat dibuat lebih dari satu kali, tetapi hanya satu laporan final untuk satu periode.
- Data laporan harus memiliki periode start dan end.
- User dapat mengedit draft sebelum finalisasi.
- Setelah finalized, data dapat dikunci atau dibuat versi baru jika perlu revisi.
- Aktivitas lintas bulan harus ditampilkan berdasarkan tanggal yang beririsan dengan periode laporan.

---

## 4.9 DOCX Generator — Lampiran 4

### Description

DOCX Generator digunakan untuk mengisi template Word kampus berdasarkan data logbook.

### Template target

Lampiran 4. Logbook Kegiatan Harian Magang.

### Kolom tabel

1. No.
2. Tanggal
3. Deskripsi Kegiatan
4. Luaran Kegiatan
5. Bukti Kegiatan

### Requirements

- User dapat mengunggah template `.docx`.
- User dapat memilih periode logbook.
- Sistem mengambil data logbook berdasarkan periode.
- Sistem mengurutkan kegiatan berdasarkan tanggal.
- Sistem mengisi identitas mahasiswa.
- Sistem mengisi tabel logbook.
- Sistem memasukkan bukti kegiatan sesuai konfigurasi template.
- Sistem menghasilkan file `.docx`.
- User dapat mengunduh file hasil generate.
- User dapat menyimpan template dan versinya.

### Business rules

- Template asli digunakan sebagai sumber format dokumen.
- Format tabel, margin, font, dan ukuran gambar harus dipertahankan sejauh kemampuan library.
- Nomor urut dibuat otomatis.
- Logbook yang tidak memiliki data wajib dapat ditandai sebagai warning.
- User dapat memilih apakah bukti kegiatan dimasukkan sebagai gambar atau referensi/link.
- Export tidak boleh mengubah data logbook asli.

### Acceptance criteria

- Sistem dapat menghasilkan dokumen Word dari template kampus.
- Setiap logbook yang dipilih menghasilkan satu baris tabel.
- Tanggal dapat berupa rentang beberapa hari.
- Nama mahasiswa dan NIM terisi otomatis.
- User dapat membuka file hasil export di Microsoft Word.
- User dapat mengedit file hasil export secara manual.

---

# 5. UX & UI Requirements

## 5.1 Design direction

Aplikasi menggunakan desain minimalis, modern, dan profesional yang terinspirasi dari Vercel, shadcn/ui, dan Google Calendar.

### Design principles

- Clean and minimal.
- Responsive.
- Fokus pada keterbacaan.
- Tidak terlalu banyak dekorasi.
- Konsisten dengan shadcn/ui.
- Navigasi sederhana.
- Dark mode dan light mode.
- Komponen reusable.
- Keyboard-friendly untuk form dan list.

## 5.2 Main navigation

- Dashboard
- Tasks
- Calendar
- Logbook
- Evidence
- Mentoring
- Monthly Reports
- Settings

## 5.3 Dashboard

Dashboard menampilkan:

- Jumlah task hari ini.
- Task yang sedang berjalan.
- Task yang terlambat.
- Jumlah logbook bulan ini.
- Jumlah pembimbingan bulan ini.
- Progress pekerjaan berdasarkan kategori.
- Quick action tambah task.
- Quick action tambah logbook.
- Quick action tambah pembimbingan.
- Shortcut generate monthly report.

## 5.4 Task views

- List view.
- Calendar view.
- Kanban view sebagai fitur tambahan.
- Detail task.
- Create / edit task dialog.

## 5.5 Logbook views

- List view.
- Calendar view.
- Detail logbook.
- Form logbook.
- Convert task to logbook.
- Preview export.

## 5.6 Evidence views

- Gallery grid.
- List view.
- Filter dan search.
- Detail evidence.
- Bulk upload.

## 5.7 Mentoring views

- List pembimbingan.
- Calendar pembimbingan.
- Detail pembimbingan.
- Form tambah bimbingan.
- Follow-up task.

## 5.8 Monthly Report views

- List laporan bulanan.
- Detail laporan.
- Summary statistik.
- Preview ringkasan.
- Edit narasi.
- Export Word.

---

# 6. Technical Requirements

## 6.1 Recommended technology stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack Query |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| File storage | Supabase Storage |
| Calendar | FullCalendar React |
| Tables | TanStack Table |
| DOCX | docxtemplater + PizZip |
| Date utilities | date-fns |
| Icons | hugeicons |
| Deployment | Vercel |

## 6.2 Architecture

### Frontend

Next.js App Router menggunakan feature-based folder structure.

### Backend

Supabase digunakan untuk database, authentication, dan file storage. Next.js Route Handlers atau Server Actions digunakan untuk proses server-side seperti generate DOCX.

### Data flow

1. User membuka aplikasi.
2. User membuat task.
3. Task tersimpan di Supabase.
4. Task ditampilkan di calendar dan list.
5. User menyelesaikan task.
6. User mengonversi task menjadi draft logbook.
7. User melengkapi deskripsi dan luaran.
8. User memilih periode laporan.
9. Sistem mengambil data logbook.
10. Sistem mengisi template DOCX.
11. User mengunduh file hasil export.

---

# 7. Database Schema

## 7.1 profiles

- id
- name
- nim
- university
- major
- institution
- supervisor_name
- created_at
- updated_at

## 7.2 categories

- id
- name
- description
- color
- is_archived
- created_at
- updated_at

## 7.3 workstreams

- id
- name
- description
- category_id
- status
- created_at
- updated_at

## 7.4 tasks

- id
- title
- description
- start_date
- due_date
- status
- priority
- category_id
- workstream_id
- estimated_duration
- actual_duration
- created_at
- updated_at

## 7.5 logbook_entries

- id
- title
- start_date
- end_date
- description
- output
- category_id
- created_at
- updated_at

## 7.6 logbook_tasks

- logbook_id
- task_id

## 7.7 mentoring_sessions

- id
- title
- date
- description
- output
- mentor_name
- meeting_type
- status
- next_action
- created_at
- updated_at

## 7.8 mentoring_tasks

- mentoring_id
- task_id

## 7.9 attachments

- id
- file_name
- storage_path
- file_type
- file_size
- caption
- date_taken
- category_id
- task_id
- logbook_id
- mentoring_id
- created_at

## 7.10 monthly_reports

- id
- title
- period_start
- period_end
- summary
- achievements
- challenges
- next_plan
- status
- created_at
- updated_at

## 7.11 report_templates

- id
- name
- storage_path
- version
- template_type
- created_at
- updated_at

## 7.12 report_exports

- id
- report_id
- template_id
- storage_path
- exported_at

---

# 8. Non-Functional Requirements

## 8.1 Performance

- Dashboard dapat dimuat dengan cepat pada koneksi internet normal.
- Search dan filter tidak menyebabkan reload halaman penuh.
- Upload file menampilkan progress.
- Export DOCX tidak memblokir seluruh UI.
- Data list menggunakan pagination atau infinite loading jika diperlukan.

## 8.2 Security

- Supabase Auth untuk authentication.
- Row Level Security (RLS) untuk data pengguna.
- User hanya dapat mengakses data miliknya sendiri.
- File Storage menggunakan policy yang sesuai.
- Validasi input menggunakan Zod.
- Server-side validation untuk proses export.
- Jangan menyimpan service role key di frontend.
- Jangan menyimpan data sensitif BPS yang tidak boleh disimpan secara pribadi.

## 8.3 Reliability

- Error handling pada semua proses CRUD.
- Toast feedback untuk aksi berhasil atau gagal.
- Empty state untuk data kosong.
- Loading state untuk proses fetch.
- Confirmation dialog untuk delete.
- Backup database dan file secara berkala.

## 8.4 Accessibility

- Semua form memiliki label.
- Keyboard navigation.
- Kontras warna yang memadai.
- Focus state pada interactive elements.
- Responsive untuk desktop dan mobile.

---

# 9. Business Logic Details

## 9.1 Date range

- Start date wajib diisi.
- End date wajib diisi untuk logbook.
- End date tidak boleh lebih awal dari start date.
- Task dapat memiliki deadline kosong.
- Logbook dapat berlangsung satu hari atau beberapa minggu.
- Event calendar ditampilkan pada seluruh rentang tanggal.

## 9.2 Monthly report calculation

- Total tasks: seluruh task yang tanggalnya beririsan dengan periode laporan.
- Completed tasks: task dengan status Done.
- Total logbook: logbook yang tanggalnya beririsan dengan periode laporan.
- Total mentoring: pembimbingan yang tanggalnya berada pada periode laporan.
- Total evidence: bukti yang dibuat atau ditautkan pada periode laporan.
- Kategori dihitung berdasarkan relasi aktivitas.
- Statistik ditampilkan sebagai ringkasan, bukan pengganti isi laporan.

## 9.3 Task-to-logbook

- Task selesai dapat dijadikan draft logbook.
- Draft memiliki relasi ke task sumber.
- User dapat menggabungkan beberapa task ke satu logbook.
- User dapat mengedit draft sebelum disimpan.
- Task tetap ada setelah dikonversi.

## 9.4 Monthly report review

- Draft laporan dibuat dari data otomatis.
- User dapat mengubah narasi summary, achievements, challenges, dan next_plan.
- Laporan dapat disimpan sebagai Draft.
- Laporan dapat difinalisasi.
- Laporan final dapat diexport ke Word.

---

# 10. Development Roadmap

## Phase 1 — Foundation

- Setup Next.js.
- Setup Supabase.
- Setup authentication.
- Setup shadcn/ui.
- Setup database schema.
- Setup folder structure.
- Setup TanStack Query.
- Setup form validation.

## Phase 2 — Task & Calendar

- Task CRUD.
- Category CRUD.
- Calendar view.
- List view.
- Search and filter.
- Task detail.
- Task status.

## Phase 3 — Logbook & Evidence

- Logbook CRUD.
- Date range.
- Convert task to logbook.
- Evidence upload.
- Gallery.
- Logbook detail.

## Phase 4 — Mentoring

- Mentoring CRUD.
- Meeting type.
- Output and follow-up.
- Connect mentoring to task.

## Phase 5 — Monthly Report

- Monthly report CRUD.
- Automatic summary.
- Manual narrative fields.
- Report review.
- Report export.

## Phase 6 — DOCX Generator

- Upload template.
- Template mapping.
- Generate Lampiran 4.
- Insert evidence.
- Download Word.
- Validation.

## Phase 7 — Polish

- Responsive layout.
- Dark mode.
- Error handling.
- Testing.
- Performance optimization.
- Deployment.

---

# 11. Future Monetization

Aplikasi awal dibuat untuk penggunaan pribadi. Namun, desain database dan arsitektur perlu memungkinkan pengembangan multi-user.

## Future features

- Multi-user authentication.
- Workspace mahasiswa.
- Custom report templates.
- Shared workspace.
- Subscription.
- Storage quota.
- Organization management.

## Potential pricing model

- Free: basic task, logbook, dan export.
- Basic: unlimited task, evidence, dan monthly report.
- Pro: custom templates, advanced analytics, dan AI assistant.

Harga dan model subscription belum ditentukan. Fokus MVP tetap pada manfaat personal dan kualitas produk.

---

# 12. Success Metrics

## MVP success

- User dapat mencatat task harian.
- User dapat melihat task dalam calendar.
- User dapat membuat logbook dari task.
- User dapat menyimpan dokumentasi.
- User dapat mencatat pembimbingan.
- User dapat menghasilkan monthly report.
- User dapat menghasilkan Lampiran 4 Word.

## Product success

- Mengurangi waktu pencatatan logbook.
- Mengurangi duplikasi penulisan task dan logbook.
- Mengurangi kesalahan data sebelum export.
- Memudahkan pencarian dokumentasi.
- Membantu user mempersiapkan laporan bulanan.
- Menjadi portfolio project yang menunjukkan kemampuan frontend engineering dan fullstack development.

---

# 13. Open Questions

1. Template DOCX kampus yang asli perlu dikumpulkan untuk memastikan format export.
2. Apakah Lampiran 4 harus menggunakan satu baris untuk setiap kegiatan, atau setiap hari wajib satu baris?
3. Apakah bukti kegiatan berupa gambar harus dimasukkan langsung ke Word atau cukup berupa link?
4. Apakah monthly report harus mengikuti template resmi kampus atau menggunakan template custom?
5. Apakah pembimbingan akan selalu dengan satu dosen atau bisa beberapa pembimbing?
6. Apakah aplikasi perlu offline support untuk mencatat task ketika tidak ada internet?
7. Apakah recurring task perlu masuk MVP atau ditunda ke versi berikutnya?
8. Apakah user ingin menggunakan kalender sebagai halaman utama atau dashboard dengan task list sebagai fokus utama?

---

# 14. MVP Definition of Done

MVP dianggap selesai apabila:

- [ ]  User dapat login.
- [ ]  User dapat membuat, mengedit, dan menghapus task.
- [ ]  User dapat melihat task pada calendar dan list.
- [ ]  User dapat membuat kategori.
- [ ]  User dapat membuat logbook dengan date range.
- [ ]  User dapat mengonversi task menjadi logbook.
- [ ]  User dapat upload dan melihat bukti kegiatan.
- [ ]  User dapat mencari dan memfilter data.
- [ ]  User dapat mencatat pembimbingan.
- [ ]  User dapat membuat monthly report.
- [ ]  User dapat mengisi template Lampiran 4.
- [ ]  User dapat generate dan mengunduh file DOCX.
- [ ]  User dapat melihat hasil export dan mengeditnya secara manual jika diperlukan.
- [ ]  Aplikasi memiliki validasi form dan error handling.
- [ ]  Data pengguna terlindungi dengan RLS.
- [ ]  Aplikasi dapat digunakan dengan nyaman di desktop dan mobile.

---

## Product conclusion

Internship OS bukan hanya aplikasi logbook, tetapi sistem pengelolaan aktivitas magang yang menghubungkan pekerjaan harian, dokumentasi, pembimbingan, dan laporan akademik.

Fokus utama MVP adalah membangun alur:

**Task → Logbook → Monthly Report → DOCX Export**

Dengan arsitektur Next.js + Supabase, aplikasi dapat dikembangkan secara bertahap dan tetap memiliki potensi untuk menjadi produk SaaS bagi mahasiswa magang lainnya.