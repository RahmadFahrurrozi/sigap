export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      attachments: {
        Row: {
          caption: string | null
          category_id: string | null
          created_at: string
          date_taken: string | null
          file_name: string
          file_size: number
          file_type: string
          id: string
          logbook_id: string | null
          mentoring_id: string | null
          storage_path: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          caption?: string | null
          category_id?: string | null
          created_at?: string
          date_taken?: string | null
          file_name: string
          file_size: number
          file_type: string
          id?: string
          logbook_id?: string | null
          mentoring_id?: string | null
          storage_path: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          caption?: string | null
          category_id?: string | null
          created_at?: string
          date_taken?: string | null
          file_name?: string
          file_size?: number
          file_type?: string
          id?: string
          logbook_id?: string | null
          mentoring_id?: string | null
          storage_path?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attachments_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_logbook_id_fkey"
            columns: ["logbook_id"]
            isOneToOne: false
            referencedRelation: "logbook_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_mentoring_id_fkey"
            columns: ["mentoring_id"]
            isOneToOne: false
            referencedRelation: "mentoring_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          is_archived: boolean
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          is_archived?: boolean
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          is_archived?: boolean
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      logbook_entries: {
        Row: {
          category_id: string
          created_at: string
          description: string
          end_date: string
          id: string
          output: string
          start_date: string
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          category_id: string
          created_at?: string
          description: string
          end_date: string
          id?: string
          output: string
          start_date: string
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string
          end_date?: string
          id?: string
          output?: string
          start_date?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logbook_entries_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      logbook_tasks: {
        Row: {
          logbook_id: string
          task_id: string
        }
        Insert: {
          logbook_id: string
          task_id: string
        }
        Update: {
          logbook_id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "logbook_tasks_logbook_id_fkey"
            columns: ["logbook_id"]
            isOneToOne: false
            referencedRelation: "logbook_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logbook_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      mentoring_sessions: {
        Row: {
          created_at: string
          date: string
          description: string
          id: string
          meeting_type: string
          mentor_name: string
          next_action: string | null
          output: string
          status: string
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          id?: string
          meeting_type?: string
          mentor_name: string
          next_action?: string | null
          output: string
          status?: string
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          id?: string
          meeting_type?: string
          mentor_name?: string
          next_action?: string | null
          output?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      mentoring_tasks: {
        Row: {
          mentoring_id: string
          task_id: string
        }
        Insert: {
          mentoring_id: string
          task_id: string
        }
        Update: {
          mentoring_id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentoring_tasks_mentoring_id_fkey"
            columns: ["mentoring_id"]
            isOneToOne: false
            referencedRelation: "mentoring_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentoring_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_reports: {
        Row: {
          achievements: string | null
          challenges: string | null
          created_at: string
          id: string
          next_plan: string | null
          period_end: string
          period_start: string
          status: string
          summary: string | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          achievements?: string | null
          challenges?: string | null
          created_at?: string
          id?: string
          next_plan?: string | null
          period_end: string
          period_start: string
          status?: string
          summary?: string | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          achievements?: string | null
          challenges?: string | null
          created_at?: string
          id?: string
          next_plan?: string | null
          period_end?: string
          period_start?: string
          status?: string
          summary?: string | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          institution: string | null
          major: string | null
          name: string
          nim: string | null
          supervisor_name: string | null
          university: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          institution?: string | null
          major?: string | null
          name: string
          nim?: string | null
          supervisor_name?: string | null
          university?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          institution?: string | null
          major?: string | null
          name?: string
          nim?: string | null
          supervisor_name?: string | null
          university?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      report_exports: {
        Row: {
          exported_at: string
          id: string
          report_id: string
          storage_path: string
          template_id: string
          user_id: string | null
        }
        Insert: {
          exported_at?: string
          id?: string
          report_id: string
          storage_path: string
          template_id: string
          user_id?: string | null
        }
        Update: {
          exported_at?: string
          id?: string
          report_id?: string
          storage_path?: string
          template_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_exports_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "monthly_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_exports_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "report_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      report_templates: {
        Row: {
          created_at: string
          id: string
          name: string
          storage_path: string
          template_type: string
          updated_at: string
          version: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          storage_path: string
          template_type?: string
          updated_at?: string
          version?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          storage_path?: string
          template_type?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          actual_duration: number | null
          category_id: string
          created_at: string
          description: string | null
          due_date: string | null
          estimated_duration: number | null
          id: string
          priority: string
          start_date: string
          status: string
          title: string
          updated_at: string
          user_id: string | null
          workstream_id: string | null
        }
        Insert: {
          actual_duration?: number | null
          category_id: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_duration?: number | null
          id?: string
          priority?: string
          start_date: string
          status?: string
          title: string
          updated_at?: string
          user_id?: string | null
          workstream_id?: string | null
        }
        Update: {
          actual_duration?: number | null
          category_id?: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_duration?: number | null
          id?: string
          priority?: string
          start_date?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string | null
          workstream_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_workstream_id_fkey"
            columns: ["workstream_id"]
            isOneToOne: false
            referencedRelation: "workstreams"
            referencedColumns: ["id"]
          },
        ]
      }
      workstreams: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workstreams_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
