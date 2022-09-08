// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Tweet from '../../src/models/tweetModel'
import { dbConnect } from '../../src/utils/mongo'

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      const all = await Tweet.find()
      return res.status(200).json(all)
    default:
      return res.status(400).json({ msg: 'Este metodo no esta implementado' })
  }
}
