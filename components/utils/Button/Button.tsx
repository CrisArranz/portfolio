interface Props {
  url: string,
  message: string,
  className: string
}

export default function Button ({ url, message, className }: Props) {

  const handleButton = () => {
    fetch(url)
      .then(response => {
        response
          .blob()
          .then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = url;
            alink.click();
          })
      })
  }

  return (
    <a className={className} onClick={handleButton}>{message}</a>
  )
}