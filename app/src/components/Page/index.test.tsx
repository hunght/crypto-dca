import * as React from 'react';
import ReactDOM from 'react-dom';
import Page from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page body={''}/>, div);
});
