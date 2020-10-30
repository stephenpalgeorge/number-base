<script>
  // import helper functions
  import { renderAsByte, toBase } from '../lib';

  // import child components
  import Bit from './Bit.svelte';

  export let decimalValue = 0;
  $: binaryValue = toBase(decimalValue, 2);
  $: byteValue = renderAsByte(binaryValue);
</script>

<section>
  {#each byteValue as bit}
    <Bit state={bit === '1'} />
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