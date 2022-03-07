// form testing
// http://localhost:3000/login

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {faker} from '@faker-js/faker'
import Login from '../../components/login'

const buildLoginForm = defaults => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
  ...defaults,
})

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function
  let submittedData = {}
  const username = 'johndoe'
  const password = 'password123'

  // that accepts the data and assigns submittedData to the data that was
  // submitted
  const handleSubmit = data => (submittedData = data)

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)

  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  userEvent.type(usernameField, username)
  userEvent.type(passwordField, password)
  //
  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submit)

  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  expect(submittedData).toEqual({username, password})
})

test('use a jest mock function', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function
  const credentials = {username: 'johndoe', password: 'password123'}

  // that accepts the data and assigns submittedData to the data that was
  // submitted
  const handleSubmitMock = jest.fn()

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmitMock} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)

  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const {username, password} = credentials
  userEvent.type(usernameField, username)
  userEvent.type(passwordField, password)

  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submit)

  // Jest has built-in "mock" function APIs. Rather than creating the
  // submittedData variable, try to use a mock function and assert it
  // was called correctly
  expect(handleSubmitMock).toHaveBeenCalledWith(credentials)
  expect(handleSubmitMock).toHaveBeenCalledTimes(1)
})

test('generate test data', () => {
  // that accepts the data and assigns submittedData to the data that was
  // submitted
  const handleSubmitMock = jest.fn()

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmitMock} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)

  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const {username, password} = buildLoginForm()
  userEvent.type(usernameField, username)
  userEvent.type(passwordField, password)

  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submit)

  // Jest has built-in "mock" function APIs. Rather than creating the
  // submittedData variable, try to use a mock function and assert it
  // was called correctly
  expect(handleSubmitMock).toHaveBeenCalledWith({username, password})
  expect(handleSubmitMock).toHaveBeenCalledTimes(1)
})

test.only('allow for overrides', () => {
  // that accepts the data and assigns submittedData to the data that was
  // submitted
  const handleSubmitMock = jest.fn()

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmitMock} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)

  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const {username, password} = buildLoginForm({password: 'fjKbKpzNUtHE55WU'})
  userEvent.type(usernameField, username)
  userEvent.type(passwordField, password)

  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submit)

  // Jest has built-in "mock" function APIs. Rather than creating the
  // submittedData variable, try to use a mock function and assert it
  // was called correctly

  expect(handleSubmitMock).toHaveBeenCalledWith({username, password})
  expect(handleSubmitMock).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
