<script>
  import { createEventDispatcher } from "svelte"
  import { Radio } from "../src"

  export let hex = undefined
  export let size = undefined
  let selected = false

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    selected = !selected
    dispatch("click", { hex, size, selected })
  }
</script>

<div on:click={handleClick}>
  <Radio {hex} {size} {selected} />
</div>
