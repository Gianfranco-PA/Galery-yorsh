import { BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs'

interface params {
  className?:string
  type: string
}

const Contacto = ({className, type }: params) => {
  let icono, link
  const color = 'white',
    size = '40'
  switch (type) {
    case 'Twitter':
      icono = <BsTwitter color={color} size={size} />
      link = 'https://twitter.com/yorshcp'
      break
    case 'Instagram':
      icono = <BsInstagram color={color} size={size} />
      link = 'https://www.instagram.com/yorsh2002/'
      break
    case 'Youtube':
      icono = <BsYoutube color={color} size={size} />
      link = 'https://www.youtube.com/channel/UC2B0eSt6EwEkurCPQYJ-f6Q'
      break
  }
  return (
    <a href={link} target="_blank" rel="noreferrer noopener" className={className}>
      {icono}
    </a>
  )
}

export default Contacto
