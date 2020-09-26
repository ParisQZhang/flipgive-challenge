import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default function LoadingSpinner(){
    return(
      <Spinner animation="border" role="status">
        <span className="sr-only" style={{fontSize: '30px'}}>Loading...</span>
      </Spinner>
    )
}