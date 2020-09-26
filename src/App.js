import React, { useState } from 'react';
import './App.css';
import GET_ADOBE from './query';
import List from './containers/list/list';
import LoadingSpinner from './components/loading-spinner/loading-spinner';
import { useQuery } from '@apollo/react-hooks';
import Tags from './components/tags/tags';
import SearchBar from './components/search-bar/search-bar';
import Footer from './components/footer/footer';

function App() {
  const [repoData, setRepoData] = useState()
  const { loading, error, data } = useQuery(GET_ADOBE);
  
  if (error) return <h1>error</h1>;
  if (loading || !data) return <LoadingSpinner />;

  const {
    organization: {
      repositories: { edges }
    }
  } = data

  const filterRepoByLanguage=(language)=>{
    if(language==='All') setRepoData(edges)
    else {
      let languageEdges=edges.map(repo=>repo.node.languages.edges);
      let languageArr = languageEdges.map((edge, index) => {
        return edge={idx:index, languages: edge.map((el)=>el.node.name)}
      });
      const filteredLanArr=languageArr.filter((lanArr)=>lanArr.languages.includes(language));
      setRepoData(filteredLanArr.map((edge) => edges[edge.idx]))
    }
  }

  const filterByName=(str)=>{
    setRepoData(edges.filter((edge)=>{
      return edge.node.name.includes(str.toLowerCase())
    }));
  }
  
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Adobe</h1>
        <h2 className='intro'>Open Source Projects</h2>
        <SearchBar handleChange={filterByName}></SearchBar>
        <Tags repositories={edges} clickEvent={filterRepoByLanguage}></Tags>
      </div>

      <div className='listing'>
        <List repositories={repoData} initalData={edges}></List>
      </div>
      <Footer />
    </div>
  )
}

export default App;
