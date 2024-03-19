import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('Home', () => {
  test('renders the home page content', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Why do we need Test ?')).toBeInTheDocument();
    expect(screen.getByText('To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself')).toBeInTheDocument();
    expect(screen.getByText('Users List')).toBeInTheDocument();
  });
});
