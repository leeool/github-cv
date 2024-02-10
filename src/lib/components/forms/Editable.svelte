<script lang="ts">
    import { onMount } from "svelte";


  export let value: string | null
  let editable: HTMLDivElement

  const handleBlur = (e: Event) => {
    let target = e.target as HTMLDivElement
    let newValue = target.textContent
    value = newValue
  }

</script>

<div contenteditable="true" bind:this={editable} on:blur={handleBlur} role="button" aria-hidden="true">{value}</div>

<style lang="scss">
  div {
    width: fit-content;
    cursor: pointer;
    padding: 0.25rem;

    &:hover {
      background-color: #3331;
    }
  }

</style>
