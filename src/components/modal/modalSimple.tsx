import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import FillImage from '../listImage/fillImage'

type changeOpen = { (value: boolean): void }
interface paramsModalSimple {
  link: string
  open: boolean
  setOpen: changeOpen
}

function ModalSimple({ link, open = false, setOpen }: paramsModalSimple) {
  if (!open) {
    return <></>
  }

  return (
    <div className="overlay">
      <div className="contenedorExterior">
        <div className="botonCerrar">
          <IoClose size={35} color="white" onClick={(e) => setOpen(!open)} cursor="pointer" />
        </div>
        <div className="contenido">
          <FillImage src={link} alt="Imagen en grande" height="100%" />
        </div>
      </div>
      <style jsx>{`
        .overlay {
          z-index: 2;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contenedorExterior {
          width: 95vw;
          height: 95vh;
          background: rgba(0, 0, 0, 0.5);
          position: relative;
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 35px auto;
        }
        .botonCerrar {
          display: flex;
          flex-direction: row-reverse;
        }
        .contenido {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default ModalSimple
