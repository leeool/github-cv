<script lang="ts">
  import { page } from "$app/stores";
  import { Button, Editable } from "$lib/components";
  import EditableArray from "$lib/components/forms/EditableArray/EditableArray.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  let element: HTMLDivElement;
  let save: "Salvando..." | "Currículo salvo." | null = null;
  let timeOut: number;

  let updatedCurriculum: ICurriculumDto = {
    name: data.curriculum.name,
    job_title: data.curriculum.job_title,
    about: data.curriculum.about,
    skills: data.curriculum.skills,
  };

  const fetchUpdate = async (updatedCurriculum: ICurriculumDto) => {
    const req = await fetch(`/cv/[cv_id]/?cv_id=${$page.params.cv_id}`, {
      method: "PUT",
      body: JSON.stringify(updatedCurriculum),
    });

    if (req.ok) save = "Currículo salvo.";

    console.log(await req.json());
    setTimeout(() => (save = null), 5000);
  };

  const handleChange = async (
    value: string | string[],
    key: keyof ICurriculum,
  ) => {
    save = null
    clearTimeout(timeOut);

    updatedCurriculum = {
      ...updatedCurriculum,
      [key]: value,
    };

    save = "Salvando...";
    timeOut = setTimeout(
      async () => await fetchUpdate(updatedCurriculum),
      5000,
    );
  };

  const handleSave = () => {};
</script>

<div class="container">
  <div class="github-content">
    <Button on:click={handleSave}>Download</Button>
    {#if save}
      <p>{save}</p>
    {/if}
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
    padding: 1rem;
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
