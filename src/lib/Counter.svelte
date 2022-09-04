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
<p><span class="option">{option}</span> : votos {count}</p>

<button class="decrement" on:click={decrement}> - </button>

<button class="increment" on:click={increment}> + </button>

<style>
  .option {
    font-weight: bold;
  }
  .decrement {
    background-color: rgba(255, 0, 0, 0.137);
  }
  .increment {
    background-color: rgba(0, 128, 0, 0.137);
  }
</style>
