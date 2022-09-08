import type { NextApiRequest, NextApiResponse } from 'next'
import Tweet from '../../src/models/tweetModel'
import { dbConnect } from '../../src/utils/mongo'

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const {
    method,
    query: { id },
  } = req
  switch (method) {
    case 'GET':
      const one = await Tweet.findById(id)
      if (!one) return res.status(404).json({ msg: 'No se encontro el Tweet' })
      return res.status(200).json(one)
    default:
      return res.status(400).json({ msg: 'Este metodo no esta implementado' })
  }
}
