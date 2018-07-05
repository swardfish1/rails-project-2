'use strict'
const store = require('./store')
const url = require('./config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: url.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: url.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createRecipe = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'recipes',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getRecipe = function () {
  return $.ajax({
    method: 'GET',
    url: url.apiUrl + 'recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changeRecipe = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: url.apiUrl + 'recipes/' + $(event.target).data('id'),
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: url.apiUrl + 'recipes/' + $(event.target).data('id'),
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  createRecipe: createRecipe,
  getRecipe: getRecipe,
  changeRecipe: changeRecipe,
  deleteRecipe: deleteRecipe
}
