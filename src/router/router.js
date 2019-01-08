import Layout from '@/components/Layout'
const view = name => () => import(`@/views/${name}`)
export default [
  {
    path: '/',
    icon: 'el-icon-question',
    noDropdown: false,
    name: '首页',
    component: Layout,
    children: []
  },
  {
    path: '/html',
    icon: 'el-icon-question',
    noDropdown: false,
    name: 'html问题集',
    component: Layout,
    children: [
      {
        path: 'js',
        name: 'js问题集',
        component: view('Home')
      }
    ]
  },
  {
    path: '/js',
    icon: 'el-icon-question',
    noDropdown: false,
    name: 'js问题集',
    component: Layout,
    children: [
      {
        path: 'js',
        name: 'js问题集',
        component: view('Home')
      }
    ]
  },
  {
    path: '/css',
    icon: 'el-icon-question',
    noDropdown: false,
    name: 'css问题集',
    component: Layout,
    children: [
      {
        path: 'js',
        name: 'js问题集',
        component: view('Regex')
      }
    ]
  },
  {
    path: '/regex',
    icon: 'el-icon-question',
    noDropdown: false,
    name: 'regex问题集',
    component: Layout,
    children: [
      {
        path: 'regex',
        name: 'regex问题集',
        component: view('Regex')
      }
    ]
  }
]