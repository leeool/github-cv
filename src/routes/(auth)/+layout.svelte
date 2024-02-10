<div class="content">
  <div class="title">
    <h1>gitæ</h1>
  </div>
  <slot />
  <ul class="cards">
    <li>teste</li>
    <li>teste</li>
    <li>teste</li>
    <li>teste</li>
  </ul>
</div>

<style lang="scss">
  .content {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-self: center;
    gap: 3rem;
    width: 100%;
  }

  .title {
    width: fit-content;
    justify-self: center;

    h1 {
      color: #333;
      font-size: 5rem;
      text-align: center;
      cursor: pointer;
      width: fit-content;

      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 5rem;
    grid-column: 1 / -1;

    li {
      border: 1px solid #ccc;
      padding: 1rem;
      height: fit-content;
      width: 100%;
    }
  }
</style>
