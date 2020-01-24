import { action } from "@storybook/addon-actions"
import { ChevronDoubleLeft, Close, Fingerprint, Paw, Refresh } from "../src"
import { navy, red } from "./colors"

import SimpleRadio from "./SimpleRadio.svelte"
import SimpleRadio2 from "./SimpleRadio2.svelte"

const IconSuite = {
  title: "Icons (s4e-icons)"
}

const hex = navy
const size = 24

const props = {
  hex,
  size
}

const ChevronIcon = () => ({
  Component: ChevronDoubleLeft,
  props
})
const CloseIcon = () => ({
  Component: Close,
  props
})
const FingerprintIcon = () => ({
  Component: Fingerprint,
  props
})
const PawIcon = () => ({
  Component: Paw,
  props
})
const RadioIcon = () => ({
  Component: SimpleRadio,
  props,
  on: {
    click: action("clicked")
  }
})
const Radio2Icon = () => ({
  Component: SimpleRadio2,
  props,
  on: {
    click: action("clicked")
  }
})
const RefreshIcon = () => ({
  Component: Refresh,
  props
})

export {
  ChevronIcon,
  CloseIcon,
  FingerprintIcon,
  PawIcon,
  RadioIcon,
  Radio2Icon,
  RefreshIcon
}
export default IconSuite
