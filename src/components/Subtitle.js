import React from 'react';

const Subtitle = ({ children }) => {
  return (
    <div className="subtitle">
      <h2 className="subtitle__text">{children}</h2>
      <div className="subtitle__decorate-line"></div>
    </div>
  );
}

export default Subtitle;