import Tweet from '../models/tweetModel'
import { commissionFilter, drawingFilter } from './filtersData'
import { dbConnect } from './mongo'

const consumeInternalAPI = async (route: string) => {
  dbConnect()
  const all = await Tweet.find()
  switch (route) {
    case 'commission':
      return commissionFilter(all)
    case 'drawing':
      return drawingFilter(all)
    default:
      return []
  }
}

export default consumeInternalAPI
