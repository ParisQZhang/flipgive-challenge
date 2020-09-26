import React, { useState, useEffect } from 'react';
import './tags.css';

export default function Tags({repositories, clickEvent}){
    const [tags, setTags] = useState(['All']);

    useEffect(()=>{
        repositories.forEach(node => {
          const languages = node.node.languages.edges; 
          languages.forEach((node)=>{
              if (!tags.includes(node.node.name)){
                  setTags([...tags, node.node.name])
              }
          })
        });
    }, [repositories, tags])

    return (
        tags.sort().map((tag)=>{
            return (
                <button key={tag} className='tag' onClick={()=>clickEvent(tag)}>{tag}</button>
            )
        })
    )

}