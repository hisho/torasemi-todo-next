import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
})

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      if (/([Pp])ermissions\s*deny/.test(error.message)) {
        // location.replace(pagesPath.users.sign_out.$url().pathname)
      }
    })
  }
  if (networkError) {
    if ('statusCode' in networkError && networkError.statusCode === 401) {
      // location.replace(pagesPath.users.sign_out.$url().pathname)
    }
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    // query: {
    //   fetchPolicy: 'network-only',
    //   errorPolicy: 'all',
    // },
    // mutate: {
    //   errorPolicy: 'all',
    // },
  },
  link: ApolloLink.from([errorLink, authLink, httpLink]),
})
