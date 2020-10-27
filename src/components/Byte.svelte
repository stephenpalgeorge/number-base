<script>
  import { toBase } from '../lib';

  export let decimalValue = 0;
  $: binaryValue = toBase(decimalValue, 2);
  $: console.log(binaryValue);
</script>

<section>

</section>