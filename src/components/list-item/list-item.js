import React from 'react';
import './list-item.css';

export default function ListItem({ repository }) {
  const backgroundColor=['#FCDABE', '#F2C7CC', '#C0C2E2', '#C2E7F1', '#D7F2CE', '#F3FBD2']
  const randomColor = backgroundColor[Math.floor(Math.random()*backgroundColor.length)];

  return (
    <div className="listItem" style={{'border':'6px solid'+randomColor}}>

        <a className='name' href={repository.node.url}>{repository.node.name}</a>
        
        <div className='issues'>
        {repository.node.issues.edges.map((node)=>{
            return <a href={node.node.url} key={node.node.id} className='issue'>{node.node.title}</a>
        })}
        </div>

        <div className='languages'>
        {repository.node.languages.edges.map((node)=>{
            return (
            <span key={node.node.id} className='language'>
                <span className='language-color' style={{backgroundColor: node.node.color}}></span>
                <span>{node.node.name}</span>
            </span>
            )
        })}
        </div>
    </div>
  );
}
