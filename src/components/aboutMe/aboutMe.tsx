import Image from 'next/image'
import imgMonigote from '../../../resources/images/Monigote.png'
function AboutMe() {
  return (
    <div className="contenedor">
      <div className="imagen-contenedor">
        <Image
          src={imgMonigote}
          alt="Yorsh escribiendo"
          layout="responsive"
          objectFit="contain"
          style={{ borderRadius: '50%', paddingBottom: 10, paddingTop: 10 }}
        />
      </div>
      <div className="texto-contenedor">
        <p className="texto-recurso">
          Hola, me llamo Jorge!
          <br />
          Tengo 20 años. Soy un dibujante profesional.
          <br />
          Dibujar es mi pasion, me encanta,tambien me gusta jugar videojuegos
        </p>
      </div>
      <style jsx>{`
        .contenedor {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .imagen-contenedor {
          width: 500px;
        }
        .texto-contenedor {
          width: 50%;
          display: flex;
        }
        .texto-recurso {
          text-align: center;
          font-size: 1.5em;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default AboutMe
