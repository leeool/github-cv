interface ICurriculum {
  id: string
  user_id: string
  github_curriculum_id: string
  name: string
  job_title: string
  about: string
  skills: string[]
  updated_at: Date
  created_at: Date
}

type ICurriculumDto = Omit<ICurriculum, "id" | "user_id" | "github_curriculum_id">
