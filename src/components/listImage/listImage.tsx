import type Tweet from '../../models/tweet'
import { getImagesTweet } from '../../utils/filtersData'
import InImageFill from '../modal/inImageFill'
import { VscZoomIn } from 'react-icons/vsc'


type changeOpen = { (value: boolean, link:string): void }
export type ParamsListImage = {
  data: Array<Tweet>
  open: boolean
  setOpen: changeOpen
}

const extractImageURL = (data: Array<Tweet>): Array<string> => {
  const urls: Array<string> = []
  data.forEach((elem) => {
    const images = getImagesTweet(elem)
    images.forEach((image) => urls.push(image))
  })
  return urls
}

function ListImage({ data, open, setOpen }: ParamsListImage) {
  const urls = extractImageURL(data)
  return (
    <div className="contenedorGaleria">
      {urls.map((elem, index) => (
        <InImageFill
          key={index}
          open={open}
          setOpen={setOpen}
          src={elem}
          alt="Imagen"
          height="450px"
          gradeTop="47%"
          enShading
          contHidden
        >
          <div style={{ textAlign: 'center' }}>
            <VscZoomIn size={30} color="white" />
          </div>
        </InImageFill>
      ))}
      <style jsx>{`
        .contenedorGaleria {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          padding-left: 20px;
          padding-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default ListImage
