
module.exports = {
  name: 'greeting',
  args: {
    showGreeting: '/showGreeting'
  },
  template: pug `
.greeting(v-if="showGreeting")
  h1
    | Asteptam sa mai intre cateva persone...
    br
    span(style="width:42px; height:42px", class="preloader preloader-white")

  `
}
