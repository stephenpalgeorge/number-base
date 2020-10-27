<script>
  import Byte from './components/Byte.svelte';
  import NumberInput from './components/NumberInput.svelte';

  let decimalValue = 127;
</script>

<main>
  <Byte bind:decimalValue={decimalValue} />
  <NumberInput bind:value={decimalValue} />
</main>

<style>
  main {
    padding-top: 4rem;
  }
</style>