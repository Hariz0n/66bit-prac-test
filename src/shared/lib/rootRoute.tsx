
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";

interface RouterContext {
  queryClient: QueryClient;
  title: string;
  path: string;
}

export const rootRoute = createRootRouteWithContext<RouterContext>()();
