import React from 'react';
import './App.css';
import GET_ADOBE from './adobeprofile';
import List from './containers/list/list';
import LoadingSpinner from './components/loading-spinner';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const { loading, error, data } = useQuery(GET_ADOBE);
  if (error) return <h1>error</h1>;
  if (loading || !data) return <LoadingSpinner />;

  return (
    <div className="App">
      <div className='heading'>
        <h1 className='title'>Adobe</h1>
        <h2 className='intro'>A Collection of the Open Source Projects</h2>
      </div>
      <div className='listing'>
        <List repositories={data.organization.repositories.edges}></List>;
      </div>
    </div>
  );
}

export default App;
