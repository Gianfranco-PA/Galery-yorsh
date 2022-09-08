import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgLogo from '../../../resources/images/Logo.png'
import { useRouter } from 'next/router'
import Head from 'next/head'

type Props = {}

function Header({}: Props) {
  const router = useRouter()

  const isActivate = (path: string) =>
    router.pathname == path ? ' activate' : ''
  const titleForURL = () => {
    switch (router.pathname) {
      case '/':
        return 'Inicio'
      case '/comisiones':
        return 'Comisiones'
      case '/dibujos':
        return 'Dibujos'
    }
  }

  return (
    <>
      <Head>
        <title>{titleForURL()}</title>
        <link rel="shortcut icon" href="/LogoFavi.png" />
      </Head>
      <div className="contenedor">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={imgLogo} alt="Logo" width={108} height={100} />
            </a>
          </Link>
        </div>
        <div className="links">
          <Link className="separador" href="/">
            <a className={'text-link' + isActivate('/')}>Inicio</a>
          </Link>
          <Link className="separador" href="/comisiones">
            <a className={'text-link' + isActivate('/comisiones')}>
              Comisiones
            </a>
          </Link>
          <Link className="separador" href="/dibujos">
            <a className={'text-link' + isActivate('/dibujos')}>Dibujos</a>
          </Link>
        </div>
        <style jsx>{`
          .contenedor {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: grid;
            grid-template-columns: 100px auto;
          }
          .links {
            display: flex;
            flex-direction: row;
            justify-content: right;
            align-items: center;
            font-size: 2em;
          }
          .text-link {
            text-decoration: none;
            color: white;
            margin-left: 15px;
            margin-right: 15px;
            opacity: 0.8;
          }
          .text-link:hover {
            opacity: 1;
          }
          .activate {
            font-weight: 500;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  )
}

export default Header
