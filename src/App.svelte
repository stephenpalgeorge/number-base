<script>
  import Byte from './components/Byte.svelte';
  import ControlButton from './components/ControlButton.svelte';
  import HexCode from './components/HexCode.svelte';
  import LayoutRow from './components/LayoutRow.svelte';
  import NumberInput from './components/NumberInput.svelte';

  let decimalValue = 0;
  let baseColor = 'FF3F';
  let bgColor = '#' + baseColor + '00';

  let controlsPlacement = {
    top: 0,
    left: '2rem',
  };

  // state variables
  let isCounting = false;

  function setBgColor({ detail }) {
    bgColor = detail.color;
  }

  function setBaseColor({ detail }) {
    baseColor = detail.color;
  }

  let interval;
  function countUp() {
    if (decimalValue >= 255) return;
    isCounting = true;
    interval = setInterval(() => decimalValue++, 1000);
  }

  function pauseCount() {
    isCounting = false;
    clearInterval(interval);
  }
</script>

<main style="background: {bgColor};">
  <LayoutRow position='fixed' placement={controlsPlacement}>
    <ControlButton isDisabled={isCounting} action={countUp}>
      Count
    </ControlButton>
    <ControlButton isDisabled={!isCounting} action={pauseCount}>
      Pause
    </ControlButton>
  </LayoutRow>
  <Byte bind:decimalValue={decimalValue} bgColor={bgColor} />
  <div class="byte-inputs">
    <NumberInput bind:value={decimalValue} />
    <HexCode
      on:background={setBgColor}
      on:baseColor={setBaseColor}
      bind:decimalValue={decimalValue}
      bind:baseColor={baseColor}
    />
  </div>
</main>

<style>
  main {
    padding-top: 4rem;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: background .2s ease-out;
  }

  .byte-inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: var(--content-width);
    padding: 1rem;
  }
</style>