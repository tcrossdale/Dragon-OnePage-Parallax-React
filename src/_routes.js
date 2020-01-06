import React from "react";

const FrontPage = React.lazy(() => import("./pages/FrontPage"));
const Single = React.lazy(() => import("./pages/single"));
const Page = React.lazy(() => import("./pages/page"));

const routes = [
  { path: "/", exact: true, name: "Home", component: FrontPage },
  { path: "/single", name: "Single Post Template", component: Single },
  { path: "/page", name: "Page Template", component: Page }
];

export default routes;
