import React from "react"
import { DefaultButtonComponentProps } from "../../types"

export function DefaultButton(props: DefaultButtonComponentProps) {
  return (
    <button
      type="button"
      className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-100 hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      {...props}
    >
      Connect wallet
    </button>
  )
}
