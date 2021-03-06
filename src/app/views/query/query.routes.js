function getStates() {
  return [
    {
      state: 'query',
      config: {
        url: '/query?q',
        params: {
          entity: null,
        },
        component: 'fimsQuery',
        resolve: {
          layout: () => 'column',
          layoutFill: () => '',
          projects: /* @ngInject */ ProjectService => ProjectService.all(true),
        },
      },
    },
  ];
}

export default routerHelper => {
  'ngInject';

  routerHelper.configureStates(getStates());
};
