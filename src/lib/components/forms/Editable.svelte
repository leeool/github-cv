<script lang="ts">
  export let onChange: (value: string, key: keyof ICurriculum) => void;
  export let value: string | null = "";
  export let key: keyof ICurriculum | string = "";
  export let placeholder: string;
  let editable: HTMLDivElement;

  const handleBlur = (e: Event) => {
    let target = e.target as HTMLDivElement;
    let newValue = target.textContent;
    if (newValue === value || !newValue) return;
    value = newValue;
    onChange(newValue as string, key as keyof ICurriculum);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") return editable.blur();
  };
</script>

<div
  contenteditable="true"
  bind:this={editable}
  on:blur={handleBlur}
  on:keydown={handleKeyDown}
  role="button"
  aria-hidden="true"
  data-ph={placeholder}
  autocorrect="false"
>
  <slot />
</div>

<style lang="scss">
  [contenteditable="true"]:empty::before {
    content: attr(data-ph);
    color: #ccc;
  }
  div {
    width: fit-content;
    cursor: pointer;
    padding: 0.125rem 0;
    color: inherit;

    &:focus {
      box-shadow: 0px 0px 0px 2px #ddd;
      outline: none;
    }

    &:hover:not(:focus) {
      background-color: #eee3;
      box-shadow: 0px 0px 0px 1px #ccc;
    }
  }
</style>
