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
    dispatch('background', {
      color: `#${baseColor}${byteValue}`
    });
  }
  $: changeBg(baseColor, byteValue);

  function handleBaseColor(e) {
    const hexValues = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'D', 'E', 'F'
    ];
    for (const c of e.target.value) {
      if (!hexValues.includes(c.toUpperCase())) console.error('This can only use numbers 0-9, and letters A-F');
    }
    if (e.target.value.length === 4) {
      dispatch('baseColor', {
        color: e.target.value
      });
    }
  }

  onMount(() => changeBg(baseColor, byteValue))
</script>

<div class="hex-code">
  <p>#<input type="text" maxlength="4" size="4" value={baseColor} on:input={handleBaseColor} />{byteValue.toUpperCase()}</p>
</div>

<style>
  p {
    color: #fff;
    font-size: 1.4rem;
  }

  input {
    color: inherit;
    font-size: inherit;
    background: none;
    border: none;
    width: fit-content;
    text-decoration: underline;
  }
  input:focus {
    background-color: var(--input-background--focus);
    outline: none;
  }
</style>