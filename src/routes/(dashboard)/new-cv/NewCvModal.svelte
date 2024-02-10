<script lang="ts">
  import { Button, Input } from "$lib/components";
  import { onMount } from "svelte";
  import {page} from "$app/stores"
  import { goto, pushState } from "$app/navigation";

  export let onClose: () => void;
  let container: HTMLDivElement;
  let username = ""

  onMount(() => {
    const closeOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains("container")) {
        onClose();
    }
    }
    container.addEventListener("click", closeOnClick);

    return () => container.removeEventListener("click", closeOnClick)
  });

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    pushState("/new-cv", { openModal: true})

    const req = await fetch(`https://api.github.com/users/${username}`)

    if (!req.ok) {
      pushState("/new-cv", {error: "Usuário não encontrado", openModal: true})
      return
    }
    const userData: IGithubUser = await req.json()

    goto(`/${userData.login}`)

    console.log(userData)
  }
</script>

<div class="container" bind:this={container}>
  <div class="content">
  <form  on:submit={onSubmit}>
    <h1>Selecione um usuário</h1>
    <Input label="Nome de usuário" placeholder="usuario_exemplo"  bind:value={username}/>
    <div class="btn-wrapper">
      <Button on:click={onClose} type="button">Cancelar</Button>
      <Button on:click={() => {}}>Criar</Button>
    </div>
  </form>
  {#if $page.state.error}
    <p>{$page.state.error}</p>
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

    form {
      display: grid;
      gap: 1rem;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
