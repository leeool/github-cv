<script lang="ts">
  import { page } from "$app/stores";
  import { Editable } from "$lib/components";
  import { getUserStore } from "$lib/userContext.svelte";
  const user = getUserStore();

  let name = $state($page.params.cv_id) 
</script>

<div class="container">
  <div class="content">
    <Editable bind:value={name} />
    <p>alterou {name}</p>
    {#if $user}
      <p>{$user.email}</p>
      <button
        on:click={() => $user = { ...$user, email: "leonardo@gmail.com" }}
        >alterar usuario</button
      >
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
