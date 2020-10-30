<script>
  export let value = 0;
  export let min = 0;
  export let max = 255;
</script>

<div class="number-input">
  <input type="number" bind:value="{ value }" min="{ min }" max="{ max }" />
</div>

<style>
  input {
    color: #fff;
    background: none;
    border: none;
    font-size: 1.4rem;
    border-bottom: .125rem solid #fff;
  }
  input:focus {
    outline: none;
    background-color: var(--input-background--focus);
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