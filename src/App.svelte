<script>
  import { onDestroy, onMount } from 'svelte';
  
  import { getForegroundColour } from './lib';

  import Byte from './components/Byte.svelte';
  import ControlButton from './components/ControlButton.svelte';
  import HexCode from './components/HexCode.svelte';
  import LayoutRow from './components/LayoutRow.svelte';
  import NumberInput from './components/NumberInput.svelte';
  import Panel from './components/Panel.svelte';

  let decimalValue = 0;
  let baseColor = 'FF3F';
  let bgColor = '#' + baseColor + '00';
  $: fgColor = getForegroundColour(bgColor.replace('#', ''));

  let controlsPlacement = {
    top: 0,
    left: '2rem',
  };

  // state variables
  let isCounting = false;
  let showPanel = false;

  function setBgColor({ detail }) { bgColor = detail.color; }

  function setBaseColor({ detail }) { baseColor = detail.color; }

  let interval;
  function countUp() {
    if (decimalValue >= 255) pauseCount();
    isCounting = true;
    interval = setInterval(() => {
      if (decimalValue >= 255) {
        decimalValue = 255;
        pauseCount();
      } else {
        decimalValue++;
      }
    }, 1000);
  }

  function pauseCount() {
    isCounting = false;
    clearInterval(interval);
  }

  function reset() {
    if (isCounting) pauseCount();
    decimalValue = 0;
  }

  function handleKeyup(e) {
    if (e.keyCode === 32) isCounting ? pauseCount() : countUp();
    if (e.keyCode === 27) reset();
  }

  function shiftLeft() {
    if (decimalValue >= 128 || decimalValue === 0) return;
    decimalValue *= 2;
  }

  function shiftRight() {
    if (decimalValue < 2) return;
    decimalValue = Math.floor(decimalValue / 2);
  }

  onMount(() => document.addEventListener('keyup', handleKeyup));
  onDestroy(() => document.removeEventListener('keyup', handleKeyup));
</script>

<main style="background: {bgColor};">
  <button class="info {fgColor}" on:click={() => showPanel = !showPanel}>?</button>
  {#if showPanel}
    <div class="overlay"></div>
    <Panel bind:showPanel={showPanel} />
  {/if}

  <LayoutRow position='fixed' placement={controlsPlacement}>
    <ControlButton
      isDisabled={isCounting}
      action={countUp}
      fgColor={fgColor}
    >Count</ControlButton>
    <ControlButton
      isDisabled={!isCounting}
      action={pauseCount}
      fgColor={fgColor}
    >Pause</ControlButton>
    <ControlButton
      isDisabled={decimalValue >= 128 || decimalValue === 0 || decimalValue === ""}
      action={shiftLeft}
      fgColor={fgColor}
    >&lt;&lt;</ControlButton>
    <ControlButton
      isDisabled={decimalValue < 2}
      action={shiftRight}
      fgColor={fgColor}
    >&gt;&gt;</ControlButton>
  </LayoutRow>
  <Byte bind:decimalValue={decimalValue} bgColor={bgColor} fgColor={fgColor} />
  <div class="byte-inputs">
    <NumberInput bind:value={decimalValue} fgColor={fgColor} />
    <HexCode
      on:background={setBgColor}
      on:baseColor={setBaseColor}
      bind:decimalValue={decimalValue}
      bind:baseColor={baseColor}
      fgColor={fgColor}
    />
  </div>
</main>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    background-color: rgba(0, 0, 0, .24);
  }

  main {
    position: relative;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: background .2s ease-out;
  }

  button.info {
    position: absolute;
    top: 2rem;
    right: 4rem;
    width: 1.8rem;
    height: 1.8rem;
    background: none;
    border: .125rem solid #fff;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;

    transition: background .2s ease-out, color .2s ease-out;
  }
  button.info.light {
    color: #fff;
    border-color: #fff;
  }
  button.info.dark {
    color: #515151;
    border-color: #515151;
  }

  button.info.light:hover {
    background-color: #fff;
    color: #515151;
  }
  button.info.dark:hover {
    background-color: #515151;
    color: #fff;
  }
  button.info:focus {
    outline: none;
  }

  .byte-inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: var(--content-width);
    padding: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 736px) {
    .byte-inputs {
      padding: 1rem 2.5rem;
    }
  }
</style>