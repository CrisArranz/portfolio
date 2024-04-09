export type CardProps = {
  message?: string;
  list: typeList[];
}

type typeList = {
  type: keyof typeof types,
  items: string[]
}

enum types {
  TEXTS = "TEXTS",
  IMAGES = "IMAGES"
}