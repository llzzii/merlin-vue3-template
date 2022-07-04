import { AppRouteRecordRaw } from '..';

export const LAYOUT = () => import('@/layout/index.vue');

// 404 on a page
export const ComponentsDemo: AppRouteRecordRaw = {
  path: '/components',
  name: 'componentsDemos',
  component: LAYOUT,
  meta: {
    title: '各种示例',
    hideBreadcrumb: false,
    hideMenu: false,
  },
  children: [
    {
      path: 'borders',
      name: 'bordersDemo',
      component: import('@/views/components/borders.vue'),
      meta: {
        title: '边框',
        hideBreadcrumb: false,
        hideMenu: false,
        hideTab: false,
      },
    },
    {
      path: 'decoration',
      name: 'decorationsDemo',
      component: import('@/views/components/decorations.vue'),
      meta: {
        title: '装饰',
        hideBreadcrumb: false,
        hideMenu: false,
        hideTab: false,
      },
    },
  ],
};
