<script>
  export let borderColor;
  export let state = false;
</script>

<div style="border: .125rem solid {borderColor};" class="bit bit--{state ? 'on' : 'off'}">
  <!-- <pre>
    { JSON.stringify(state) }
  </pre> -->
</div>

<style>
  .bit {
    width: 2rem;
    margin: 0 1rem;
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
</style>