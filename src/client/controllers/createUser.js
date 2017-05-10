
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

      Dom7('.view-mobile').addClass('user-created')
      Dom7('[data-field-name="name"] input').attr('disabled', 'disabled')

      return {
        op: 'add',
        path: '/user',
        value: {
          new: user
        }
      }
    })
}

