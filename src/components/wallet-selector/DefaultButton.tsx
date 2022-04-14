import React from "react"
import { DefaultButtonComponentProps } from "../../types"

export function DefaultButton(props: DefaultButtonComponentProps) {
  return (
    <button
      className="ws-px-4 ws-py-2 ws-text-sm ws-font-medium ws-text-white ws-bg-black ws-rounded-md ws-bg-opacity-100 ws-hover:bg-opacity-75 ws-focus:outline-none ws-focus-visible:ring-2 ws-focus-visible:ring-white ws-focus-visible:ring-opacity-75"
      type="button"
      {...props}
    >
      Connect wallet
    </button>
  )
}
