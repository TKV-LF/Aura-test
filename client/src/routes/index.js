// upload
import { Home } from "../pages";
import { Dashboard } from "../pages";
import { DashboardLayout } from "../components/Layouts";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    layout: DashboardLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
