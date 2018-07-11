'use strict'
const recipeList = require('./templates/recipe-listing.handlebars')
const api = require('./api')

const signUpSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert fade alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed up! Sign in!
    </div>
    `)
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const signUpError = function (error) {
  $('#errorSU').html(`
    <div class= "alert alert-danger alert-dismissable fade-in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error signing up. Please check fields for errors. #{error}
    </div>
    `)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      You Signed In!
    </div>
    `)
  $("#show-recipes").html()
  $('#sign-in-form').trigger('reset')
  $('#signInModal').modal('hide')
  signedInState()
}

const signedInState = function () {
  $('#signed-in-body').removeClass('collapsed')
  $('#recipe-show').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-up, #sign-in').addClass('hidden')
  $('#welcome-message').addClass('collapsed')
  $('#welcome-message').addClass('hidden')
  $('#head').removeClass('hidden')
}

const signInError = function (error) {
  $('#errorSI').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error Signing in.
    </div>
    `, error)
    $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Password Changed!
    </div>
    `)
    $('#change-password-form').trigger('reset')
    $('#changePasswordModal').modal('hide')
}

const changePasswordError = function (error) {
  $('#errorCP').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not change password.${error}
    </div>
    `)
  $('#change-password-form').trigger('reset')
}

const signedOutState = function () {
  $('#add-recipe').addClass('hidden')
  $('#recipe-show').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-up, #sign-in').removeClass('hidden')
  $('#welcome-message').removeClass('collapsed')
  $('#welcome-message').removeClass('hidden')
  $('#your-recipes-title').addClass('hidden')
  $('#head').addClass('hidden')
}

const signOutSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert fade alert-warning alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed Out
    </div>
    `)
  $('.showRecipes').html('')
  signedOutState()
}

const signOutFail = function (response) {
  $('#error').html(`
    <div class= "alert fade alert-info alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not sign out.
    </div>
    `)
}

const createRecipeSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert fade alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Recipe made.
    </div>
    `)
  $('.showRecipes').html('')
  $('#add-recipe').trigger('reset')
}

const createRecipeError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not make recipe.
    </div>
    `)
  $('#add-recipe').trigger('reset')
}

const getRecipeSuccess = function (data) {
  const showRecipeHtml = recipeList({ recipes: data.recipes })
  $('.showRecipes').removeClass('collapsed').html(showRecipeHtml)
  $('#your-recipes-title').removeClass('hidden')
}

const getRecipeError = function (error) {
  $('#alert').html(`
    <div class= "alert fade alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not make recipe.
    </div>
    `)
}

const editRecipeSuccess = function (data) {
  $('#alert').html(`
    <div class= "alert fade alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Recipe edited. Click 'Show Recipe' to view changes.
    </div>
    `)
  const showRecipeHtml = recipeList({ recipes: data.recipes })
  $('.showRecipes').html(showRecipeHtml)
  $('.edit-recipe').trigger('reset')
}

const editRecipeError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not eidt recipe.
    </div>
    `)
    $('.edit-recipe').trigger('reset')
}

const deleteRecipeSuccess = function () {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Deleted
    </div>
    `)
    $('.showRecipes').html('')
}

const deleteRecipeError = function () {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not make recipe.
    </div>
    `)
}

module.exports = {
  editRecipeSuccess: editRecipeSuccess,
  editRecipeError: editRecipeError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  createRecipeSuccess: createRecipeSuccess,
  createRecipeError: createRecipeError,
  getRecipeSuccess: getRecipeSuccess,
  getRecipeError: getRecipeError,
  deleteRecipeSuccess: deleteRecipeSuccess,
  deleteRecipeError: deleteRecipeError
}
