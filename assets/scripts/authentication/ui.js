'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#sign-up')[0].reset()
//   console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = function () {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  $('#sign-up')[0].reset()
//   console.log('signUpFailure ran. Data is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#sign-in')[0].reset()
  //   console.log('signInSuccess ran. Data is:', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  $('#sign-in')[0].reset()
//   console.log('signInFailure ran. Data is:', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  //   console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
//   console.log('signOutFailure ran. Data is:', error)
}
const RESTARTSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
//   console.log('RESTARTSuccess ran and nothing was returned')
}

const RESTARTFailure = function () {
  $('#message').text('Error on Password change')
  $('#message').css('background-color', 'red')
//   console.log('RESTARTFailure ran. Data is:', error)
}

const allGamesSuccess = function (data) {
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  RESTARTSuccess,
  RESTARTFailure,
  allGamesSuccess
}
