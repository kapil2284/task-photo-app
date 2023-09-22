import { render, screen } from '@testing-library/react';
import App from './App';
import NewUserForm from './components/newuserform';
import mockFetch from "./mock/mockFetch";
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
  jest.restoreAllMocks()
});



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photos/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders new user form component', async ()=>{
  render(<NewUserForm />);

  const submitBtn = screen.getByRole("button", { name: "Submit" });
  expect(submitBtn).not.toBeDisabled();
  userEvent.click(submitBtn);
 // await waitFor(() => expect(screen.getByText('Thanks for submitting the form')).toBeInTheDocument());
  const linkElement = await screen.findByText('Thanks for submitting the form');
  expect(linkElement).toBeInTheDocument();
})