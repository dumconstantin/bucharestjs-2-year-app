
module.exports = {
  name: 'messager',
  args: {
    no: ''
  },
  template: pug `
.views.messager
  .view.view-messager
    .pages
      welcome-user
      send-message

  `
}
