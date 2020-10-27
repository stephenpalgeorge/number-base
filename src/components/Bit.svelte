<script>
  export let state = false;
</script>

<div class="bit bit--{state ? 'on' : 'off'}">
  <pre>
    { JSON.stringify(state) }
  </pre>
</div>