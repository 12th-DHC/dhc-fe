import { useState, type ReactNode } from "react";
import { QueryCache, QueryClient, QueryClientProvider, MutationCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getErrorMessage } from "../utils/error";

interface QueryProviderProps {
  children: ReactNode;
}

// 각 화면에서 직접 처리하지 못한 에러를 위한 최소한의 안전망.
// 화면에서 에러를 이미 표시하는 경우(로그인, 비밀번호 변경 등)와 중복되어도
// 콘솔 로그이므로 사용자에게는 영향이 없다.
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

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
