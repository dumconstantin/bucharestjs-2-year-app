
import { stream } from 'jsonmvc'

module.exports = {
  args: {
    sent: '/forms/submit/message/new'
  },
  fn: stream
    .filter(args => !!args.sent)
    .map(args => args.sent.value.message)
    .map((x, lib) => ({
      op: 'add',
      path: '/messages/sentCount/' + x,
      value: lib.get('/messages/sentCount/' + x) + 1
    }))
}

