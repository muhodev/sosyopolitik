import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { AuthProvider } from 'providers';
import { AuthConsumer } from 'consumers';
import 'style/index.css';

export default function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false
        }
      }
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          <AuthConsumer>
            <Component {...pageProps} />
          </AuthConsumer>
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
