import { NextPage } from 'next'
import AboutMe from '../components/aboutMe/aboutMe'
import Footer from '../components/footer/footer'
import InImage from '../components/imageText/inImage'
import imgPrincipal from '../../resources/images/DibujoPrincipalInicio.jpg'
import imgDibujo from '../../resources/images/DibujosM750.jpg'
import imgComision from '../../resources/images/ComisionesM750.jpg'
import LinkInImage from '../components/imageText/linkInImage'
import Header from '../components/header/header'

const Inicio = () => {
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
        <p className="tituloPrincipal">
          Y&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;H
        </p>
      </InImage>
      <AboutMe />
      <div className="contenedorLinks">
        <div className="distribucionLinks">
          <LinkInImage
            src={imgComision}
            alt="Redirreccion a Comisiones"
            gradeTop="45%"
            href="/comisiones"
            enShading
            priority
          >
            <p className="links">COMISIONES</p>
          </LinkInImage>
        </div>
        <div className="distribucionLinks">
          <LinkInImage
            src={imgDibujo}
            alt="Redirreccion a Dibujos"
            gradeTop="45%"
            href="/dibujos"
            enShading
            priority
          >
            <p className="links">DIBUJOS</p>
          </LinkInImage>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .tituloPrincipal {
          font-size: 8em;
          text-align: center;
          font-weight: 100;
          user-select: none;
        }
        .links {
          font-size: 2em;
          text-align: center;
          font-weight: 100;
          user-select: none;
        }
        .contenedorLinks {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        .distribucionLinks {
          width: 50%;
        }
      `}</style>
    </div>
  )
}

export default Inicio
