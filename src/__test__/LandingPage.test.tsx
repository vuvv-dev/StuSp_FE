import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingpageModule from '@/components/modules/LandingpageModule';
import VideoCalModule from '@/components/modules/VideoCallModule';
test('renders Header component', () => {
  render(< VideoCalModule/>);
  const heading = screen.getByRole('heading', { name: /welcome to next\.js/i });
  expect(heading).toBeInTheDocument();
});
