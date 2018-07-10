'use strict'
const authEvents = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#add-recipe').on('submit', authEvents.onCreateRecipe)
  $('#recipe-show').on('click', authEvents.onGetRecipe)
  $('.showRecipes').on('click', '.delete-button', authEvents.onDeleteRecipe)
  $('.showRecipes').on('submit', '.edit-recipe', authEvents.onEditRecipe)
  //show/hide edit
  $('.showRecipes').on('click', '.edit-button', function () {
    let id = $(this).attr('data-id')
    $('[data-id="edit' + id + '"]').removeClass('collapsed')
  })
  $('.showRecipes').on('click', '.no-edit', function () {
    let id = $(this).attr('data-id')
    $('[data-id=edit' + id + ']').addClass('collapsed')
  })
})
