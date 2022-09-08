import Contacto from './contacto'

const Footer = () => {
  return (
    <div className="links-contacs">
      <Contacto className="contact" type="Youtube" />
      <Contacto className="contact" type="Twitter" />
      <Contacto className="contact" type="Instagram" />
      <style jsx global>{`
        .links-contacs {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .contact {
          margin-left: 15px;
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}

export default Footer
