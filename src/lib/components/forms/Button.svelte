<script lang="ts">
  export let label: string;
  export let className: string = "";

</script>

<button on:click {...$$restProps}>
  {label}
</button>

<style lang="scss">
  button {
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #eee;
    }
  }
</style>
