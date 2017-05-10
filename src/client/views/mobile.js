
module.exports = {
  name: 'mobile',
  args: {
    no: ''
  },
  template: pug `
.mobile

  p Mobile

  f7form.user-form(lang="ro", fields="/fields/create/user", path="/forms/data/user/new")

  `
}
