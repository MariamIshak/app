import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBooking from '../components/ConfirmedBooking';

describe('ConfirmedBooking', () => {
  test('renders the booking confirmed heading', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    
    const headingElement = screen.getByText('Booking Confirmed!');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the confirmation icon', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    
    const iconElement = screen.getByText('✓');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders the success message', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    
    const messageElement = screen.getByText('Your reservation has been successfully submitted.');
    expect(messageElement).toBeInTheDocument();
  });

  test('renders the return to home link', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );
    
    const linkElement = screen.getByText('Return to Home');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});