<script>
  export let hex = undefined
  export let selected = false
  export let size = 24
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24">
  <g fill={hex}>
    {#if selected}
      <path
        d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M19 3H5C3.89 3 3 3.89
        3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5C21 3.89 20.1 3 19 3Z" />
    {:else}
      <path
        d="M19 3H5C3.89 3 3 3.89 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5C21
        3.89 20.1 3 19 3M19 5V19H5V5H19Z" />
    {/if}
  </g>
  <path d="M0 0h24v24H0z" fill="none" />
</svg>
