import React from 'react';

export default function Layout({children}) {
  return (
    <div>
      <div className="layout_header">
        <h1>Vote as a Service</h1>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}