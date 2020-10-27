<script>
  export let value = 0;
  export let min = 0;
  export let max = 255;
</script>

<div class="number-input">
  <input type="number" bind:value="{ value }" min="{ min }" max="{ max }" />
</div>