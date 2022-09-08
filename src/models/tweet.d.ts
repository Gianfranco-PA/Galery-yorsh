interface DescriptionUrls {
  text: string
  url: string
  tcourl: string
  indices: Array<number>
}
interface User {
  _type: string
  username: string
  id: number
  displayname: string
  description: string
  rawDescription: string
  descriptionUrls: Array<DescriptionUrls>
  verified: Boolean
  created: string
  followersCount: number
  friendsCount: number
  statusesCount: number
  favouritesCount: number
  listedCount: number
  mediaCount: number
  location: string
  protected: Boolean
  linkUrl: string
  linkTcourl: string
  profileImageUrl: string
  profileBannerUrl: string
  label: string
  url: string
}
interface Media {
  _type: string
  previewUrl: string
  fullUrl: string
}

export default interface Tweet {
  _type: string
  url: string
  date: string
  content: string
  renderedContent: string
  id: number
  user: User
  replyCount: number
  retweetCount: number
  likeCount: number
  quoteCount: number
  conversationId: number
  lang: string
  source: string
  sourceUrl: string
  sourceLabel: string
  outlinks: string
  tcooutlinks: string
  media: Array<Media>
  retweetedTweet: Array<Any>
  quotedTweet: Array<Any>
  inReplyToTweetId: number
  inReplyToUser: Array<Any>
  mentionedUsers: Array<Any>
  coordinates: Array<Any>
  place: string
  hashtags: Array<string>
  cashtags: Array<Any>
}
