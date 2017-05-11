
module.exports = {
  name: 'mobile',
  args: {
    no: ''
  },
  template: pug `
.views.mobile
  .view.view-mobile
    .pages
      welcome-user
      send-message

  `
}
