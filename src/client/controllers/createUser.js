
import { stream } from 'jsonmvc'
import shortId from 'shortid'

module.exports = {
  args: {
    data: '/forms/submit/user/new'
  },
  fn: stream
    .filter(args => !!args.data)
    .map(args => {
      let user = args.data

      user.uid = shortId.generate()
      user.value.uid = user.uid

      return {
        op: 'add',
        path: '/user',
        value: {
          new: user
        }
      }
    })
}

