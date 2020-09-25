import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import AdobeProfile from './adobeprofile';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

console.log('api token', process.env.REACT_APP_GITHUB_ACCESS_TOKEN);

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const Repodata = () => {
  return (
    <ApolloProvider client={client}>
      <div className="RepoData">
        <h1>Adobe</h1>
        <h2>Open Source Projects</h2>
        <AdobeProfile />
      </div>
    </ApolloProvider>
  );
};

export default Repodata;
