import type Tweet from '../models/tweet'

const isComission = (tweet: Tweet) => {
  const text = tweet.content.toLowerCase()
  return (
    text.includes('commission') ||
    text.includes('comision') ||
    text.includes('comisión')
  )
}

export const commissionFilter = (data: Array<Tweet>) => data.filter(isComission)
export const drawingFilter = (data: Array<Tweet>) =>
  data.filter((elem) => !isComission(elem))

export const getImagesTweet = (tweet: Tweet): Array<string> => {
  const result: Array<string> = []
  for (const iterElem of tweet.media) {
    result.push(iterElem.fullUrl)
  }
  return result
}
