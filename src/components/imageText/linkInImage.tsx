import Link from 'next/link'
import React from 'react'
import InImage, { paramsInImage } from './inImage'

interface paramsLinkInImage extends paramsInImage {
  href: string
}

function LinkInImage({
  href,
  src,
  alt,
  gradeTop,
  initOpacity = '1',
  transOpacity = '0.5',
  enShading = false,
  priority = false,
  contHidden = false,
  children,
}: paramsLinkInImage) {
  return (
    <Link href={href}>
      <a style={{ textDecoration: 'none', color: 'inherit' }}>
        <InImage
          src={src}
          alt={alt}
          gradeTop={gradeTop}
          initOpacity={initOpacity}
          transOpacity={transOpacity}
          enShading={enShading}
          priority={priority}
          contHidden={contHidden}
        >
          {children}
        </InImage>
      </a>
    </Link>
  )
}

export default LinkInImage
