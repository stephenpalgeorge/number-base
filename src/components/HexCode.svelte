<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { toBase, renderDigits } from '../lib';

  export let baseColor = 'FF3F';
  export let decimalValue = '0';

  $: hexValue = toBase(decimalValue, 16);
  let byteValue;
  $: byteValue = renderDigits(hexValue, 2);

  const dispatch = createEventDispatcher();
  
  function changeBg(baseColor, byteValue) {
    console.log('change bg', byteValue);
    dispatch('background', {
      color: `#${baseColor}${byteValue}`
    });
  }
  $: changeBg(baseColor, byteValue);

  onMount(() => changeBg(baseColor, byteValue))
</script>

<div class="hex-code">
  <p>#{baseColor}{byteValue}</p>
</div>