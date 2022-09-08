import { ImageProps } from 'next/image'
import { useRef } from 'react'
import FillImage from '../listImage/fillImage'

type changeOpen = { (value: boolean, link: string): void }
export interface paramsInImage extends ImageProps {
  gradeTop: string
  open: boolean
  setOpen: changeOpen
  initOpacity?: string
  transOpacity?: string
  enShading?: boolean
  contHidden?: boolean
  children: React.ReactNode
}

function InImageFill({
  src,
  alt,
  gradeTop,
  height,
  open,
  setOpen,
  initOpacity = '1',
  transOpacity = '0.5',
  enShading = false,
  contHidden = false,
  children,
}: paramsInImage) {
  const divRef = useRef<HTMLDivElement>(null)
  const contRef = useRef<HTMLDivElement>(null)
  const hidden = '0'
  const shadow = transOpacity
  const sharp = initOpacity

  const editOpacityImg = (grade: string) => {
    const elemImg: HTMLImageElement = divRef.current?.firstChild
      ?.lastChild as HTMLImageElement
    elemImg.style.opacity = grade
  }
  const editOpacityCont = (grade: string) => {
    const elemDiv: HTMLDivElement = contRef.current as HTMLDivElement
    elemDiv.style.opacity = grade
  }

  const mouseIn = () => {
    if (enShading) {
      editOpacityImg(shadow)
    }
    if (contHidden) {
      editOpacityCont(sharp)
    }
  }

  const mouseOut = () => {
    if (enShading) {
      editOpacityImg(sharp)
    }
    if (contHidden) {
      editOpacityCont(hidden)
    }
  }

  return (
    <div
      className="contenedorInterior"
      onPointerEnter={mouseIn}
      onPointerLeave={mouseOut}
      ref={divRef}
      onClick={() => (setOpen ? setOpen(!open, String(src)) : null)}
    >
      <FillImage
        src={src}
        alt={alt}
        height={height}
        style={{ opacity: initOpacity }}
      />
      <div
        ref={contRef}
        className={'recursoTexto'}
        style={{ opacity: contHidden ? 0 : 1 }}
      >
        {children}
      </div>
      <style jsx>{`
        .contenedorInterior {
          width: 100%;
          position: relative;
          cursor: pointer;
        }
        .recursoTexto {
          position: absolute;
          top: ${gradeTop};
          left: 0;
          width: 100%;
        }
        .transitionOpacity {
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default InImageFill
