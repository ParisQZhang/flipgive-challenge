import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import List from './list';
import LoadingSpinner from './loading-spinner';

const GET_ADOBE = gql`
  {
    organization(login: "adobe") {
      repositories(last: 10) {
        edges {
          node {
            id
            name
            url
            issues(last: 3) {
              edges {
                node {
                  id
                  title
                  url
                }
              }
            }
            languages(first: 3) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function AdobeProfile() {
  const { loading, error, data } = useQuery(GET_ADOBE);
  if (error) return <h1>error</h1>;
  if (loading || !data) return <LoadingSpinner />;
  return <List repositories={data.organization.repositories.edges}></List>;
}
