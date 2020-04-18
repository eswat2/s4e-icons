<script>
  export let hex = undefined
  export let size = 24
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24">
  <g fill={hex}>
    <path
      d="M3 3H21V5A2 2 0 0 0 19 7V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V7A2 2 0 0
      0 3 5V3M7 5V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H17V5H7Z" />
  </g>
  <path d="M0 0h24v24H0z" fill="none" />
</svg>
