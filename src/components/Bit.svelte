<script>
  export let state = false;
</script>

<div class="bit bit--{state ? 'on' : 'off'}">
  <!-- <pre>
    { JSON.stringify(state) }
  </pre> -->
</div>

<style>
  .bit {
    width: 2rem;
    margin: 0 1rem;
    background-color: black;
  }

  .bit--on {
    height: 6rem;
    border-radius: 1rem;
  }

  .bit--off {
    height: 2rem;
    border-radius: 50%;
  }
</style>