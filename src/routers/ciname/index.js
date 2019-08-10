export default {
  path: '/cinama',
  component: () => import('@/views/Cinama'),
  // children: [
  //   {
  //     path: 'ciList',
  //     component: () => import('@/components/CiList')
  //   },
  //   {
  //     path: '/cinama',
  //     redirect: '/cinama/ciList'
  //   }
  // ]
}