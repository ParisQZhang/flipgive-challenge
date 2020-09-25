import React from 'react';

export default function List({ repositories }) {
  return (
    <div className="repository-list" id="list">
      {console.log(repositories)}
      {repositories.map((repository) => {
        return (
          <div>
            <a href={repository.node.url}>{repository.node.name}</a>
          </div>
        );
      })}
    </div>
  );
}
