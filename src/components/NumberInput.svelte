<script>
  export let value = 0;
  export let min = 0;
  export let max = 255;
  export let fgColor;

  function handleFocus(e) {
    if (e.target.valueAsNumber === 0) value = '';
  }

  function handleBlur(e) {
    if (e.target.value === '') value = 0;
  }
</script>

<div class="number-input">
  <input class="{fgColor}" type="number" bind:value="{ value }" on:focus={handleFocus} on:blur={handleBlur} min="{ min }" max="{ max }" />
</div>

<style>
  .number-input {
    display: flex;
    flex-direction: column;
  }

  input {
    background: none;
    border: none;
    font-size: 1.4rem;
    border-bottom: .125rem solid #fff;
    transition: color .2s ease-out, border .2s ease-out;
  }
  input:focus {
    outline: none;
    background-color: var(--input-background--focus);
  }

  input.light {
    color: #fff;
    border-color: #fff;
  }
  input.dark {
    color: #515151;
    border-color: #515151;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>