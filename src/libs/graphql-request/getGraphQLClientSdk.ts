import { GraphQLClient } from 'graphql-request'

export const getGraphQLClientSdk = () => {
  const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`, {
    headers: {
      // authorization: `Bearer ${token}`,
    },
  })
  // return getSdk(client)
}
