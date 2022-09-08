import { GetServerSideProps, NextPage } from 'next'
import Tweet from '../../src/models/tweet'
import Comisiones from '../../src/views/comisiones'
import { commissionFilter } from '../../src/utils/filtersData'
import Dibujos from '../../src/views/dibujos'
import consumeInternalAPI from '../../src/utils/internalAPI'

type Props = { tweets: Array<Tweet> }
const DibujosPage: NextPage<Props> = ({ tweets }) => {
  return <Dibujos tweets={tweets} />
}
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await consumeInternalAPI('drawing')
  const json = JSON.stringify(data)
  return {
    props: {
      tweets: JSON.parse(json),
    },
  }
}

export default DibujosPage
