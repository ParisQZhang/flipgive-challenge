import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingSpinner() {
  return (
    <Spinner animation="grow" size="sm" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
