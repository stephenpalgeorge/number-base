<script>
  import { fly } from 'svelte/transition';
  export let showPanel = false;
</script>

<aside transition:fly={{ duration: 200, x: 100, opacity: 0 }} class="panel">
  {#if showPanel}
    <div class="overlay"></div>
  {/if}
  <button class="close-panel" on:click={() => showPanel = !showPanel}>
    <div class="close-panel--h"></div>
    <div class="close-panel--v"></div>
  </button>
  <h2>Interact by:</h2>
  <ul>
    <li>Pressing <pre>space</pre> to start/pause the count.</li>
    <li>Pressing <pre>escape</pre> to reset the value to 0.</li>
    <li>Clicking on any of the individual 'bits' to toggle them between 0 - 1.</li>
    <li>Typing a decimal value in the number input towards the bottom left of the visualisation. Things will start breaking if you put in a value > 255</li>
    <li>Typing a hex value in the underlined section towards the bottom right of the visualisation. This will change the 'base' color of the background. Things will start breaking if you use anything other than 0-9, A-F</li>
  </ul>
</aside>

<style>
  aside {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 90vw;
    max-width: 32rem;

    padding: 2rem;

    background-color: #FFF;
    color: #000;
    box-shadow: -.25rem 0 .5rem 0 rgba(0, 0, 0, .4);

    z-index: 10;
    overflow: scroll;
  }

  button.close-panel {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;
    transform: rotate(45deg);

    z-index: 4;
  }
  button.close-panel:focus {
    outline: none;
  }

  .close-panel--v,
  .close-panel--h {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 20%;
    background-color: #000;
    border-radius: .125rem;
  }
  .close-panel--v {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  ul {
    margin-top: 2rem;
    list-style-type: none;
  }
  li {
    margin-bottom: 1rem;
    font-weight: 300;
    line-height: 2;
  }

  pre {
    display: inline;
    margin: 0 .5rem;
    padding: 0 .5rem;
    background-color: #d5d5d5;
  }
</style>