import React from "react"
import { TextProps } from "./types/text-component"

export const Text: React.FC<TextProps> = ({ message, styles, children,type }) => {
  switch (type) {
    case 'PARAGRAPH':
      return <p className={styles?.className}>{message ?? ''}{children}</p>;
    case 'HEADING_1':
      return <h1 className={styles?.className}>{message ?? ''}{children}</h1>;
    case 'HEADING_2':
      return <h2 className={styles?.className}>{message ?? ''}{children}</h2>;
    case 'HEADING_3':
      return <h3 className={styles?.className}>{message ?? ''}{children}</h3>;
    case 'HEADING_4':
      return <h4 className={styles?.className}>{message ?? ''}{children}</h4>;
    case 'HEADING_5':
      return <h5 className={styles?.className}>{message ?? ''}{children}</h5>;
    case 'SPAN':
      return <span className={styles?.className}>{message ?? ''}{children}</span>;
    default:
      return <>{children}</>;
  }
  
}