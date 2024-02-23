interface ICurriculum {
  id: string
  user_id: string
  github_curriculum_id: string
  name: string
  job_title: string
  about: string
  skills: string[]
}

type ICurriculumDto = Omit<ICurriculum, "id" | "user_id" | "github_curriculum_id">
