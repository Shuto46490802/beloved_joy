import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';

const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: "https://beloved-development-test.myshopify.com/api/2021-04/graphql.json", 
        headers: {
            'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            'Accept': 'application/json',
        },
    }),
    cache: new InMemoryCache(),
    fetch,
});

export default apolloClient;