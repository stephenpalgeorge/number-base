<script>
  // import helper functions
  import { binaryToDecimal, renderAsByte, toBase } from '../lib';

  // import child components
  import Bit from './Bit.svelte';

  export let decimalValue = 0;
  export let bgColor;
  $: binaryValue = toBase(decimalValue, 2);
  $: byteValue = renderAsByte(binaryValue);

  function handleBitClick({ detail }) {
    const byteArray = byteValue.split('');
    byteArray[detail.index] = byteArray[detail.index] === '1' ? '0' : '1';
    byteValue = byteArray.join('');

    decimalValue = binaryToDecimal(byteValue);
  }
</script>

<section>
  {#each byteValue as bit, i}
    <Bit on:bitClick={handleBitClick} state={bit === '1'} index={i} borderColor={bgColor} />
  {/each}
</section>

<style>
  section {
    display: flex;
    align-items: flex-end;
    height: 6rem;
    margin-top: -4rem;
  }
</style>