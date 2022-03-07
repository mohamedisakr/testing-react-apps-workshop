// form testing
// http://localhost:3000/login

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

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

/*
eslint
  no-unused-vars: "off",
*/
