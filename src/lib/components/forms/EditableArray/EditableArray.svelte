<script lang="ts">
  import EditableArrayItem from "./EditableArrayItem.svelte";

  export let onChange: (value: string[], key: keyof ICurriculum) => void;
  export let values: string[] = [];
  export let key: keyof ICurriculum;
  export let placeholder: string;

  const handleAdd = () => {
    if ((values.length && !values[values.length - 1]) || values.length === 7)
      return;
    values = [...values, ""];
  };
</script>

<div class="container">
  {#if values?.length}
    <ul class="items">
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
    </ul>
  {/if}
  <button on:click={handleAdd} disabled={values.length === 7}>+</button>
</div>

<style lang="scss">
  .container {
    gap: 1rem;
  }

  button {
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0.25rem 0.5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    font-weight: 700;
    justify-self: start;

    &:hover {
      background-color: #fafafa;
      border-color: #333;
    }
    &:active {
      background-color: #333;
      color: #fff;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    row-gap: 1rem;
    justify-content: start;
  }
</style>
