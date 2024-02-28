import { createRoute } from "@tanstack/react-router";
import { MainPage } from "..";
import { globalLayout } from "@/app/main";

export const mainRoute = createRoute({
  getParentRoute: () => globalLayout,
  path: "/",
  component: MainPage,
  beforeLoad: () => ({ title: "Список сотрудников", path: "/" }),
});
