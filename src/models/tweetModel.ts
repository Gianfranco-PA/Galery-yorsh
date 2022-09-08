import { Schema, model, models } from 'mongoose'

const TweetSchema = new Schema({
  _type: { type: 'string' },
  url: { type: 'string' },
  date: { type: 'string' },
  content: { type: 'string' },
  renderedContent: { type: 'string' },
  id: { type: 'number' },
  user: {
    type: 'object',
    properties: {
      _type: { type: 'string' },
      username: { type: 'string' },
      id: { type: 'number' },
      displayname: { type: 'string' },
      description: { type: 'string' },
      rawDescription: { type: 'string' },
      descriptionUrls: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            text: { type: 'string' },
            url: { type: 'string' },
            tcourl: { type: 'string' },
            indices: { type: 'array', items: { type: 'number' } },
          },
        },
      },
      verified: { type: 'boolean' },
      created: { type: 'string' },
      followersCount: { type: 'number' },
      friendsCount: { type: 'number' },
      statusesCount: { type: 'number' },
      favouritesCount: { type: 'number' },
      listedCount: { type: 'number' },
      mediaCount: { type: 'number' },
      location: { type: 'string' },
      protected: { type: 'boolean' },
      linkUrl: { type: 'string' },
      linkTcourl: { type: 'string' },
      profileImageUrl: { type: 'string' },
      profileBannerUrl: { type: 'string' },
      label: { type: 'string' },
      url: { type: 'string' },
    },
  },
  replyCount: { type: 'number' },
  retweetCount: { type: 'number' },
  likeCount: { type: 'number' },
  quoteCount: { type: 'number' },
  conversationId: { type: 'number' },
  lang: { type: 'string' },
  source: { type: 'string' },
  sourceUrl: { type: 'string' },
  sourceLabel: { type: 'string' },
  outlinks: { type: 'string' },
  tcooutlinks: { type: 'string' },
  media: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        _type: { type: 'string' },
        previewUrl: { type: 'string' },
        fullUrl: { type: 'string' },
      },
    },
  },
  retweetedTweet: { type: 'array' },
  quotedTweet: { type: 'array' },
  inReplyToTweetId: { type: 'number' },
  inReplyToUser: { type: 'array' },
  mentionedUsers: { type: 'array' },
  coordinates: { type: 'array' },
  place: { type: 'string' },
  hashtags: { type: 'array', items: { type: 'string' } },
  cashtags: { type: 'array' },
})

const Tweet = models.Tweet || model('Tweet', TweetSchema)

export default Tweet
