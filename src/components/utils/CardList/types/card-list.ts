export type CardListProps = {
  title?: string;
  list: typeList[];
}

type typeList = {
  name: string,
  item: string | JSX.Element
}