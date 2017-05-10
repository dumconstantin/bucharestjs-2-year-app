
module.exports = {
  name: 'join-us',
  args: {
    no: '/says/count'
  },
  template: pug `
.join-in
  p There are {{ no }} congrats so far!
  | Show your 
  i.fa.fa-heart
  span  at bitly.com

  `
}
