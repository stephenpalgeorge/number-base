<script>
  export let action = () => console.warn('you must provide an action');
  export let isDisabled = false;
</script>

<button disabled={isDisabled} on:click={action}>
  <slot></slot>
</button>

<style>
  button {
    height: 6rem;
    width: fit-content;
    /* weird css hack, does 50% of the short side */
    border-bottom-left-radius: 999px;
    border-bottom-right-radius: 999px;

    margin-right: 1rem;
    padding: .5rem;
    background: none;
    border: .125rem solid #fff;
    border-top-width: 0;
    color: #fff;
    box-shadow: 0 .25rem .5rem .125rem rgba(0, 0, 0, .24);
    cursor: pointer;

    transition: background .2s ease-out,
                box-shadow .2s ease-out,
                color .2s ease-out,
                height .2s ease-out;
  }

  button:hover,
  button:focus {
    outline: none;
    box-shadow: 0 .4rem .8rem .25rem rgba(0, 0, 0, .4);
    background-color: #fff;
    color: #000;
  }

  button:disabled {
    height: 4rem;
    opacity: .8;
    cursor: auto;
  }
  button:disabled:hover {
    background: none;
    color: #fff;
    box-shadow: 0 .25rem .5rem .125rem rgba(0, 0, 0, .24);
  }
</style>