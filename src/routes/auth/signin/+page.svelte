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
  />
  <Input
    label="Password"
    type="password"
    name="password"
    placeholder="••••••••••••••"
  />
  <div class="btn-wrapper">
    <Button label="Criar conta" on:click={() => goto("/auth/signup")} type="button" />
    <Button label="Avançar" on:click={() => console.log("oi")} />
  </div>
</Form>

<style lang="scss">
  form {
    h2 {
      font-size: 2rem;
    }

    div {
      display: grid;
      gap: 1rem;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
