import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";

import { QueryClientProvider } from "@tanstack/react-query";


import { Provider } from "react-redux";
import { store, persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./app/services/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);