import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Nprogress from '@/components/Nprogress';
import store from '@/redux/store';

export default function Providerlayout({ children }: PropsWithChildren<{}>) {
  let persistor = persistStore(store);

  const queryClient: any = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Nprogress color="red" />
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
