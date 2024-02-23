<script asscript lang="ts">
  import { Input, Button } from "$lib/components";
  import Form from "../components/Form.svelte";
  import { goto } from "$app/navigation";
</script>

<Form action="?/login" method="POST">
  <h2>Logue-se.</h2>
  <Input
    label="E-mail ou Nome de usuário"
    name="email"
    placeholder="exemplo@email.com"
    value="leol@gmail.com"
    required
  />
  <Input
    label="Password"
    type="password"
    name="password"
    placeholder="••••••••••••••"
    value="admin123"
    required
  />
  <div class="btn-wrapper">
    <Button on:click={() => goto("/signup")} type="button"
      >Não tenho uma conta</Button
    >
    <Button on:click={() => console.log("oi")}>Entrar</Button>
  </div>
</Form>

<style lang="scss">
  h2 {
    font-size: 1rem;
    color: #333;
  }

  .btn-wrapper {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 14rem 8rem;
  }
</style>
