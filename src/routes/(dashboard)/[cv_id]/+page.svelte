<script lang="ts">
  import {page} from "$app/stores"
  import {Editable} from "$lib/components";
  import context from "../../../userContext.svelte";
  const userContext = context()

  let name = $page.params.cv_id
</script>

<div class="container">
  <div class="content">
    <Editable bind:value={name}/>
    <p>alterou {name}</p>
    <p>{userContext.user?.email}</p>
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
