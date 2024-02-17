<script lang="ts">
  import { setUserStore, getUserStore } from "$lib/userContext.svelte";
  import type { LayoutData } from "./$types";
  export let data: LayoutData & { user: IUser | null };

  setUserStore();
  const userStore = getUserStore();
  $userStore.user = data.user;
</script>

<slot />
