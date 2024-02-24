<script lang="ts">
  import EditableArrayItem from "./EditableArrayItem.svelte";

  export let onChange: (value: string[], key: keyof ICurriculum) => void;
  export let values: string[] = [];
  export let key: keyof ICurriculum;
  export let placeholder: string;

  const handleAdd = () => {
    if (values.length && !values[values.length - 1]) return;
    values = [...values, ""];
  };
</script>

<div class="container">
  {#if values?.length}
    <div class="items">
      {#each values as value, index}
        <EditableArrayItem
          bind:values
          {value}
          {key}
          {index}
          {placeholder}
          {onChange}
        />
      {/each}
    </div>
  {/if}
  <button on:click={handleAdd}>+</button>
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  button {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0.25rem 0.5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    font-weight: 700;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
