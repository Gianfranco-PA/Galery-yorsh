import Image, { ImageProps } from 'next/image'

function FillImage({ src, alt, height, style }: ImageProps) {
  return (
    <div className="contenedorImagen">
      <Image
        src={src}
        layout="fill"
        objectFit="contain"
        alt={alt}
        style={style}
      />
      <style jsx>{`
        .contenedorImagen {
          width: 100%;
          height: ${height};
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default FillImage
