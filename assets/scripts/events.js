const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then((result) => {
      store.user = result.user
      ui.signInSuccess()
    })
    .catch(ui.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.SignOutFail)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeError)
    .then(api.getRecipe)
    .then(ui.getRecipeSuccess)
}

const onGetRecipe = function (event) {
  event.preventDefault()
  api.getRecipe()
    .then(ui.getRecipeSuccess)
    .catch(ui.getRecipeError)
}

const onEditRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changeRecipe(data)
    .then(ui.editRecipeSuccess)
    .catch(ui.editRecipeError)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteRecipe(data)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteRecipeError)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateRecipe: onCreateRecipe,
  onGetRecipe: onGetRecipe,
  onEditRecipe: onEditRecipe,
  onDeleteRecipe: onDeleteRecipe
}
