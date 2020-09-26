import React from 'react';
import ListItem from '../../components/list-item/list-item'

export default function List({ repositories }) {
  return (
    <div className="repository-list" id="list">
      {repositories.map((repository) => {
        return (
          <ListItem key={repository.node.id} repository={repository}></ListItem>
        );
      })}
    </div>
  );
}
