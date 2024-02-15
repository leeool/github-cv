<script lang="ts">
  import { goto, pushState } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    goto("/")
  });
</script>
