<script asscript lang="ts">
  import { Input, Button } from "$lib/components";
  import Form from "../components/Form.svelte";
  import {goto} from "$app/navigation";
</script>

<Form action="?/signup" method="POST">
  <h2>Cadastre-se.</h2>
  <Input
    label="Nome de usuário"
    name="username"
    placeholder="Como deseja ser chamado?"
    required
  />
  <Input
    label="E-mail"
    name="email"
    type="email"
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
    <Button label="Login" on:click={() => goto("/auth/signin")} type="button"/>
    <Button label="Avançar" />
  </div>
</Form>

<style lang="scss">
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>
