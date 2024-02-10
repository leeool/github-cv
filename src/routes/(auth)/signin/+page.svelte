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
    required
  />
  <Input
    label="Password"
    type="password"
    name="password"
    placeholder="••••••••••••••"
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
    display: flex;
    justify-content: space-between;
  }
</style>
