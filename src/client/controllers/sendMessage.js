
import { stream } from 'jsonmvc'

module.exports = {
  args: {
    cooldown: '/config/app/cooldown',
    userUid: '/user/new/uid',
    toSend: '/messages/toSend'
  },
  fn: stream
    .filter((args, lib) => {
      let sent = lib.get('/messages/sent')

      return args.toSend
        && args.toSend.timestamp !== sent.timestamp
        && (!sent.timestamp || lib.get('/time/ms') > sent.timestamp + args.cooldown)
    })
    .map((args, lib) => ([{
        op: 'add',
        path: '/forms/data/message/new',
        value: {
          createdAt: {
            timestamp: args.toSend.timestamp,
            value: args.toSend.timestamp,
          },
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
      }, {
        op: 'add',
        path: '/messages/sent',
        value: {
          timestamp: args.toSend.timestamp,
          value: args.toSend.value
        }
      }]))
}

