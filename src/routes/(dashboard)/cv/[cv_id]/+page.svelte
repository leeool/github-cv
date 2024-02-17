<script lang="ts">
    import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import { Editable } from "$lib/components";
  import { getUserStore } from "$lib/userContext.svelte";
  const userStore = getUserStore();

  let name = "";

  afterNavigate(() => {
    name = $page.params.cv_id;
  });

  const changeUser = () => {
    if (!$userStore.user) return;
    $userStore.user = { ...$userStore.user, email: "teste" };
  };
</script>

<div class="container">
  <div class="content">
    <Editable bind:value={name} />
    <p>alterou {name}</p>
    {#if $userStore.user}
      <p>{$userStore.user.id}</p>
      <p>{$userStore.user.username}</p>
      <p>{$userStore.user.email}</p>
      <button on:click={changeUser}>alterar usuario</button>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    background-color: #eee;
    height: 100dvh;
    padding: 1rem;
  }

  .content {
    background-color: #fff;
    padding: 1rem;
    height: 100%;
  }
</style>
