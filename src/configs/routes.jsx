// import Layout from "@/core/layout";
import App from "../App";
import Store from "@/views/store";
import Library from "@/views/library";
import Dashboard from "@/views/dashboard";

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
];
