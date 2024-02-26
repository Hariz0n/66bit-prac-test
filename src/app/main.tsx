import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { MainPage } from "@/pages/MainPage";
import { Header } from "@/widgets/Header";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared";
import { EmployeePage } from "@/pages/EmployeePage";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});

const employeeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/$employeeId",
  component: EmployeePage
})

const routeTree = rootRoute.addChildren([mainRoute, employeeRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
