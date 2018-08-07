function getStates() {
  return [
    {
      state: 'query',
      config: {
        url: '/query',
        component: 'fimsQuery',
        resolve: {
          layout: () => 'column',
          layoutFill: () => '',
        },
      },
    },
  ];
}

export default routerHelper => {
  'ngInject';

  routerHelper.configureStates(getStates());
};