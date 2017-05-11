
module.exports = {
  path: '/messages/recent',
  args: {
    cooldown: '/config/app/cooldown',
    sentAt: '/messages/sent/timestamp',
    time: '/time/ms'
  },
  fn: args => {
    if (!args.sentAt) {
      return false
    }

    let ref = args.sentAt + args.cooldown
    if (args.time < ref) {
      return Math.round((ref - args.time) / 1000)
    } else {
      return false
    }
  }

}
