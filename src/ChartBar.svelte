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
    <path d="M22 21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" />
  </g>
  <path d="M0 0h24v24H0z" fill="none" />
</svg>
