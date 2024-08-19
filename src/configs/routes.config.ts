import { lazy } from "react";

const publicRoutes = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: lazy(() => import("@auth/auth.component")),
  },
];

const privateRoutes = [
  {
    key: "welcome",
    path: `/welcome`,
    component: lazy(() => import("@welcome/welcome.component")),
  },
  {
    key: "products",
    path: `/products`,
    component: lazy(() => import("@products/products.component")),
  },
  {
    key: "products-id",
    path: `/products/product`,
    component: lazy(
      () => import("@products/routes/single-product/single-product.component")
    ),
  },
  {
    key: "categories",
    path: `/categories`,
    component: lazy(() => import("@categories/categories.component")),
  },
  {
    key: "users",
    path: `/users`,
    component: lazy(() => import("@users/users.component")),
  },
  {
    key: "users-id",
    path: `/users/user`,
    component: lazy(
      () => import("@users/routes/single-user/single-user.component")
    ),
  },
];

export default { publicRoutes, privateRoutes };
