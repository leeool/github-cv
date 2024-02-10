<script asscript lang="ts">
  import { Input, Button } from "$lib/components";
  import Form from "../components/Form.svelte";
  import { goto } from "$app/navigation";
</script>

<Form action="?/signup" method="POST">
  <h2>Cadastre-se.</h2>
  <Input
    label="Nome de usuário"
    name="username"
    placeholder="Como deseja ser chamado?"
    value={`teste${Math.trunc(Math.random() * 10000)}`}
    required
  />
  <Input
    label="E-mail"
    name="email"
    type="email"
    placeholder="exemplo@email.com"
    value={`teste${Math.trunc(Math.random() * 10000)}@gmail.com`}
    required
  />
  <Input
    label="Password"
    type="password"
    name="password"
    placeholder="••••••••••••••"
    value={`teste${Math.trunc(Math.random() * 10000)}`}
    required
  />
  <div class="btn-wrapper">
    <Button on:click={() => goto("/signin")} type="button"
      >Já tenho uma conta</Button
    >
    <Button on:click={() => console.log("oi")}>Avançar</Button>
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
