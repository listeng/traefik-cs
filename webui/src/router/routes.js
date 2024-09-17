import Error404 from 'pages/_commons/Error404.vue'

const LayoutDefault = () => import('layouts/Default.vue')

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/dashboard/Index.vue'),
        meta: {
          title: '概览'
        }
      }
    ]
  },
  {
    path: '/http',
    redirect: '/http/routers',
    component: LayoutDefault,
    children: [
      {
        path: 'routers',
        name: 'httpRouters',
        components: {
          default: () => import('pages/http/Routers.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 路由'
        }
      },
      {
        path: 'routers/:name',
        name: 'httpRouterDetail',
        components: {
          default: () => import('pages/_commons/RouterDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 路由详情'
        }
      },
      {
        path: 'services',
        name: 'httpServices',
        components: {
          default: () => import('pages/http/Services.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 服务'
        }
      },
      {
        path: 'services/:name',
        name: 'httpServiceDetail',
        components: {
          default: () => import('pages/_commons/ServiceDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 服务详情'
        }
      },
      {
        path: 'middlewares',
        name: 'httpMiddlewares',
        components: {
          default: () => import('pages/http/Middlewares.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 中间件'
        }
      },
      {
        path: 'middlewares/:name',
        name: 'httpMiddlewareDetail',
        components: {
          default: () => import('pages/_commons/MiddlewareDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'http',
          title: 'HTTP 中间件详情'
        }
      }
    ]
  },
  {
    path: '/tcp',
    redirect: '/tcp/routers',
    component: LayoutDefault,
    children: [
      {
        path: 'routers',
        name: 'tcpRouters',
        components: {
          default: () => import('pages/tcp/Routers.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 路由'
        }
      },
      {
        path: 'routers/:name',
        name: 'tcpRouterDetail',
        components: {
          default: () => import('pages/_commons/RouterDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 路由详情'
        }
      },
      {
        path: 'services',
        name: 'tcpServices',
        components: {
          default: () => import('pages/tcp/Services.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 服务'
        }
      },
      {
        path: 'services/:name',
        name: 'tcpServiceDetail',
        components: {
          default: () => import('pages/_commons/ServiceDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 服务详情'
        }
      },
      {
        path: 'middlewares',
        name: 'tcpMiddlewares',
        components: {
          default: () => import('pages/tcp/Middlewares.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 中间件'
        }
      },
      {
        path: 'middlewares/:name',
        name: 'tcpMiddlewareDetail',
        components: {
          default: () => import('pages/_commons/MiddlewareDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'tcp',
          title: 'TCP 中间件详情'
        }
      }
    ]
  },
  {
    path: '/udp',
    redirect: '/udp/routers',
    component: LayoutDefault,
    children: [
      {
        path: 'routers',
        name: 'udpRouters',
        components: {
          default: () => import('pages/udp/Routers.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'udp',
          title: 'TCP 路由'
        }
      },
      {
        path: 'routers/:name',
        name: 'udpRouterDetail',
        components: {
          default: () => import('pages/_commons/RouterDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'udp',
          title: 'TCP 路由详情'
        }
      },
      {
        path: 'services',
        name: 'udpServices',
        components: {
          default: () => import('pages/udp/Services.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'udp',
          title: 'TCP 服务'
        }
      },
      {
        path: 'services/:name',
        name: 'udpServiceDetail',
        components: {
          default: () => import('pages/_commons/ServiceDetail.vue'),
          NavBar: () => import('components/_commons/ToolBar.vue')
        },
        props: { default: true, NavBar: true },
        meta: {
          protocol: 'udp',
          title: 'TCP 服务详情'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '/:catchAll(.*)*',
    component: Error404,
    meta: {
      title: '404'
    }
  })
}

export default routes
