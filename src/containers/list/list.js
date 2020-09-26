import React from 'react';
import ListItem from '../../components/list-item/list-item';
import './list.css'

export default function List({ repositories, data }) {

  // if(repositories.length===0) repositories=data;
  if(!repositories) repositories=data;
  
  return (
    <div className="repository-list">
      {repositories.map((repository) => {
        return (
          <ListItem key={repository.node.id} repository={repository}></ListItem>
        );
      })}
    </div>
  );
}
