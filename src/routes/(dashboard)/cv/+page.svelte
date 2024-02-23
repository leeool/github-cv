<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<section>
  <h1>Meus CVs</h1>
  <div class="cvs">
    {#each data.curriculums as cv}
      <a href={`/cv/${cv.id}`}>
        <div class="cv">
          <p>{cv.name}</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  .cvs {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: start;
  }

  .cv {
    background-color: #eee;
    flex: 1;
    height: 15rem;
    width: 10rem;
  }
</style>
