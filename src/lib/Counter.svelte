<script>
  export let option;
  export let count = 0;
  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    if (count > 0) {
      count -= 1;
    }
  };
</script>

<button on:click={decrement}> - </button>

<button on:click={increment}> + </button>

<p><span class="option">{option}</span> : votos {count}</p>

<style>
  .option {
    font-weight: bold;
  }
</style>
