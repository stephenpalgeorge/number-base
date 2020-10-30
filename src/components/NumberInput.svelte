<script>
  export let value = 0;
  export let min = 0;
  export let max = 255;

  let warning = "";
  
  function validateInput(e) {
    if (e.target.value > 255) {
      value = 255;
      warning = "number cannot be more than 255.";
    } else {
      warning = "";
    }
  }
</script>

<div class="number-input">
  <input type="number" on:input={validateInput} bind:value="{ value }" min="{ min }" max="{ max }" />
  {#if warning.length > 0}
    <span class="warning">{ warning }</span>
  {/if}
</div>

<style>
  .number-input {
    display: flex;
    flex-direction: column;
  }

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

  span.warning {
    font-style: italic;
    color: #fff;
  }
</style>