
import { QueryClient } from "@tanstack/react-query";

// Default Setting for all query and Mutations 
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, 
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
}); 