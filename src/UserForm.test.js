import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import UserForm from "./UserForm"

test("its shows 2 inputs and a button", () => {
  // render a components
  render(<UserForm />)

  // manipulate the components or find a element in it
  const inputs = screen.getAllByRole("textbox") // 2 text
  const button = screen.getByRole("button") // 1 button

  // assertion - make sure a component is doing what we expect
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn()

  // render a components
  render(<UserForm onUserAdd={mock} />)

  // get the form element
  const nameInput = screen.getByRole("textbox", { name: /name/i })
  const emailInput = screen.getByRole("textbox", { name: /email/i })
  const button = screen.getByRole("button")

  // manipulate textinput
  user.click(nameInput)
  user.keyboard("jane")

  user.click(emailInput)
  user.keyboard("jane@jane.com")

  // simulate clicking the button
  user.click(button)

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" })
})

test("empties the two inputs when form is submitted", () => {
  const mock = jest.fn()
  render(<UserForm onUserAdd={mock} />)

  // get the form element
  const nameInput = screen.getByRole("textbox", { name: /name/i })
  const emailInput = screen.getByRole("textbox", { name: /email/i })
  const button = screen.getByRole("button")

  // manipulate textinput
  user.click(nameInput)
  user.keyboard("jane")

  user.click(emailInput)
  user.keyboard("jane@jane.com")

  // simulate clicking the button
  user.click(button)

  expect(nameInput).toHaveValue("")
  expect(emailInput).toHaveValue("")
})
