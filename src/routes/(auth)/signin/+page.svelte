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
    <a href="/signup">
      <Button type="button">Não tenho uma conta</Button>
    </a>
    <Button>Entrar</Button>
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
