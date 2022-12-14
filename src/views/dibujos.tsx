import { useState } from 'react'
import Header from '../../src/components/header/header'
import InImage from '../../src/components/imageText/inImage'
import imgPrincipal from '../../resources/images/Dibujo-TituloM1440.jpg'
import ListImage from '../components/listImage/listImage'
import Tweet from '../models/tweet'
import ModalSimple from '../components/modal/modalSimple'
import Footer from '../components/footer/footer'

type Props = { tweets: Array<Tweet> }
const Dibujos = ({ tweets }: Props) => {
  const [data, setData] = useState(tweets)
  const [openModal, setOpenModal] = useState(false)
  const [imagen, setImagen] = useState('')

  const modalActivator = (value: boolean, link: string) => {
    setOpenModal(value)
    setImagen(link)
  }
  return (
    <div className="body">
      <Header />
      <InImage
        src={imgPrincipal}
        alt="Imagen principal"
        gradeTop="25%"
        priority
        initOpacity="0.5"
      >
        <p className="tituloPrincipal">Dibujos</p>
      </InImage>
      <br />
      <br />
      <ListImage data={data} open={openModal} setOpen={modalActivator} />
      <ModalSimple link={imagen} open={openModal} setOpen={setOpenModal} />
      <Footer />
      <style jsx>{`
        .tituloPrincipal {
          font-size: 4em;
          text-align: center;
          font-weight: 500;
          user-select: none;
        }
      `}</style>
    </div>
  )
}

export default Dibujos
