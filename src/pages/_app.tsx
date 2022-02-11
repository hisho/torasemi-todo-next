import { ApolloProvider } from '@apollo/client'
import { client } from '@src/libs/apollo/client'
import type { AppPropsWithLayout } from 'next/app'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ApolloProvider>
  )
}

export default MyApp
