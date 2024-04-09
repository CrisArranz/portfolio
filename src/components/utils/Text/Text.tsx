import React from "react"
import { TextProps } from "./types/Text"

export const Text: React.FC<TextProps> = ({ message, styles }) => {
  return <p className={styles?.className}>{message}</p>
}