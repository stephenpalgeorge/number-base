<script>
  import Byte from './components/Byte.svelte';
  import HexCode from './components/HexCode.svelte';
  import NumberInput from './components/NumberInput.svelte';

  let decimalValue = 0;
  let baseColor = '#FF3F';
  let bgColor = baseColor + '00';

  function setStyle({ detail }) {
    bgColor = detail.color;
  }
</script>

<main style="background: {bgColor};">
  <Byte bind:decimalValue={decimalValue} />
  <NumberInput bind:value={decimalValue} />
  <HexCode on:background={setStyle} bind:decimalValue={decimalValue} />
</main>

<style>
  main {
    padding-top: 4rem;
  }
</style>