<script>
  import { createEventDispatcher } from "svelte"
  import { Radio2 } from "../src"

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
  <Radio2 {hex} {size} {selected} />
</div>
