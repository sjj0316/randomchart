import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import App from "./App";
import Router from "./pages/Router";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
<QueryClientProvider client={queryClient}><Router /></QueryClientProvider>

);


// npm install axios react-query @nivo/core @nivo/bar styled-components@5.3.5
// npm install --dev @types/axios @types/styled-components