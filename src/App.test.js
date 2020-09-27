import React from 'react';
import { cleanup, render, waitForElement, getByRole } from '@testing-library/react';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

describe('Components rendering', ()=>{
  test('renders loading status while fetching data', () => {
    const { getByText } = render(<ApolloProvider client={client}><App /></ApolloProvider>);
    const linkElement = getByText(/loading/i);
    expect(linkElement).toBeInTheDocument();
    cleanup();
  });
  
  test('renders title after loading', async ()=>{
    const {getByText} = render(<ApolloProvider client={client}><App /></ApolloProvider>);
    const linkElement = await waitForElement(()=>getByText(/Adobe/i))
    expect(linkElement).toBeInTheDocument();
  })

  test('renders 7 language tags after loading', async ()=>{
    const {getAllByRole} = render(<ApolloProvider client={client}><App /></ApolloProvider>);
    const buttons = await waitForElement(()=>getAllByRole('button'))
    expect(buttons).toHaveLength(7);
  })

  test('renders search bar after loading', async ()=>{
    const {getByRole} = render(<ApolloProvider client={client}><App /></ApolloProvider>);
    const input = await waitForElement(()=>getByRole('textbox'))
    expect(input).toBeInTheDocument();
  })

});