import gql from 'graphql-tag'

const queries = {
  // All github queries used in our app

  // fetch github user Profile
  fetchUser: gql `
  query fetchUser($login: String!){
    user(login: $login) {
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      following{
        totalCount
      }
      repositories{
        totalCount
      }
    }
  }`,
  // fetch github Organization Profile
  fetchOrg: gql `
    query fetchOrg($login: String!){
      organization(login:$login){
        name
        repositories{
          totalCount
        }
        description
        members{
          totalCount
      }
    }
  }`,
  // fetches all repos matching search text
  fetchRepos: gql`
  query fetchRepos($query: String!) {
    search(type: REPOSITORY, query: $query, first: 100) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
            owner {
              login
              __typename
            }
          }
        }
      }
    }
  }`,
  //Search user
  searchUser: gql`
  query searchUser($query: String!){
    __typename
    search(type: USER, query: $query, first: 100) {
      userCount
      __typename
    	edges {
        __typename
        node {
          __typename
        	... on User {
            __typename
            login
            id
            name
            email
            avatarUrl
            location
            anyPinnableItems
          }
        }
      }
    }
  }`,

  //Find pinned repositories
  pinnedRepos: gql`
  query pinnedRepos($query: String!) {
    user(login: $query) {
      __typename
    	pinnedItems(first: 10) {
        totalCount
        __typename
        edges {
          node {
            ... on Repository {
              name
              description
            }
          }
        }
      }
    }
  }`
}

export default queries

// pinnedItems(first: 10) {
  //   __typename
  //   ... on PinnableItemConnection {
  //     __typename
  //     nodes {
  //       __typename
  //       ... on RepositoryInfo {
  //         __typename
  //         description
  //         name
  //       }
  //     }
  //   }
  // }
