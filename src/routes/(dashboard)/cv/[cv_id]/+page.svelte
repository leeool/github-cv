<script lang="ts">
  import { Button, Editable } from "$lib/components";
  import EditableArray from "$lib/components/forms/EditableArray/EditableArray.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  let element: HTMLDivElement;

  let updatedCurriculum: ICurriculumDto = {
    name: data.curriculum.name,
    job_title: data.curriculum.job_title,
    about: data.curriculum.about,
    skills: data.curriculum.skills,
  };

  let timeOut: number;

  const handleChange = (value: string | string[], key: keyof ICurriculum) => {
    clearTimeout(timeOut);

    updatedCurriculum = {
      ...updatedCurriculum,
      [key]: value,
    };

    timeOut = setTimeout(() => console.log("salvou"), 5000);
  };

  const handleSave = () => {
  };
</script>

<div class="container">
  <div class="github-content">
    <Button on:click={handleSave}>salvar</Button>
  </div>

  <div class="cv-container" bind:this={element}>
    <div class="cv-content">
      <div class="header-container">
        <h1 class="name">
          <Editable
            value={data.curriculum.name}
            key="name"
            placeholder="Nome completo"
            onChange={handleChange}>{data.curriculum.name}</Editable
          >
        </h1>
        <h2 class="job-title">
          <Editable
            value={data.curriculum.job_title}
            key="job_title"
            placeholder="Sua área de atuação"
            onChange={handleChange}>{data.curriculum.job_title}</Editable
          >
        </h2>
      </div>

      <div class="body-container">
        <div class="about">
          <h3>Sobre</h3>
          <p>
            <Editable
              value={data.curriculum.about}
              key="about"
              placeholder="Sobre você"
              onChange={handleChange}>{data.curriculum.about}</Editable
            >
          </p>
        </div>

        <div class="about">
          <h3>Experiências</h3>
          <p>
            <Editable
              value={data.curriculum.about}
              key="about"
              placeholder="Sobre você"
              onChange={handleChange}>{data.curriculum.about}</Editable
            >
          </p>
        </div>

        <div class="about">
          <h3>Projetos</h3>
          <p>
            <Editable
              value={data.curriculum.about}
              key="about"
              placeholder="Sobre você"
              onChange={handleChange}>{data.curriculum.about}</Editable
            >
          </p>
        </div>

        <div class="about">
          <h3>Habilidades</h3>
          <EditableArray
            values={data.curriculum.skills}
            key="skills"
            placeholder="Adicione um habilidade"
            onChange={handleChange}
          />
        </div>
      </div>
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
      height: 40rem;

      .header-container {
        padding: 1rem 0;
        background-color: #333;
        display: flex;
        justify-content: center;
        display: grid;
        justify-items: center;

        .name {
          font-weight: 700;
          font-size: 1.5rem;
          color: #fff;
        }

        .job-title {
          font-size: 1rem;
          color: #fff;
          font-weight: 500;
        }
      }

      .body-container {
        padding: 0 1rem;
      }

      .about {
        padding: 1rem;
        line-height: 1.5;
      }
    }
  }
</style>
