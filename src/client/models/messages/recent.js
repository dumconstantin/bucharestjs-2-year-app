
module.exports = {
  path: '/messages/recent',
  args: {
    cooldown: '/config/app/cooldown',
    sentAt: '/forms/submit/message/new/timestamp',
    time: '/time/ms'
  },
  fn: x => {
    if (!x.sentAt) {
      return false
    }

    let ref = x.sentAt + x.cooldown
    if (x.time < ref) {
      return Math.round((ref - x.time) / 1000)
    } else {
      return false
    }
  }

}
