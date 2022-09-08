import { GetServerSideProps, NextPage } from 'next'
import Tweet from '../../src/models/tweet'
import Comisiones from '../../src/views/comisiones'
import { commissionFilter } from '../../src/utils/filtersData'
import consumeInternalAPI from '../../src/utils/internalAPI'

type Props = { tweets: Array<Tweet> }
const ComisionesPage: NextPage<Props> = ({ tweets }) => {
  return <Comisiones tweets={tweets} />
}
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await consumeInternalAPI('commission')
  const json = JSON.stringify(data)
  return {
    props: {
      tweets: JSON.parse(json),
    },
  }
}

export default ComisionesPage
