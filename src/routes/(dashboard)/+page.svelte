<script lang="ts">
  import { goto, pushState } from "$app/navigation";
  import { page } from "$app/stores";
  import NewCvModal from "./new-cv/NewCvModal.svelte";

  const openModal = () => {
    pushState("new-cv", { openModal: true });
  };

  const closeModal = () => {
    console.log($page.state.openModal);
    history.back();
  };
</script>

<nav>
  <h1>Novo</h1>
  <button on:click={openModal}>Novo</button>
  <button on:click={() => goto("/signin")}>Sair</button>
</nav>
<nav>
  <h1>Recentes</h1>
  <button>Meus CVs</button>
</nav>

{#if $page.state.openModal}
  <NewCvModal onClose={closeModal} />
{/if}

<style lang="scss">
  nav {
    display: grid;
    gap: 0.5rem;
    align-content: start;
    justify-items: start;

    h1 {
      color: #333;
    }
  }
  button {
    color: #aaa;
    font-weight: 500;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1rem;

    &:hover {
      background-color: #333;
      color: #fff;
    }

    &:active {
      background-color: #444;
    }
  }
</style>
