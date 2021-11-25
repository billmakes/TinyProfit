import NavHeader from '@/components/nav/NavHeader'

const fullLayout = {
  'nav-header': NavHeader
}

export default [
  {
    path: '/',
    name: 'home',
    label: 'Home',
    components: {
      default: () => import('@/views/Home'),
      ...fullLayout
    }
  },
  {
    path: '*',
    name: 'wild',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/Error'),
    props: {
      code: 'notFound'
    }
  }
]
