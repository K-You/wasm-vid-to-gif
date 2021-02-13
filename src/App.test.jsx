import { render } from '@testing-library/react';
import { expect } from 'chai';
import * as React from 'react';
import App from './App';

describe('<App>', () => {
  it('renders Loading at first', () => {
    const { getByText } = render(<App />);
    const loadingElement = getByText(/Loading/i);
    expect(document.body.contains(loadingElement));
  });
});
