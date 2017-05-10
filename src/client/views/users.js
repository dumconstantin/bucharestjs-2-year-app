
module.exports = {
  name: 'users',
  args: {
    users: '/data/users'
  },
  template: pug `
.users

  .user(v-for="user in users")
    .name {{ user.name }}
    img.pic(:src="user.pic")
    .say {{ user.say }}

  `
}

