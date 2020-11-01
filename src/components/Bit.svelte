<script>
  import { createEventDispatcher } from 'svelte';

  export let borderColor;
  export let index = 0;
  export let state = false;

  const dispatch = createEventDispatcher();
  function handleClick() {
    state = !state;
    dispatch('bitClick', {
      index
    });
  }
</script>

<div
  on:click={handleClick}
  style="border: .125rem solid {borderColor};"
  class="bit bit--{state ? 'on' : 'off'} bit--{index}"
></div>

<style>
  .bit {
    width: 2rem;
    margin: 0 1rem;
    cursor: pointer;
    background-color: #fff;
    box-shadow: .125rem .25rem .125rem 0 rgba(0, 0, 0, .12),
                -.125rem -.25rem .125rem 0 rgba(255, 255, 255, .12),
                inset .125rem .25rem .125rem 0 rgba(0, 0, 0, .12);

    transition: height .2s ease-out;
  }


  .bit--on {
    height: 6rem;
    border-radius: 999px;
  }

  .bit--off {
    height: 2rem;
    border-radius: 50%;
  }

  @media screen and (max-width: 736px) {
    .bit {
      width: 1.8rem;
      margin: 0 .5rem;
    }

    .bit--on {
      height: 4rem;
    }

    .bit--off {
      height: 1.8rem;
    }
  }
</style>