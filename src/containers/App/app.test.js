import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

describe('App container', () => {
  it('should be rendered without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
