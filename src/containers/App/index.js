import React from 'react';

type Props = {
  children?: React.Children,
};

const App = ({ children }: Props) => (
  <div>
    {children}
  </div>
);

App.defaultProps = {
  children: null,
};

export default App;
