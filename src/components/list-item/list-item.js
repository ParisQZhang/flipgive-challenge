import React from 'react';
import './list-item.css';

export default function ListItem({ repository }) {
  return (
    <div className="listItem">
        <a className='name' href={repository.node.url}>{repository.node.name}</a>
        {repository.node.languages.edges.map((node)=>{
            console.log(node)
            return <p>{node.node.name}</p>
        })}
        <p className = 'language'></p>
    </div>
  );
}
