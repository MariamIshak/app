import { initializeTimes, updateTimes } from '../utils/reducer';

// Mock the API functions
import * as api from '../api';

jest.mock('../api');

describe('initializeTimes', () => {
  test('returns available times from API for today', () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    api.fetchAPI.mockReturnValue(mockTimes);
    
    const result = initializeTimes();
    
    expect(api.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });

  test('returns an array with available time slots', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    api.fetchAPI.mockReturnValue(mockTimes);
    
    const result = initializeTimes();
    
    expect(result.length).toBe(3);
  });
});

describe('updateTimes', () => {
  test('returns available times from API for selected date', () => {
    const selectedDate = '2023-12-25';
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    api.fetchAPI.mockReturnValue(mockTimes);
    
    const result = updateTimes([], { type: 'UPDATE_TIMES', payload: selectedDate });
    
    expect(api.fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(result).toEqual(mockTimes);
  });

  test('returns empty array for unknown action types', () => {
    const state = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });

  test('returns empty array when date is empty', () => {
    api.fetchAPI.mockReturnValue([]);
    
    const result = updateTimes([], { type: 'UPDATE_TIMES', payload: '' });
    
    expect(api.fetchAPI).toHaveBeenCalledWith('');
    expect(result).toEqual([]);
  });
});