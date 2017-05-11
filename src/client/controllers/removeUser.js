
import { stream, observer } from 'jsonmvc'

module.exports = {
  args: {
    data: '/config'
  },
  fn: stream
    .chain((args, lib) => observer(o => {

      window.addEventListener("beforeunload", function (e) {
        firebase.database().ref('/bar/users/' + lib.get('/user/new/uid')).remove()
      })

    }))
}

