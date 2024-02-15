<script lang="ts">
  import { setUserStore, getUserStore } from "$lib/userContext.svelte";
  import type { LayoutData } from "./$types";
  export let data: LayoutData & { user: IUser };

  setUserStore();

  const userStore = getUserStore();

  $userStore = data.user;
</script>

<slot />
