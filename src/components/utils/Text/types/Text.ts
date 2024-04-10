export type TextProps = {
  message: string;
  type: keyof typeof ElementType;
  styles?: {
    className?: string;
  };
  children?: JSX.Element;
}

enum ElementType {
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
  HEADING_4 = 'h4',
  HEADING_5 = 'h5',
  PARAGRAPH = 'p',
  SPAN = 'span'
}