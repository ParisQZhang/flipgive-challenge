import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './loading-spinner.css'

export default function LoadingSpinner(){
    return(
      <Spinner animation="border" role="status" className='spinner-container'>
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
}