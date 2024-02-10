<script lang="ts">
  import "./styles.css";
</script>

<!-- header -->
<div class="wrap">
  <header>
    <a href="/">
      <h1>gitæ</h1>
    </a>
    <nav></nav>
  </header>
  <!-- content -->
  <main>
    <slot />
  </main>
  <!-- footer -->
  <footer>
    <h2>Criado por leoldev</h2>
  </footer>
</div>

<style lang="scss">
  main {
    max-width: 60rem;
    padding: 1rem;
    margin: 3rem auto;
    width: 100%;
    flex: 1;
    display: grid;
  }
  header {
    background-color: #fff;
    border-radius: 0.25rem;
    padding: 0.25rem;
    width: 100%;
    display: flex;
    justify-content: center;

    h1 {
      text-align: center;
      color: #333;
      width: fit-content;

      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }

  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  footer {
    padding: 1rem;
    border-top: 1px solid #ccc;

    h2 {
      font-size: 1rem;
      color: #aaa;
      font-weight: 500;
    }
  }
</style>
