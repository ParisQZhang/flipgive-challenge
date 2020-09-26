import React, { useState } from 'react';
import './App.css';
import GET_ADOBE from './adobeprofile';
import List from './containers/list/list';
import LoadingSpinner from './components/loading-spinner/loading-spinner';
import { useQuery } from '@apollo/react-hooks';
import Tags from './components/tags/tags';

function App() {
  const [repoData, setRepoData] = useState([])
  const { loading, error, data } = useQuery(GET_ADOBE);
  
  if (error) return <h1>error</h1>;
  if (loading || !data) return <LoadingSpinner />;

  const {
    organization: {
      repositories: { edges }
    }
  } = data

  const filterRepoByLanguage=(lan)=>{
    if(lan==='All') setRepoData(edges)
    else {
      let languageEdges=edges.map(repo=>repo.node.languages.edges);
      let languageArr = languageEdges.map((edge, index) => {
        return edge={id:index, languages: edge.map((el)=>el.node.name)}
      });
      const filteredLanArr=languageArr.filter((lanArr)=>lanArr.languages.includes(lan));
      setRepoData(filteredLanArr.map((edge) => edges[edge.id]))
    }
  }

  return (
    <div className="App">
      <div className='heading'>
        <h1 className='title'>Adobe</h1>
        <h2 className='intro'>A Collection of the Open Source Projects</h2>
      </div>

      <div className='tags'>
        <Tags repositories={edges} clickEvent={filterRepoByLanguage}></Tags>
      </div>

      <div className='listing'>
        <List repositories={repoData} data={edges}></List>
      </div>

    </div>
  )
}

export default App;
