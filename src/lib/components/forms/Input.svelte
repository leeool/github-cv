<script lang="ts">
  export let label: String = "";
  export let value: String = "";
</script>

<div>
  <label>
    {label}
    <input bind:value {...$$restProps} />
  </label>
</div>

<style lang="scss">
  label {
    display: grid;
    gap: 0.3rem;
    font-weight: 500;
  }
  input {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    outline: none;
    box-shadow: 0px 0px 0px 0px #fff;
    transition: 0.2s ease box-shadow;

    &:focus,
    &:active {
      box-shadow: 0px 0px 0px 3px #ddd;
      border-color: #ccc;
    }
  }
</style>
