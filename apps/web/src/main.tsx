import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "./theme-provider.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  RouteObject,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home/Home.tsx";
import store from "./store/store";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Checkout from "./pages/Checkout/Checkout";
import Blog from "./pages/Blog/Blog.tsx";
import BlogPostPage from "./pages/BlogPostPage/BlogPostPage";
const isSelfHost = import.meta.env.VITE_IS_SELF_HOST === "true";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      !isSelfHost && {
        path: "blog",
        element: <Blog />,
      },
      !isSelfHost && {
        path: "blog/:slug",
        element: <BlogPostPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "checkout/return",
        element: <Checkout />,
      },
    ].filter(Boolean) as RouteObject[],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </ThemeProvider>
);
