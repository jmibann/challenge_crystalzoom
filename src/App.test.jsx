import {render, screen, fireEvent, waitFor } from '@testing-library/react';
import {within} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import App from './App';
import { SecondScreen } from './Screens';

import { MOCKED_GRADES } from './mocks/handlers';

describe("First Screen - Home Page", () => {
  test("renders Book from Scratch title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Book from Scratch/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("First Screen - Check components", () => {
  test("Click on dropdown - Displays 3 options", async () => {
    render(<App />);
    
    const dropdown = screen.getByTestId('select');
    userEvent.click(dropdown);
    
    const options = await screen.findAllByTestId('select-option');
    options?.forEach( (grade, idx) =>
      expect(grade.textContent).toBe(MOCKED_GRADES[idx]
    ))
  });

  test("Checks checkbox input", () => {
    render(<App />);

    const checkbox = screen.getByLabelText('checkbox');
    expect(checkbox.checked).toBe(false);

    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test("Checks start and end time are working properly", async () => {
    render(<App />);
    
    const dropdown = screen.getByTestId('select');
    userEvent.click(dropdown);
    const options = await screen.findAllByTestId('select-option');
    userEvent.click(options[0]);
    
    const timeRangeContainer = screen.getByTestId("TimeRangePickerContainer");
    const timeInputs = within(timeRangeContainer).getAllByRole('textbox');

    timeInputs.forEach( (input, idx) => 
      fireEvent.change(input, {target: {value: `${7+ (3*idx)}:30 AM`}})
    );


    timeInputs.forEach((input, idx) => 
      expect(input.value).toBe(`${7+ (3*idx)}:30 AM`)
    )
  })

  test("Edit default Settings and Create Bookings Button exists", () => {
    const FIRST_BUTTON_TEXT = 'Edit Default Settings (2 modified)';
    const SECOND_BUTTON_TEXT = 'Create Bookings';

    render(<App />);

    const buttons = screen.getAllByRole('button');

    const isFirstPresent = buttons.some(button => button.textContent ===  FIRST_BUTTON_TEXT);
    const isSecondPresent = buttons.some(button => button.textContent ===  SECOND_BUTTON_TEXT);

    expect(isFirstPresent).toBe(true);
    expect(isSecondPresent).toBe(true);
  });
});

describe("Second Screen", () => {
  const daysDiff = 3;

  const MOCKED_BOOKING_DATA = {
    startDate: new Date(2022, 5, 2),
    endDate: new Date(2022, 5, 2 + daysDiff),
    startTime: new Date(2022, 5, 2, 0, 0, 0, 0),
    endTime:  new Date(2022, 5, 5, 8, 0 , 0),
  };

  test("Render screen's second title", () => {
    render(<SecondScreen bookingData={MOCKED_BOOKING_DATA} goBack={()=>{}}/>)
    
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByText(/Bookings to be Confirmed/i));
  });

  test("Render list", () => {
    render(<SecondScreen bookingData={MOCKED_BOOKING_DATA} goBack={()=>{}}/>)
    
    const itemsList = screen.getAllByTestId('item-list');
    expect(itemsList.length).toBe(daysDiff);
    // console.log('====> itemsList: ', itemsList.length)
    // screen.debug();
  });
});

