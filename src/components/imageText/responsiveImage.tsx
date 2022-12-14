import Image, { ImageProps } from 'next/image'

function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  style,
}: ImageProps) {
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        priority={priority}
        style={style}
      />
    )
  } else {
    return (
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        priority={priority}
        style={style}
      />
    )
  }
}

export default ResponsiveImage
