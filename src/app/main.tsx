import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  RouterProvider,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, queryClient, rootRoute } from "@/shared";
import { mainRoute } from "@/pages/MainPage/lib/mainRoute";
import {
  employeeIdRoute,
  employeeRoute,
} from "@/pages/EmployeePage/lib/employeeRoute";
import { Header } from "@/widgets/Header";
import { Breadcrumbs } from "@/widgets/Breadcrumbs";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const globalLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "globalLayout",
  component: () => (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
    </>
  ),
});

const routeTree = rootRoute.addChildren([
  globalLayout.addChildren([
    mainRoute,
    employeeRoute.addChildren([employeeIdRoute]),
  ]),
]);

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    title: "Главная",
    path: "/",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
