
module.exports = {
  path: '/showGreeting',
  args: {
    show: '/app/showGreeting/value',
    user: '/user/new'
  },
  fn: args => args.show !== false && args.user
}
