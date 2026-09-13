-- ==============================================================================
-- SIGAP (Internship OS) — Initial Database Schema
-- Compatible with Supabase PostgreSQL (Row Level Security enabled)
-- ==============================================================================

-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Relates to Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  nim text,
  university text,
  major text,
  institution text default 'BPS Kabupaten Banyuwangi',
  supervisor_name text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 2. CATEGORIES
create table if not exists public.categories (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  description text,
  color text default '#2563eb' not null,
  is_archived boolean default false not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 3. WORKSTREAMS (Projects / Sub-initiatives)
create table if not exists public.workstreams (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  status text default 'active' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 4. TASKS
create table if not exists public.tasks (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  description text,
  start_date date not null,
  due_date date,
  status text check (status in ('todo', 'in_progress', 'done', 'cancelled')) default 'todo' not null,
  priority text check (priority in ('low', 'medium', 'high')) default 'medium' not null,
  category_id uuid references public.categories(id) on delete restrict not null,
  workstream_id uuid references public.workstreams(id) on delete set null,
  estimated_duration integer, -- in minutes
  actual_duration integer,    -- in minutes
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 5. LOGBOOK ENTRIES (Lampiran 4 Kampus)
create table if not exists public.logbook_entries (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  start_date date not null,
  end_date date not null,
  description text not null,
  output text not null,
  category_id uuid references public.categories(id) on delete restrict not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  constraint valid_date_range check (end_date >= start_date)
);

-- 6. LOGBOOK TASKS (Many-to-Many junction between tasks and logbook)
create table if not exists public.logbook_tasks (
  logbook_id uuid references public.logbook_entries(id) on delete cascade not null,
  task_id uuid references public.tasks(id) on delete cascade not null,
  primary key (logbook_id, task_id)
);

-- 7. MENTORING SESSIONS (Bimbingan Dosen)
create table if not exists public.mentoring_sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  date timestamptz not null,
  description text not null,
  output text not null,
  mentor_name text not null,
  meeting_type text check (meeting_type in ('online', 'offline')) default 'offline' not null,
  status text check (status in ('scheduled', 'completed', 'cancelled')) default 'completed' not null,
  next_action text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 8. MENTORING TASKS (Follow-up tasks resulting from mentoring)
create table if not exists public.mentoring_tasks (
  mentoring_id uuid references public.mentoring_sessions(id) on delete cascade not null,
  task_id uuid references public.tasks(id) on delete cascade not null,
  primary key (mentoring_id, task_id)
);

-- 9. ATTACHMENTS (Evidence & Documentation)
create table if not exists public.attachments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  file_name text not null,
  storage_path text not null,
  file_type text not null,
  file_size integer not null,
  caption text,
  date_taken date,
  category_id uuid references public.categories(id) on delete set null,
  task_id uuid references public.tasks(id) on delete set null,
  logbook_id uuid references public.logbook_entries(id) on delete set null,
  mentoring_id uuid references public.mentoring_sessions(id) on delete set null,
  created_at timestamptz default now() not null
);

-- 10. MONTHLY REPORTS
create table if not exists public.monthly_reports (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  period_start date not null,
  period_end date not null,
  summary text,
  achievements text,
  challenges text,
  next_plan text,
  status text check (status in ('draft', 'final')) default 'draft' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 11. REPORT TEMPLATES
create table if not exists public.report_templates (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  storage_path text not null,
  version text default '1.0' not null,
  template_type text default 'lampiran_4' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- 12. REPORT EXPORTS
create table if not exists public.report_exports (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  report_id uuid references public.monthly_reports(id) on delete cascade not null,
  template_id uuid references public.report_templates(id) on delete cascade not null,
  storage_path text not null,
  exported_at timestamptz default now() not null
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.workstreams enable row level security;
alter table public.tasks enable row level security;
alter table public.logbook_entries enable row level security;
alter table public.logbook_tasks enable row level security;
alter table public.mentoring_sessions enable row level security;
alter table public.mentoring_tasks enable row level security;
alter table public.attachments enable row level security;
alter table public.monthly_reports enable row level security;
alter table public.report_templates enable row level security;
alter table public.report_exports enable row level security;

-- Profiles policies
create policy "Users can view their own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert their own profile" on public.profiles for insert with check (auth.uid() = id);

-- Categories policies
create policy "Users can manage their categories" on public.categories for all using (auth.uid() = user_id or user_id is null);

-- Workstreams policies
create policy "Users can manage their workstreams" on public.workstreams for all using (auth.uid() = user_id or user_id is null);

-- Tasks policies
create policy "Users can manage their tasks" on public.tasks for all using (auth.uid() = user_id or user_id is null);

-- Logbook entries policies
create policy "Users can manage their logbook entries" on public.logbook_entries for all using (auth.uid() = user_id or user_id is null);

-- Logbook tasks policies
create policy "Users can manage their logbook tasks" on public.logbook_tasks for all using (
  exists (
    select 1 from public.logbook_entries where id = logbook_tasks.logbook_id and (user_id = auth.uid() or user_id is null)
  )
);

-- Mentoring sessions policies
create policy "Users can manage their mentoring sessions" on public.mentoring_sessions for all using (auth.uid() = user_id or user_id is null);

-- Mentoring tasks policies
create policy "Users can manage their mentoring tasks" on public.mentoring_tasks for all using (
  exists (
    select 1 from public.mentoring_sessions where id = mentoring_tasks.mentoring_id and (user_id = auth.uid() or user_id is null)
  )
);

-- Attachments policies
create policy "Users can manage their attachments" on public.attachments for all using (auth.uid() = user_id or user_id is null);

-- Monthly reports policies
create policy "Users can manage their monthly reports" on public.monthly_reports for all using (auth.uid() = user_id or user_id is null);

-- Report templates policies (Read-only for all authenticated users)
create policy "Users can view report templates" on public.report_templates for select to authenticated using (true);

-- Report exports policies
create policy "Users can manage their report exports" on public.report_exports for all using (auth.uid() = user_id or user_id is null);
