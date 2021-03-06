function getStates() {
  return [
    {
      state: 'dashboard',
      config: {
        parent: 'projectView',
        url: '/dashboard',
        component: 'fimsDashboard',
        projectRequired: false,
        resolve: {
          stats: /* @ngInject */ ProjectService => ProjectService.stats(true),
          private: /* @ngInject */ ProjectService => ProjectService.all(false),
        },
      },
    },
  ];
}
export default routerHelper => {
  'ngInject';

  routerHelper.configureStates(getStates());
};
