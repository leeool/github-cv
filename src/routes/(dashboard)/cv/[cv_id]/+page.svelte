<script lang="ts">
  import { Editable } from "$lib/components";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  let updatedCurriculum: ICurriculumDto = {
    name: data.curriculum.name,
    job_title: data.curriculum.job_title,
    about: data.curriculum.about,
    skills: data.curriculum.skills,
  };

  const handleChange = (value: string, key: keyof ICurriculum) => {
    updatedCurriculum = {
      ...updatedCurriculum,
      [key]: value,
    };

  };
</script>

<div class="container">
  <div class="github-content"></div>
  <div class="cv-container">
    <div class="cv-content">
      <div class="name-container">
        <Editable
          value={data.curriculum.name}
          key="name"
          placeholder="Nome completo"
          onChange={handleChange}>{data.curriculum.name}</Editable
        >
      </div>
      <Editable
        value={data.curriculum.job_title}
        key="job_title"
        placeholder="Sua área de atuação"
        onChange={handleChange}>{data.curriculum.job_title}</Editable
      >
      <Editable
        value={data.curriculum.about}
        key="about"
        placeholder="Sobre você"
        onChange={handleChange}>{data.curriculum.about}</Editable
      >
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 2rem;
    max-height: calc(100dvh - 13rem);
  }

  .github-content {
    background-color: #fff;
    height: 100%;
    box-shadow: 0px 0px 0px 2px #eee;
  }

  .cv-container {
    background-color: #fff;
    box-shadow: 0px 0px 0px 2px #eee;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .cv-content {
      width: 100%;
      height: 70rem;
      padding: 1rem;

      .name-container {
        background-color: #333;
        padding: 1rem 0;
        font-size: 1.5rem;
        color: #fff;
        display: flex;
        justify-content: center;
        font-weight: 600;
      }
    }
  }
</style>
