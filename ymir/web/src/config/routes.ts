type Route = {
  path: string,
  name?: string,
  title?: string,
  component?: string,
  redirect?: string,
}
export const homeRoutes = [
  {
    path: "/home",
    name: "home",
    redirect: "/home/portal",
    title: 'portal.title',
    breadcrumbLabel: 'breadcrumbs.portal',
  },
  {
    path: "/home/portal",
    name: "portal",
    component: "@/pages/portal/index",
    title: 'portal.title',
    pid: 0,
    id: 2,
    breadcrumbLabel: 'breadcrumbs.portal',
  },
  {
    path: "/home/project/:id/fusion",
    name: "taskFusion",
    component: "@/pages/task/fusion/index",
    title: 'task.fusion.title',
    pid: 25,
    id: 3,
    breadcrumbLabel: 'breadcrumbs.task.fusion',
  },
  {
    path: "/home/project/:id/merge",
    name: "taskMerge",
    component: "@/pages/task/merge/index",
    title: 'task.merge.title',
    pid: 25,
    id: 36,
    breadcrumbLabel: 'breadcrumbs.task.merge',
  },
  {
    path: "/home/project/:id/filter",
    name: "taskFilter",
    component: "@/pages/task/filter/index",
    title: 'task.filter.title',
    pid: 25,
    id: 37,
    breadcrumbLabel: 'breadcrumbs.task.filter',
  },
  {
    path: "/home/project/:id/mining",
    name: "taskMining",
    component: "@/pages/task/mining/index",
    title: 'task.mining.title',
    pid: 25,
    id: 4,
    breadcrumbLabel: 'breadcrumbs.task.mining',
  },
  {
    path: "/home/project/:id/train",
    name: "taskTrain",
    component: "@/pages/task/train/index",
    title: 'task.train.title',
    pid: 25,
    id: 5,
    breadcrumbLabel: 'breadcrumbs.task.training',
  },
  {
    path: "/home/project/:id/inference",
    name: "taskInference",
    component: "@/pages/task/inference/index",
    title: 'task.inference.title',
    pid: 25,
    id: 6,
    breadcrumbLabel: 'breadcrumbs.task.inference',
  },
  {
    path: "/home/project/:id/label",
    name: "taskLabel",
    component: "@/pages/task/label/index",
    title: 'task.label.title',
    pid: 25,
    id: 7,
    breadcrumbLabel: 'breadcrumbs.task.label',
  },
  {
    path: "/home/project/:id/copy",
    name: "taskCopy",
    component: "@/pages/task/copy/index",
    title: 'dataset.copy.title',
    pid: 25,
    id: 8,
    breadcrumbLabel: 'breadcrumbs.datasets.copy',
  },
  {
    path: "/home/project/:id/dataset/add",
    name: "datasetImport",
    component: "@/pages/dataset/add",
    title: "dataset.add.title",
    pid: 25,
    id: 9,
    breadcrumbLabel: 'breadcrumbs.dataset.add',
  },
  {
    path: "/home/project/:id/dataset/analysis",
    name: "datasetAnalysis",
    component: "@/pages/dataset/analysis",
    title: "dataset.analysis.title",
    pid: 25,
    id: 38,
    breadcrumbLabel: 'breadcrumbs.dataset.analysis',
  },
  {
    path: "/home/project/:id/dataset/:did",
    name: "datasetDetail",
    component: "@/pages/dataset/detail",
    title: "dataset.title",
    pid: 32,
    id: 10,
    breadcrumbLabel: 'breadcrumbs.dataset',
  },
  {
    path: "/home/project/:id/dataset/:did/assets",
    name: "datasetDetail",
    component: "@/pages/dataset/assets",
    title: "assets.title",
    pid: 10,
    id: 11,
    breadcrumbLabel: 'breadcrumbs.dataset.assets',
  },
  {
    path: "/home/project/:id/model/import",
    name: "modelImport",
    component: "@/pages/model/add",
    title: "model.title",
    pid: 25,
    id: 13,
    breadcrumbLabel: 'breadcrumbs.model.add',
  },
  {
    path: "/home/project/:id/model/:mid",
    name: "modelDetail",
    component: "@/pages/model/detail",
    title: "model.title",
    pid: 33,
    id: 12,
    breadcrumbLabel: 'breadcrumbs.model',
  },
  {
    path: "/home/project/:id/model/:mid/verify",
    name: "modelVerify",
    component: "@/pages/model/verify",
    title: "model.verify.title",
    pid: 33,
    id: 15,
    breadcrumbLabel: 'breadcrumbs.model.verify',
  },
  {
    path: "/home/keyword",
    name: "keyword",
    component: "@/pages/keyword/index",
    title: "keywords.title",
    pid: 2,
    id: 17,
    breadcrumbLabel: 'breadcrumbs.keyword',
  },
  {
    path: "/home/user",
    name: "user",
    component: "@/pages/user/info",
    title: "keywords.title",
    pid: 2,
    id: 18,
    breadcrumbLabel: 'breadcrumbs.user.info',
  },
  {
    path: "/home/image",
    name: "image",
    component: "@/pages/image/index",
    title: "images.title",
    pid: 2,
    id: 19,
    breadcrumbLabel: 'breadcrumbs.images',
  },
  {
    path: "/home/image/detail/:id",
    name: "imageDetail",
    component: "@/pages/image/detail",
    title: "image.title",
    pid: 19,
    id: 21,
    breadcrumbLabel: 'breadcrumbs.image',
  },
  {
    path: "/home/image/add/:id?",
    name: "imageAdd",
    component: "@/pages/image/add",
    title: "image.add.title",
    pid: 19,
    id: 22,
    breadcrumbLabel: 'breadcrumbs.image.add',
  },
  {
    path: "/home/permission",
    name: "permission",
    component: "@/pages/user/permission",
    title: "user.permission.title",
    pid: 2,
    id: 23,
    breadcrumbLabel: 'breadcrumbs.configure.permission',
  },
  {
    path: "/home/project",
    name: "project",
    component: "@/pages/project/index",
    title: "projects.title",
    pid: 2,
    id: 24,
    breadcrumbLabel: 'breadcrumbs.projects',
  },
  {
    path: "/home/project/:id/detail",
    name: "projectDetail",
    component: "@/pages/project/detail",
    title: "project.summary",
    pid: 24,
    id: 25,
    breadcrumbLabel: 'breadcrumbs.project.summary',
  },
  {
    path: "/home/project/:id/dataset",
    name: "projectDataset",
    component: "@/pages/project/dataset",
    title: "datasets.title",
    pid: 25,
    id: 32,
    breadcrumbLabel: 'breadcrumbs.datasets',
  },
  {
    path: "/home/project/:id/model",
    name: "projectModel",
    component: "@/pages/project/models",
    title: "models.title",
    pid: 25,
    id: 33,
    breadcrumbLabel: 'breadcrumbs.models',
  },
  {
    path: "/home/project/:id/diagnose",
    name: "diagnose",
    component: "@/pages/project/diagnose",
    title: "model.diagnose.title",
    pid: 25,
    id: 34,
    breadcrumbLabel: 'breadcrumbs.model.diagnose',
  },
  {
    path: "/home/project/:id/add",
    name: "projectEdit",
    component: "@/pages/project/add",
    title: "project.settings.title",
    pid: 25,
    id: 26,
    breadcrumbLabel: 'breadcrumbs.project.edit',
  },
  {
    path: "/home/project/:id/iterations/settings",
    name: "projectEdit",
    component: "@/pages/project/iterationSettings",
    title: "project.iteration.add.title",
    pid: 25,
    id: 35,
    breadcrumbLabel: 'project.iteration.settings.title',
  },
  {
    path: "/home/project/add",
    name: "projectAdd",
    component: "@/pages/project/add",
    title: "project.add.title",
    pid: 24,
    id: 29,
    breadcrumbLabel: 'breadcrumbs.project.add',
  },
  {
    path: "/home/project/:id/hidden",
    name: "hidden",
    component: "@/pages/project/hidden",
    title: "project.hidden.title",
    pid: 25,
    id: 30,
    breadcrumbLabel: 'breadcrumbs.project.hidden',
  },
  {
    path: "/home/project/:id/iterations",
    name: "projectIteration",
    component: "@/pages/project/iterations",
    title: "project.iterations.title",
    pid: 25,
    id: 27,
    breadcrumbLabel: 'breadcrumbs.project.iterations',
  },
  {
    path: "/home/project/:id/initmodel",
    name: "initModel",
    component: "@/pages/iteration/initModel",
    title: "project.iteration.initmodel",
    pid: 25,
    id: 28,
    breadcrumbLabel: 'breadcrumbs.project.initmodel',
  },
  {
    path: "/home/algo/:module",
    name: "initModel",
    component: "@/pages/algo/index",
    title: "algo.title",
    pid: 0,
    id: 39,
    breadcrumbLabel: 'algo.title',
  },
]

const Routes = [
  {
    path: "/home",
    component: "@/layouts/index",
    routes: homeRoutes.map(({ path, name, component, title, redirect }) => {
      const route: Route = { path, name, title, }
      if (component) {
        route.component = component
      }
      if (redirect) {
        route.redirect = redirect
      }
      return route
    }),
  },
  {
    path: "/",
    component: "@/layouts/unauth",
    routes: [
      {
        path: "/",
        redirect: "/home/project",
      },
      {
        path: "/login",
        component: "@/pages/user/login",
        title: "login.title",
      },
      {
        path: "/forget_pwd",
        component: "@/pages/user/forget",
        title: "forget.title",
      },
      {
        path: "/reset_pwd/:token",
        component: "@/pages/user/resetPwd",
        title: "reset_pwd.title",
      },
      {
        path: "/signup",
        component: "@/pages/user/signup",
        title: "signup.title",
      },
    ],
  },
]

export default Routes