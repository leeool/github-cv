<script asscript lang="ts">
  import { Input, Button } from "$lib/components";
</script>

<div class="content">
  <h1>Welcome to SvelteKit</h1>
  <form action="?/login" method="POST">
    <h2>Logue-se.</h2>
    <Input label="E-mail ou Username" name="email" placeholder="exemplo@email.com"/>
    <Input label="Password" type="password" name="password" placeholder="••••••••••••••"/>
    <div class="btn-wrapper">
      <Button label="Avançar" on:click={() => console.log("oi")} />
    </div>
  </form>
</div>

<style lang="scss">
  .content {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-self: center;
    gap: 3rem;

    h1 {
      font-size: 5rem;
      color: #bbb;
    }

  }
  form {
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    display: grid;
    gap: 0.75rem;
    border-radius: 0.15rem;
  }

  .btn-wrapper {
    justify-self: end;
  }
</style>
