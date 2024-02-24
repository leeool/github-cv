<script lang="ts">
  export let index: number;
  export let value: string;
  export let values: string[];
  export let placeholder: string;
  export let onChange: (value: string[], key: keyof ICurriculum) => void;
  export let key: keyof ICurriculum;

  type TKeyUp = KeyboardEvent & {
    currentTarget: HTMLDivElement & EventTarget;
  };

  const handleChange = (
    e: Event & { currentTarget: EventTarget & HTMLDivElement },
    index: number,
  ) => {
    const value = e.currentTarget.textContent;
    if (!value) return;

    values[index] = value;
  };

  const handleBlur = (
    e: Event & { currentTarget: EventTarget & HTMLDivElement },
    index: number,
  ) => {
    let target = e.target as HTMLDivElement;
    let newValue = target.textContent;

    if (!newValue || newValue === " ") {
      delete values[index];
      values = values.filter((v) => v);
    } else {
      values[index] = newValue;
    }

    onChange(values, key);
  };

  const handleKeyDown = (e: TKeyUp) => {
    if (["Enter", "NumpadEnter"].includes(e.code)) return e.currentTarget.blur();
  };
</script>

<div>
  <div
    class="content"
    contenteditable="true"
    on:blur={(e) => handleBlur(e, index)}
    on:keydown={handleKeyDown}
    aria-hidden="true"
    autocorrect="false"
    data-ph={placeholder}
    data-empty={value.trim() ? false : true}
    on:input={(e) => handleChange(e, index)}
  >
    {value.trim()}
  </div>
</div>

<style lang="scss">
  .content {
    width: fit-content;
    cursor: pointer;
    padding: 0.125rem 0;
    color: inherit;
    height: fit-content;

    &:is([data-empty="true"])::before {
      content: attr(data-ph);
      color: #ccc;
    }

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
