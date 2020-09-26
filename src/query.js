import gql from 'graphql-tag';

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

export default GET_ADOBE;

