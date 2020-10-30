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
    background-color: #fff;

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
</style>