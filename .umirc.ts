import { defineConfig } from 'umi';

export default defineConfig({
  title: '程序箱',
  favicon: '/favicon.png',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  ssr: {},
  metas: [{ name: 'description', content: '程序员常用的工具集合' }],
});
