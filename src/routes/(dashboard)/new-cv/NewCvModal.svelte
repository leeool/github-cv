<script lang="ts">
  import { Button, Input } from "$lib/components";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {  goto, replaceState } from "$app/navigation";

  let container: HTMLDivElement;
  let username = "leeool";
  let githubUsers: Pick<IGithubUser, "login" | "avatar_url" | "id">[] = [];
  let error: boolean = false;

  onMount(() => {
    const closeOnClick = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;

      if (target.classList.contains("container")) {
        history.back()
      }
    };
    container.addEventListener("mousedown", closeOnClick);

    return () => container.removeEventListener("mousedown", closeOnClick);
  });

  const handleSearch = async () => {
    error = false;
    const req = await fetch(`?user=${username}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!req.ok) {
      error = true;
      githubUsers = []
    }

    const json = await req.json();
    githubUsers = json;
  };

</script>

<div class="container" bind:this={container}>
  <div class="content">
    <form class="form" on:submit|preventDefault={() => {}}>
      <h1>Selecione um usuário</h1>
      <Input
        label="Nome de usuário"
        placeholder="usuario_exemplo"
        bind:value={username}
      />
      <div class="btn-wrapper">
        <Button on:click={() => history.back()} type="button">Cancelar</Button>
        <Button on:click={handleSearch} on:submit={handleSearch}>Buscar</Button>
      </div>
    </form>

    {#if githubUsers.length > 0}
      <ul class="user-list">
        {#each githubUsers as { login, id, avatar_url }}
          <li
            class={`user ${id === $page.state.newCv.selectedUserId ? "selected" : ""}`}
          >
            <button
              on:click={() => {
                replaceState("", {
                  newCv: { openModal: true, selectedUserId: id },
                });
              }}
            >
              <img src={avatar_url} alt={`Imagem de avatar de ${login}`} />
              <h3>{login}</h3>
            </button>
          </li>
        {/each}
      </ul>
      <Button disabled={!$page.state.newCv.selectedUserId} on:click={() => goto("/cv/" + $page.state.newCv.selectedUserId)}>Criar</Button>
    {/if}

    {#if error}
      <p>Nenhum resultado encontrado</p>
    {/if}

  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3335;
    width: 100vw;
    height: 100dvh;
    padding: 0 1rem;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1rem;
    display: grid;
    gap: 2rem;
    width: 100%;
    max-width: 30rem;

    .form {
      display: grid;
      gap: 1rem;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .user-list {
    max-height: 20rem;
    overflow-y: auto;
    display: grid;
    padding: 0.5rem;
    border: 1px solid #ccc;

    button {
      all: unset;
    }

    img {
      max-width: 100%;
      height: 4rem;
    }

    .user button {
      width: 100%;
      display: flex;
      gap: 0.5rem;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: #eee;
      }
    }

    .selected button {
      color: #fff;
      background-color: #333 !important;
    }
  }
</style>
