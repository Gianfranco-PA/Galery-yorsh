// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Tweet from '../../../src/models/tweetModel'
import { drawingFilter } from '../../../src/utils/filtersData'
import consumeInternalAPI from '../../../src/utils/internalAPI'
import { dbConnect } from '../../../src/utils/mongo'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      const result = await consumeInternalAPI('drawing')
      return res.status(200).json(result)
    default:
      return res.status(400).json({ msg: 'Este metodo no esta implementado' })
  }
}
