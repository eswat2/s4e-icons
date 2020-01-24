import { action } from "@storybook/addon-actions"
import { Fingerprint } from "../src"
import { red } from "./colors"

import SimpleRadio2 from "./SimpleRadio2.svelte"

const SampleSuite = {
  title: "Samples"
}

const AltFinger = () => ({
  Component: Fingerprint,
  props: {
    hex: red,
    size: 320
  }
})
const AltRadio = () => ({
  Component: SimpleRadio2,
  props: {
    hex: red,
    size: 200
  },
  on: {
    click: action("clicked")
  }
})

export { AltFinger, AltRadio }

export default SampleSuite
