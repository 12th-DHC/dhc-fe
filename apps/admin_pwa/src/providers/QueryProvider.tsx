import { useState, type ReactNode } from "react";
import { QueryCache, QueryClient, QueryClientProvider, MutationCache } from "@tanstack/react-query";
import { getErrorMessage } from "../utils/error";

interface QueryProviderProps {
  children: ReactNode;
}

function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => console.error("[Query Error]", getErrorMessage(error), error),
        }),
        mutationCache: new MutationCache({
          onError: (error) => console.error("[Mutation Error]", getErrorMessage(error), error),
        }),
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
