import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

// Mock the API
import * as api from '../api/api';

jest.mock('../api');

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    api.submitAPI.mockReturnValue(true);
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renders the Choose date label', () => {
    const dateLabel = screen.getByText('Choose date');
    expect(dateLabel).toBeInTheDocument();
  });

  test('renders the Choose time label', () => {
    const timeLabel = screen.getByText('Choose time');
    expect(timeLabel).toBeInTheDocument();
  });

  test('renders the Number of guests label', () => {
    const guestsLabel = screen.getByText('Number of guests');
    expect(guestsLabel).toBeInTheDocument();
  });

  test('renders the Occasion label', () => {
    const occasionLabel = screen.getByText('Occasion');
    expect(occasionLabel).toBeInTheDocument();
  });

  test('renders the Submit Reservation button', () => {
    const submitButton = screen.getByText('Submit Reservation');
    expect(submitButton).toBeInTheDocument();
  });

  test('renders all available time options', () => {
    mockAvailableTimes.forEach((time) => {
      const option = screen.getByText(time);
      expect(option).toBeInTheDocument();
    });
  });

  test('dispatches UPDATE_TIMES when date changes', () => {
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    expect(mockDispatch).toHaveBeenCalledWith({ 
      type: 'UPDATE_TIMES', 
      payload: '2023-12-25' 
    });
  });

  test('resets time when date changes', () => {
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    
    // Select a time first
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    
    // Change date
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    
    // Time should be reset
    expect(timeSelect.value).toBe('');
  });

  test('calls submitForm when form is submitted', () => {
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const submitButton = screen.getByText('Submit Reservation');

    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: new Date('2023-12-25'),
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });

  test('disables submit button when date is not selected', () => {
    const submitButton = screen.getByText('Submit Reservation');
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when date and time are selected', () => {
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');

    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    const submitButton = screen.getByText('Submit Reservation');
    expect(submitButton).not.toBeDisabled();
  });

  test('disables time select when date is not selected', () => {
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toBeDisabled();
  });

  test('enables time select when date is selected', () => {
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    
    expect(timeSelect).not.toBeDisabled();
  });
});