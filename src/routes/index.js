import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/mainPage",
    name: "mainPage",
    component: () => import("../components/mainPage.vue"),
  },
  {
    path: "/productList",
    name: "productList",
    component: () => import("../components/ProductList.vue"),
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import("../components/ShoppingCart.vue"),
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: () => import("../components/Payment.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // 라우트 설정 배열
});

export default router;
