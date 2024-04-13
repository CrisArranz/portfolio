export type CardProps = {
  title: string;
  type: string;
  description: string;
  tags?: string[];
  urls?: typeUrl[];
}

type typeUrl = {
  title: string;
  url: string;
}