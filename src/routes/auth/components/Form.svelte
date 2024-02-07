<div class="content">
  <div class="title">
    <h1>Gitæ</h1>
  </div>
  <form {...$$restProps}>
    <slot />
  </form>
</div>

<style lang="scss">
  .content {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-self: center;
    justify-items: center;
    gap: 3rem;
    width: 100%;

    .title {
      h1 {
        color: #333;
        font-size: 10rem;
        text-align: center;
      }
    }
  }

  form {
    padding: 1rem;
    background-color: #fff;
    display: grid;
    gap: 1rem;
    box-shadow: 6px 6px 0px 0px #333;
    border: 1px solid #ccc;
    width: 100%;
  }
</style>
