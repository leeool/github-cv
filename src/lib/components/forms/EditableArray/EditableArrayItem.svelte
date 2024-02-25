<script lang="ts">
  import { onMount } from "svelte";

  export let index: number;
  export let value: string;
  export let values: string[];
  export let placeholder: string;
  export let onChange: (value: string[], key: keyof ICurriculum) => void;
  export let key: keyof ICurriculum;
  let element: HTMLDivElement;

  type TKeyUp = KeyboardEvent & {
    currentTarget: HTMLDivElement & EventTarget;
  };

  const deleteCurrentValue = () => {
    delete values[index];
    values = values.filter((v) => v);
  };

  const handleChange = (
    e: Event & { currentTarget: EventTarget & HTMLDivElement },
    index: number,
  ) => {
    const value = e.currentTarget.textContent;
    if (!value) return;

    values[index] = value.trim();
  };

  const handleBlur = (
    e: Event & { currentTarget: EventTarget & HTMLDivElement },
    index: number,
  ) => {
    let target = e.target as HTMLDivElement;
    let newValue = target.textContent?.trim();

    if (!newValue || newValue === " ") {
      deleteCurrentValue();
    } else {
      values[index] = newValue.trim();
    }

    onChange(values, key);
  };

  const handleKeyDown = (e: TKeyUp) => {
    const value = e.currentTarget.textContent;

    if (
      value?.length === 20 &&
      !["Backspace", "Enter", "NumpadEnter"].includes(e.code) &&
      !e.ctrlKey
    ) {
      e.preventDefault();
      return;
    }

    if (e.code === "Backspace" && value?.length === 0) {
      deleteCurrentValue();
    }

    if (["Enter", "NumpadEnter"].includes(e.code))
      return e.currentTarget.blur();
  };

  onMount(() => {
    if (!value) {
      element.focus();
    }
  });
</script>

<li class="wrapper">
  <div
    bind:this={element}
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
</li>

<style lang="scss">
  .wrapper {
    position: relative;
    border: 1px solid #ccc;
    padding: 0 0.5rem;

  }
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
