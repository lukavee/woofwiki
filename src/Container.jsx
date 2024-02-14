import React from 'react';
import './styles/main.scss';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;