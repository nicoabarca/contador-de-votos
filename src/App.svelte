<script>
  import Counter from "./lib/Counter.svelte";
  let apruebo = 0;
  let rechazo = 0;
  let nulo = 0;
  let blanco = 0;
  $: total = apruebo + rechazo + nulo + blanco;
</script>

<main>
  <h1>Contador de Votos</h1>
  <h2>Votos totales: {total}</h2>
  <div class="card">
    <Counter option="Apruebo" bind:count={apruebo} />
  </div>
  <div class="card">
    <Counter option="Rechazo" bind:count={rechazo} />
  </div>
  <div class="card">
    <Counter option="Nulo" bind:count={nulo} />
  </div>
  <div class="card">
    <Counter option="Blanco" bind:count={blanco} />
  </div>
</main>
