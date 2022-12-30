interface Props {
  url: string,
  message: string,
  className: string
}

export default function Button ({ url, message, className }: Props) {
  return (
    <a className={className} href={url}>{message}</a>
  )
}