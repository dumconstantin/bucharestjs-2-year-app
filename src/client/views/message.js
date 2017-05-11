
module.exports = {
  name: 'send-message',
  args: {
    user: '/user/new/value',
    messages: '/messages/data',
    count: '/messages/sentCount',
    recent: '/messages/recent',
    sentMessage: '/messages/sent/value'
  },
  template: pug `
.page.page-sendMessage(v-if="user")

  .navbar
    .navbar-inner
      .left
        img.userAvatar(:src="'images/avatar-' + user.avatar + '.png'")
      .center
      .right
        | La multi ani
        img(src="images/logo.jpg")
        | !

  div.messageSent(v-if="recent")
    p {{ messages[sentMessage] }}
    img(:src="'images/icon-' + sentMessage + '.png'")
    p {{ recent }}

  .page-content

    ul.messages
      li(v-for="(value, key) in messages", data-path="/messages/toSend", :data-value="key")
        img(:src="'images/icon-' + key + '.png'")
        p
          | x
          strong {{ count[key] }}

  `
}
