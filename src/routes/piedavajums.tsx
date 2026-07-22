import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/piedavajums")({
  component: () => <Outlet />,
});
