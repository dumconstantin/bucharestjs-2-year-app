
import { stream } from 'jsonmvc'

module.exports = {
  args: {
    cooldown: '/config/app/cooldown',
    userUid: '/user/new/uid',
    toSend: '/messages/toSend',
    sentAt: '/messages/sent/new/timestamp',
    count: '/messages/sentCount'
  },
  fn: stream
    .filter((args, lib) => args.toSend
        && args.toSend.timestamp !== args.sentAt
        && (!args.sentAt || lib.get('/time/ms') > args.sentAt.timestamp + args.cooldown)
    )
    .map(args => ({
        op: 'add',
        path: '/forms/data/message/new',
        value: {
          userUid: {
            timestamp: args.toSend.timestamp,
            value: args.userUid
          },
          message: {
            timestamp: args.toSend.timestamp,
            value: args.toSend.value
          },
          submit: {
            timestamp: args.toSend.timestamp
          }
        }
      }))
}

