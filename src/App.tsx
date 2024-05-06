import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "./Router";
import "./style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { pStore } from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={pStore}>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-1 h-full w-full">
            <Router />
            <ToastContainer />
          </div>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
