import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server.eddiberenguer.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError} = error
    if(networkError && networkError.result.code === 'invalid token'){
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

import { App } from './App'

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
