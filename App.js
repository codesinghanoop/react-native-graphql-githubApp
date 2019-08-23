/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error';
import { ApolloLink, concat } from 'apollo-link';
// import apolloLogger from 'apollo-link-logger';
import AppNavigator from '@router/AppNavigation';

class App extends Component {
  createClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql'})

    // handle network error
    const errorLink = onError(({ networkError }) => {
        if (networkError.statusCode === 401) {
          console.log(networkError)
        }
      // let errorMessage = networkError.statusCode === 401 ? 'Network error 104, handled' : 'link sucess'
      // console.log(errorMessage, networkError)
    })

    // apply widdleware to add access token to request
    let middlewareLink =  new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
        authorization : 'Bearer 323a3da206d5e6e7c5819883dc2e030526375d96'
        }
      })
      return forward(operation)
    })
    // ApolloLink.from([
    //   apolloLogger
    // ])
    const link = concat(middlewareLink, httpLink)

    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
    link: link,
    cache: new InMemoryCache({
      dataIdFromObject: o => o.id,
    }),
    connectToDevTools: true
    })
  }
  render() {
    return (
      <ApolloProvider client={this.createClient()}>
          <AppNavigator />
      </ApolloProvider>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
