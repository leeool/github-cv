<script lang="ts">
  import { page } from "$app/stores";
  import { Editable } from "$lib/components";
  import { getUserStore } from "$lib/userContext.svelte";
  const user = getUserStore();

  let name = $state("");

  $effect(() => {
    name = $page.params.cv_id;
  });

  const changeUser = () => {
    if (!$user) return;
    $user = { ...$user, email: "teste" };
  };
</script>

<div class="container">
  <div class="content">
    <Editable bind:value={name} />
    <p>alterou {name}</p>
    {#if $user}
      <p>{$user.id}</p>
      <p>{$user.username}</p>
      <p>{$user.email}</p>
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
