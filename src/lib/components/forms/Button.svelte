<script lang="ts">
</script>

<button on:click {...$$restProps}>
  <slot />
</button>

<style lang="scss">
  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #fafafa;
      border-color: #333;
    }
    &:active {
      background-color: #333;
      color: #fff
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      pointer-events: none;

    }
  }
</style>
