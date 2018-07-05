'use strict'
const store = require('./store')
const recipeList = require ('./templates/recipe-listing.handlebars')

const signUpSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed up! Sign in!
    </div>
    `)
  $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const signUpError = function (error) {
  $('#errorSU').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
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
  $('#add-recipe').removeClass('hidden')
  $('#recipe-show').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-up, #sign-in').addClass('hidden')
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
}

const signOutSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-warning alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed Out
    </div>
    `)
  $('.showRecipes').html('')
  signedOutState()
}

const signOutFail = function (response) {
  $('#error').html(`
    <div class= "alert alert-info alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not sign out.
    </div>
    `)
}

const createRecipeSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
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
  $('.showRecipes').html(showRecipeHtml)
}

const getRecipeError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not make recipe.
    </div>
    `)
}

const editRecipeSuccess = function (data) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable fade in">
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

const deleteRecipeSuccess = function (data) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Deleted
    </div>
    `)
    $('.showRecipes').html('')
}

const deleteRecipeError = function (error) {
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
