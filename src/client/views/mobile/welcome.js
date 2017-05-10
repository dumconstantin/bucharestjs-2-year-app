
module.exports = {
  name: 'welcome-user',
  args: {
    user: '/user'
  },
  template: pug `
.page.page-welcomeUser(v-if="!user")

  .page-content
    h1 Salut!

    f7form.user-form(lang="ro", fields="/fields/create/user", path="/forms/data/user/new")

`
}
