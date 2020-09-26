import React from 'react';
import './list-item.css';

export default function ListItem({ repository }) {
  const backgroundColor=['#08FFD0', '#A734E8', '#FFEF00', '#7FF981', '#FF0044']
  const randomColor = backgroundColor[Math.floor(Math.random()*backgroundColor.length)];

  return (
    <div className="listItem" style={{'border':'3px solid'+randomColor}}>

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
