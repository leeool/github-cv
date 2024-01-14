<script lang="ts">
  import "./styles.css";
</script>

<!-- header -->
<div class="wrap">
  <header>
    <h1>Svelte</h1>
    <nav></nav>
  </header>
  <!-- content -->
  <main>
    <slot />
  </main>
  <!-- footer -->
  <footer>
    <h2>footer</h2>
  </footer>
</div>

<style lang="scss">
  main {
    max-width: 80rem;
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
  }

  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  footer {
    background-color: #fff;
  }

</style>
