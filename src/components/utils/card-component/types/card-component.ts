export type CardProps = {
  title: string;
  type: string[];
  image: typeImage,
  description: string;
  tags?: string[];
  urls?: typeUrl[];
}

type typeUrl = {
  title: string;
  url: string;
}

type typeImage = {
  src: string;
  alt?: string;
}