import type { Database } from './database.types'

// Re-export master database schema & enums
export * from './database.types'

// Convenient Model Row / Insert / Update Types
export type ProfileRow = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

export type CategoryRow = Database['public']['Tables']['categories']['Row']
export type CategoryInsert = Database['public']['Tables']['categories']['Insert']
export type CategoryUpdate = Database['public']['Tables']['categories']['Update']

export type WorkstreamRow = Database['public']['Tables']['workstreams']['Row']
export type WorkstreamInsert = Database['public']['Tables']['workstreams']['Insert']
export type WorkstreamUpdate = Database['public']['Tables']['workstreams']['Update']

export type TaskRow = Database['public']['Tables']['tasks']['Row']
export type TaskInsert = Database['public']['Tables']['tasks']['Insert']
export type TaskUpdate = Database['public']['Tables']['tasks']['Update']

export type LogbookRow = Database['public']['Tables']['logbook_entries']['Row']
export type LogbookInsert = Database['public']['Tables']['logbook_entries']['Insert']
export type LogbookUpdate = Database['public']['Tables']['logbook_entries']['Update']

export type MentoringRow = Database['public']['Tables']['mentoring_sessions']['Row']
export type MentoringInsert = Database['public']['Tables']['mentoring_sessions']['Insert']
export type MentoringUpdate = Database['public']['Tables']['mentoring_sessions']['Update']

export type AttachmentRow = Database['public']['Tables']['attachments']['Row']
export type AttachmentInsert = Database['public']['Tables']['attachments']['Insert']
export type AttachmentUpdate = Database['public']['Tables']['attachments']['Update']

export type MonthlyReportRow = Database['public']['Tables']['monthly_reports']['Row']
export type MonthlyReportInsert = Database['public']['Tables']['monthly_reports']['Insert']
export type MonthlyReportUpdate = Database['public']['Tables']['monthly_reports']['Update']

// Calendar Engine Types
export type CalendarViewMode = 'month' | 'week' | 'day'

export interface CalendarEventItem {
  id: string
  title: string
  startDate: Date
  endDate?: Date
  type: 'task' | 'logbook' | 'mentoring'
  status?: string
  priority?: string
  categoryName?: string
  categoryColor?: string
}

// DOCX Export Types (Lampiran 4)
export interface DocxExportData {
  studentName: string
  studentNim: string
  university: string
  major: string
  institution: string
  supervisorName: string
  periodLabel: string
  items: Array<{
    no: number
    dateRange: string
    activity: string
    output: string
  }>
}
