<script>
  import { onMount } from 'svelte';

  export let position = 'relative';
  export let placement = { top: 0, left: 0 };

  let row;

  onMount(() => {
    if (position === 'fixed') {
      for (const [prop, val] of Object.entries(placement)) {
        row.style.setProperty(prop, val);
      }
    }
  });
</script>

<div bind:this={row} class="{`layout-row layout-row--${position}`}">
  <slot></slot>
</div>

<style>
  .layout-row {
    display: flex;
  }

  .layout-row--relative {
    position: relative;
  }

  .layout-row--fixed {
    position: fixed;
  }
</style>