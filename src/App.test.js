import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Welcome to search! Search for articles by a search string.')).toBeInTheDocument();
});

test('renders search bar', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText('Enter a Search term to start your search ...');
  expect(searchElement).toBeInTheDocument();
});

test('renders selection control to sort articles', () => {
  render(<App />);
  const searchElement = screen.getByText('Sort Articles');
  expect(searchElement).toBeInTheDocument();
});