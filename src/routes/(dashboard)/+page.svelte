<script lang="ts">
  import { goto, pushState } from "$app/navigation";
  import { page } from "$app/stores";
  import NewCvModal from "./new-cv/NewCvModal.svelte";

  const handleOpen = () => {
    pushState("/new-cv", {newCv: {openModal: true}});
  };

</script>

<nav>
  <h1>Novo</h1>
  <button on:click={handleOpen}>Novo</button>
  <button on:click={() => goto("/signin")}>Sair</button>
</nav>
<nav>
  <h1>Recentes</h1>
  <button on:click={() => goto("/cv")}>Meus CVs</button>
</nav>

<button on:click={handleOpen}>abrir</button>

<dialog open={$page.state.newCv?.openModal}>
  <NewCvModal />
</dialog>

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

  dialog {
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100dvh;
    border: none;
    background: transparent;
  }
</style>
