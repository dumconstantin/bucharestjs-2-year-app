
import { stream } from 'jsonmvc'

module.exports = {
  args: {
    sent: '/messages/sent'
  },
  fn: stream
    .filter(args => !!args.sent)
    .map(args => args.sent.value)
    .map((x, lib) => ({
      op: 'add',
      path: '/messages/sentCount/' + x,
      value: lib.get('/messages/sentCount/' + x) + 1
    }))
}

