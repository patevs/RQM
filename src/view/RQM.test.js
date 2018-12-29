import React from 'react';
import ReactDOM from 'react-dom';
import RQM from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RQM />, div);
  ReactDOM.unmountComponentAtNode(div);
});
